import { categories } from "../photos.js";

const labelByCat = Object.fromEntries(categories.map((c) => [c.id, c.label]));

export default function PhotoGrid({ photos, onOpen }) {
  return (
    <div className="grid-foto">
      {photos.map((foto) => (
        <button
          key={foto.id}
          type="button"
          className="foto-kartu"
          onClick={() => onOpen(foto.id)}
          aria-label={`Buka foto: ${foto.alt}`}
        >
          <img
            src={foto.src}
            alt={foto.alt}
            loading="lazy"
            decoding="async"
            className="foto-kartu__img"
          />
          <span className="foto-kartu__label">{labelByCat[foto.category]}</span>
        </button>
      ))}
    </div>
  );
}