import { config, waUmum } from "../config.js";
import { IkonKamera } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <img src={config.heroImage} alt={config.heroAlt} className="hero__bg" loading="eager" fetchPriority="high" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container">
        <div className="hero__isi">
          <p className="hero__label">
            <IkonKamera size={18} />
            {config.tagline} 
          </p>
          <h1 className="hero__judul">{config.namaUsaha}</h1>
          <p className="hero__sub">
            Setiap momen memiliki ritme dan ceritanya sendiri yang tak akan terulang kedua kalinya. Simpan memori terbaik Anda dalam bingkai visual yang hangat sebelum waktu berlalu meninggalkan jejak.
          </p>
          <div className="hero__aksi">
            <a href="#karya" className="btn btn--aksen">
              Lihat Karya
            </a>
            <a href={waUmum()} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}