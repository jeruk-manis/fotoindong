import { waLink } from "../config.js";
import { IkonIjazah, IkonKubus, IkonPotret, IkonKalender } from "./Icons.jsx";

const layanan = [
  {
    ikon: IkonIjazah,
    nama: "Wisuda",
    deskripsi: "Momen kelulusan yang ditunggu-tunggu, diabadikan dari sudut terbaik dengan gaya sinematik.",
    cocok: "Mahasiswa & keluarga",
    pesan: "Halo, saya tertarik dengan jasa foto wisuda. Boleh tanya harga dan ketersediaan jadwal?",
  },
  {
    ikon: IkonKubus,
    nama: "Produk",
    deskripsi: "Foto produk yang membuat barang Anda terlihat profesional dan menggiurkan.",
    cocok: "Pelaku usaha & UMKM",
    pesan: "Halo, saya tertarik dengan jasa foto produk. Boleh tanya harga dan cara kerjanya?",
  },
  {
    ikon: IkonPotret,
    nama: "Potret",
    deskripsi: "Sesi potret personal dengan pencahayaan dan mood yang menonjolkan karakter.",
    cocok: "Semua kalangan",
    pesan: "Halo, saya tertarik dengan jasa foto potret. Boleh tanya harga dan jadwal?",
  },
  {
    ikon: IkonKalender,
    nama: "Event",
    deskripsi: "Dokumentasikan acara Anda agar momen penting tidak terlewat dan bisa dikenang selamanya.",
    cocok: "Komunitas, instansi, & orang tua",
    pesan: "Halo, saya tertarik dengan jasa foto event. Boleh tanya harga dan ketersediaan?",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section services">
      <div className="container">
        <div className="section-kepala">
          <span className="section-label">Layanan</span>
          <h2 className="section-judul">Jasa yang kami tawarkan</h2>
          <p className="services__desc">
            Harga disesuaikan dengan kebutuhan. Tanyakan saja lewat WhatsApp — kami bantu pilih paket
            yang pas.
          </p>
        </div>

        <div className="services__grid">
          {layanan.map((l) => {
            const Ikon = l.ikon;
            return (
              <article key={l.nama} className="service-kartu">
                <span className="service-kartu__ikon">
                  <Ikon size={22} />
                </span>
                <h3 className="service-kartu__judul">{l.nama}</h3>
                <p>{l.deskripsi}</p>
                <span className="service-kartu__cocok">Cocok untuk: {l.cocok}</span>
                <a
                  href={waLink(l.pesan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Tanya harga
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}