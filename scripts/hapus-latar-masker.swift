import Vision
import CoreImage

let a = CommandLine.arguments
let input = URL(fileURLWithPath: a[1]), output = URL(fileURLWithPath: a[2])
let ci = CIImage(contentsOf: input)!
let req = VNGenerateForegroundInstanceMaskRequest()
let h = VNImageRequestHandler(ciImage: ci)
try h.perform([req])
let r = req.results!.first!
// Masker lembut resolusi penuh (bukan gambar yang sudah dipotong).
let buf = try r.generateScaledMaskForImage(forInstances: r.allInstances, from: h)
let m = CIImage(cvPixelBuffer: buf)
try CIContext().writePNGRepresentation(of: m, to: output, format: .L8, colorSpace: CGColorSpaceCreateDeviceGray())
print("ok", m.extent)
