import { config, waLink } from "../config.js";

const langkah = [
  {
    judul: "Hubungi kami",
    teks: "Chat WhatsApp atau isi Google Form. Kami akan balas secepatnya.",
    tautan: { label: "Chat sekarang", href: waLink("Halo, saya mau memesan jasa foto.") },
  },
  {
    judul: "Diskusi kebutuhan",
    teks: "Ceritakan konsep, lokasi, dan budget agar kami bisa menawarkan yang paling pas.",
  },
  {
    judul: "Tentukan jadwal",
    teks: "Sepakati jadwal dan lokasi pemotretan yang cocok untuk Anda.",
  },
  {
    judul: "Sesi foto",
    teks: "Kami memotret dengan pendekatan sinematik, santai, dan terarah.",
  },
  {
    judul: "Terima hasil foto",
    teks: config.estimasiHasil,
  },
];

export default function HowToOrder() {
  return (
    <section id="cara-pesan" className="section howto">
      <div className="container">
        <div className="section-kepala">
          <span className="section-label">Cara Pesan</span>
          <h2 className="section-judul">Mudah, cukup 5 langkah</h2>
        </div>

        <ol className="howto__langkah">
          {langkah.map((l, i) => (
            <li key={l.judul} className="langkah">
              <span className="langkah__nomor" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="langkah__judul">{l.judul}</h3>
                <p>{l.teks}</p>
                {l.tautan && (
                  <a href={l.tautan.href} target="_blank" rel="noopener noreferrer">
                    {l.tautan.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}