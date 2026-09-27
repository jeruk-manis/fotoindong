import { useCallback, useMemo, useState } from "react";
import { photos as allPhotos } from "../photos.js";
import CategoryFilter from "./CategoryFilter.jsx";
import PhotoGrid from "./PhotoGrid.jsx";
import Lightbox from "./Lightbox.jsx";

export default function Gallery() {
  const [filter, setFilter] = useState("semua");
  const [terbukaId, setTerbukaId] = useState(null);

  const daftar = useMemo(
    () => (filter === "semua" ? allPhotos : allPhotos.filter((p) => p.category === filter)),
    [filter]
  );

  const indeksTerbuka = useMemo(
    () => daftar.findIndex((p) => p.id === terbukaId),
    [daftar, terbukaId]
  );

  const ganti = useCallback(
    (arah) => {
      setTerbukaId((id) => {
        if (id === null) return id;
        const i = daftar.findIndex((p) => p.id === id);
        const baru = (i + arah + daftar.length) % daftar.length;
        return daftar[baru].id;
      });
    },
    [daftar]
  );

  const tutup = useCallback(() => setTerbukaId(null), []);
  const prev = useCallback(() => ganti(-1), [ganti]);
  const next = useCallback(() => ganti(1), [ganti]);

  return (
    <section id="karya" className="section gallery">
      <div className="container">
        <div className="section-kepala">
          <span className="section-label">Karya</span>
          <h2 className="section-judul">Galeri hasil karya</h2>
          <p className="gallery__desc">
            Sebagian dokumentasi yang telah kami ambil. Ketuk foto untuk melihat lebih dekat.
          </p>
        </div>

        <CategoryFilter active={filter} onChange={setFilter} />

        <div key={filter} className="grid-foto--masuk">
          <PhotoGrid photos={daftar} onOpen={setTerbukaId} />
        </div>
      </div>

      {indeksTerbuka >= 0 && (
        <Lightbox
          photos={daftar}
          index={indeksTerbuka}
          onClose={tutup}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}