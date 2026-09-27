import { photos as allPhotos, categories } from "../photos.js";

const labelByCat = Object.fromEntries(categories.map((c) => [c.id, c.label]));

export default function CategoryFilter({ active, onChange }) {
  // Kategori yang tidak punya foto disembunyikan otomatis.
  const tampil = categories.filter(
    (c) => c.id === "semua" || allPhotos.some((p) => p.category === c.id)
  );

  return (
    <div
      className="filter"
      role="tablist"
      aria-label="Filter kategori foto"
    >
      {tampil.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={active === c.id}
          className={active === c.id ? "filter--aktif" : ""}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}