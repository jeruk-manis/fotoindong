// Semua data yang bisa berubah cukup diedit di file ini.
// Desain dan komponen tidak perlu diutak-atik.

export const config = {
  // -- Identitas -----------------------------------------------------------
  namaUsaha: "Foto in dong",
  tagline: "Photography",

  // Nomor WhatsApp dalam format internasional tanpa tanda +
  whatsappNumber: "6281261327971",

  // Link Google Form untuk booking. Kosongkan ("") jika belum ada —
  // tombol booking otomatis diarahkan ke WhatsApp.
  googleFormLink: "",

  // Link media sosial
  instagramUrl: "https://instagram.com/sulaiman_ahmad7",
  tiktokUrl: "https://tiktok.com/@namausaha",

  // -- Konten --------------------------------------------------------------
  areaLayanan: "Melayani pemotretan di area Kota Pekanbaru. Untuk lokasi di luar kota, bisa didiskusikan.",
  jamRespons: "Chat dibalas setiap hari, jam 08.00–19.00 WIB (Kecuali Waktu Sholat). Pesan di luar jam itu akan dibalas keesokan harinya.",
  estimasiHasil: "Hasil foto selesai dalam 3–7 hari kerja, dikirim dalam resolusi penuh melalui Google Drive atau galeri online.",

  // Foto hero (salah satu foto sinematik terbaik)
  heroImage: "/images/DSC00026_1920x1080.jpg",
  heroAlt: "Salah satu hasil foto bergaya sinematik",

  // Foto profil untuk bagian Tentang. Kosongkan ("") untuk tampil teks saja.
  profileImage: "",
  profileAlt: "Foto profil fotografer",

  // Meta
  metaTitle: "Nama Usaha — Jasa Foto Wisuda, Produk, Potret, dan Event",
  metaDescription:
    "Jasa foto wisuda, produk, potret, dan event dengan nuansa sinematik. Pesan mudah lewat WhatsApp atau Google Form.",
  ogImage: "/images/DSC05376_1.webp",
};

// Pesan otomatis
export function waLink(message) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waUmum = () =>
  waLink(`Halo ${config.namaUsaha}, saya tertarik dengan jasa foto Anda. Boleh minta info lebih lanjut?`);