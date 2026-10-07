export interface ComparisonRow {
  task: string;
  before: string;
  after: string;
}

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    task: "Mencatat pesanan",
    before: "Kertas dan ingatan",
    after: "Langsung masuk ke layar dapur",
  },
  {
    task: "Pesanan meja",
    before: "Kasir bolak-balik ke meja",
    after: "Pelanggan pesan lewat QR",
  },
  {
    task: "Kasbon pelanggan",
    before: "Buku utang terpisah",
    after: "Tercatat di transaksi, ada pengingat",
  },
  {
    task: "Tutup kasir",
    before: "Hitung manual pakai kalkulator",
    after: "Selisih kas langsung terlihat",
  },
  {
    task: "Absen karyawan",
    before: "Kertas absen di dinding",
    after: "PIN atau wajah di tablet kasir",
  },
  {
    task: "Laporan ke pemilik",
    before: "Foto buku dikirim lewat chat",
    after: "Laporan siap dibuka dari HP",
  },
];
