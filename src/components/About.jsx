import { config } from "../config.js";
import { IkonCentang } from "./Icons.jsx";

const poin = [
  "Gaya foto sinematik yang khas",
  "Ramah untuk mahasiswa dan pelaku usaha",
  "Komunikasi mudah sepanjang proses",
  "Hasil dikirim rapi dan tepat waktu",
];

export default function About() {
  return (
    <section id="tentang" className="section about">
      <div className={`container about__grid ${config.profileImage ? "" : "about__grid--teks-saja"}`}>
        {config.profileImage && (
          <div className="about__foto">
            <img src={config.profileImage} alt={config.profileAlt} loading="lazy" />
          </div>
        )}
        <div className="about__teks">
          <span className="section-label">Tentang</span>
          <h2 className="section-judul">Foto In Dong</h2>
          <p>
            {config.namaUsaha} adalah jasa foto untuk momen-momen penting Anda. Kami mengabadikan
            wisuda, produk usaha, potret, hingga acara dengan pendekatan sinematik. Lighting,
            angel, dan suasana dirangkai agar setiap foto tidak sekadar dokumentasi, tapi juga
            foto yang bercerita.
          </p>
          <p>
            Anda mahasiswa yang ingin mengabadikan hari kelulusan? atau pelaku usaha yang
            butuh foto produk menggiurkan? Kami siap membantu anda.
          </p>
          <ul className="about__poin">
            {poin.map((item) => (
              <li key={item}>
                <IkonCentang size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}