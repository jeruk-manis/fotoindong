import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { IkonMenu, IkonTutup } from "./Icons.jsx";
import { config, waUmum } from "../config.js";

const menuItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#karya", label: "Karya" },
  { href: "#layanan", label: "Layanan" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    if (!buka) return;
    const body = document.body;
    const sebelum = body.style.overflow;
    body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") setBuka(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      body.style.overflow = sebelum;
      document.removeEventListener("keydown", onKey);
    };
  }, [buka]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar__inner">
          <a href="#beranda" className="navbar__link" aria-label={`Ke bagian atas ${config.namaUsaha}`}>
            <Logo />
          </a>

          <nav className="navbar__menu" aria-label="Navigasi utama">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={waUmum()} target="_blank" rel="noopener noreferrer" className="btn btn--aksen navbar__cta">
            Pesan Sekarang
          </a>

          <button
            type="button"
            className="navbar__tombol"
            aria-expanded={buka}
            aria-controls="menu-mobile"
            aria-label={buka ? "Tutup menu" : "Buka menu"}
            onClick={() => setBuka((v) => !v)}
          >
            {buka ? <IkonTutup size={22} /> : <IkonMenu size={22} />}
          </button>
        </div>
      </header>

      {buka && (
        <div id="menu-mobile" className="menu-mobile">
          <button
            type="button"
            className="menu-mobile__tutup"
            aria-label="Tutup menu"
            onClick={() => setBuka(false)}
          >
            <IkonTutup size={22} />
          </button>
          <nav aria-label="Navigasi utama ponsel">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setBuka(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={waUmum()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--aksen btn--full"
            onClick={() => setBuka(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </>
  );
}