"""Matting dua warna untuk foto berlatar polos: tanpa cahaya/halo di tepi.
alpha = proyeksi (C − B) ke (H − B); B = latar lokal, H = warna subjek terdekat dari bagian dalam."""
import sys, numpy as np
from PIL import Image, ImageFilter
src, mask, out = sys.argv[1:4]
img = np.asarray(Image.open(src).convert("RGB")).astype(np.float32) / 255
vm = Image.open(mask).convert("L")
hard = np.asarray(vm).astype(np.float32) / 255

def box(x, r, axis):
    c = np.cumsum(np.pad(x, [(r + 1, r) if i == axis else (0, 0) for i in range(x.ndim)], mode="edge"), axis=axis)
    n = c.shape[axis]
    return (np.take(c, range(2 * r + 1, n), axis=axis) - np.take(c, range(0, n - 2 * r - 1), axis=axis)) / (2 * r + 1)
def blur(x, r):
    for _ in range(3):
        x = box(box(x, r, 0), r, 1)
    return x
def spread(color, w, r):  # rata-rata warna berbobot, menyebar keluar dari area w
    d = blur(w, r)
    return np.dstack([blur(color[..., c] * w, r) for c in range(3)]) / np.maximum(d, 1e-5)[..., None], d

# Area: pasti latar, pasti subjek, dan pita tepi di antaranya.
outer = np.asarray(vm.filter(ImageFilter.MaxFilter(31))).astype(np.float32) / 255 > 0.5
inner = np.asarray(vm.filter(ImageFilter.MinFilter(21))).astype(np.float32) / 255 > 0.5
bgw = (hard < 0.02).astype(np.float32)
B, _ = spread(img, bgw, 30)
# Warna subjek terdekat: dari piksel yang pasti subjek & jelas beda dari latar.
far = np.linalg.norm(img - B, axis=2) > 0.35
fgw = ((hard > 0.9) & far).astype(np.float32)
H, hd = spread(img, fgw, 6)
H2, _ = spread(img, fgw, 20)
H = np.where((hd > 0.02)[..., None], H, H2)

v = H - B
proj = np.sum((img - B) * v, axis=2) / np.maximum(np.sum(v * v, axis=2), 1e-4)
a = np.clip(proj, 0, 1)
a = np.where(inner, 1.0, np.where(outer, a, 0.0))
# Rapikan: buang sisa sangat tipis, sedikit pertegas.
a = np.clip((a - 0.08) / 0.84, 0, 1)
# Warna: di dalam = asli; di tepi = warna subjek H (latar sudah tak ada sama sekali).
F = np.where(inner[..., None], img, np.clip((img - (1 - a[..., None]) * B) / np.maximum(a, 1e-3)[..., None], 0, 1))
t = np.clip(1 - a, 0, 1)[..., None] ** 0.5
F = np.where(inner[..., None], F, F * (1 - t) + H * t)
res = Image.fromarray((np.dstack([F, a]) * 255).round().astype(np.uint8))
res = res.crop(res.getchannel("A").point(lambda q: 255 if q > 8 else 0).getbbox())
res.save(out)
print(res.size)
