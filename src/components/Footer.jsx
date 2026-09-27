import Logo from "./Logo.jsx";
import { config } from "../config.js";
import { IkonWhatsApp, IkonInstagram, IkonTikTok } from "./Icons.jsx";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__kiri">
          <Logo />
          <div className="footer__sosial">
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IkonWhatsApp size={18} />
            </a>
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IkonInstagram size={18} />
            </a>
            <a
              href={config.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <IkonTikTok size={18} />
            </a>
          </div>
        </div>
        <div className="footer__hak-cipta">
          © {tahun} {config.namaUsaha} Photography. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}