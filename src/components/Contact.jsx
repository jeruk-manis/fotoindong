import { config, waLink } from "../config.js";
import { IkonWhatsApp, IkonInstagram, IkonTikTok } from "./Icons.jsx";

const pesanKontak = "Halo, saya tertarik dengan jasa foto Anda. Boleh minta info lebih lanjut?";

export default function Contact() {
  const formLink = config.googleFormLink || waLink(pesanKontak);
  const formLabel = config.googleFormLink ? "Booking via Google Form" : "Booking via WhatsApp";

  return (
    <section id="kontak" className="section contact">
      <div className="container">
        <div className="section-kepala">
          <span className="section-label">Kontak</span>
          <h2 className="section-judul">Siap mengabadikan momen Anda?</h2>
          <p className="contact__lead">
            Tinggalkan pesan, lalu biarkan kami yang merancang fotonya. Tanpa biaya, tanpa komitmen —
            cukup tanya dulu.
          </p>
        </div>

        <div className="contact__aksi">
          <a href={waLink(pesanKontak)} target="_blank" rel="noopener noreferrer" className="btn btn--aksen">
            <IkonWhatsApp size={20} />
            Chat WhatsApp
          </a>
          <a href={formLink} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            {formLabel}
          </a>
        </div>

        <div className="contact__info">
          <div className="contact__item">
            <h3>Area layanan</h3>
            <p>{config.areaLayanan}</p>
          </div>
          <div className="contact__item">
            <h3>Jam respons</h3>
            <p>{config.jamRespons}</p>
          </div>
          <div className="contact__item">
            <h3>Media sosial</h3>
            <p style={{ marginBottom: 0 }}>Ikuti karya terbaru kami:</p>
            <div className="contact__sosial">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IkonInstagram size={20} />
              </a>
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <IkonTikTok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}