import { useEffect, useRef } from "react";
import {
  IkonTutup,
  IkonPanahKiri,
  IkonPanahKanan,
} from "./Icons.jsx";

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const tutupRef = useRef(null);
  const sentuhMulai = useRef(null);

  const jumlah = photos.length;
  const foto = photos[index];

  useEffect(() => {
    tutupRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);

    const body = document.body;
    const sebelum = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = sebelum;
    };
  }, [onClose, onPrev, onNext]);

  if (!foto) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Lihat foto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        sentuhMulai.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (sentuhMulai.current === null) return;
        const deltaX = e.changedTouches[0].clientX - sentuhMulai.current;
        if (Math.abs(deltaX) > 50) {
          if (deltaX < 0) onNext();
          else onPrev();
        }
        sentuhMulai.current = null;
      }}
    >
      <button
        ref={tutupRef}
        type="button"
        className="lightbox__tutup"
        onClick={onClose}
        aria-label="Tutup foto"
      >
        <IkonTutup size={20} />
      </button>

      {jumlah > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={onPrev}
            aria-label="Foto sebelumnya"
          >
            <IkonPanahKiri size={22} />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={onNext}
            aria-label="Foto berikutnya"
          >
            <IkonPanahKanan size={22} />
          </button>
        </>
      )}

      <img src={foto.src} alt={foto.alt} className="lightbox__gambar" draggable="false" />

      <p className="lightbox__keterangan">
        {foto.title} · {index + 1} / {jumlah}
      </p>
    </div>
  );
}