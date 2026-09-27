import { config } from "../config.js";

// Satu komponen Logo. Mengganti logo asli cukup mengganti file public/logo-dummy.svg.
export default function Logo({ className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <img
        src="/logo-putih.svg"
        alt={`Logo ${config.namaUsaha} Photography`}
        width="100"
        height="60"
      />
    </span>
  );
}