import React, { useEffect } from "react";
import "./ImageLightbox.css";

const ImageLightbox = ({ src, onClose }) => {
  if (!src) return null;   // 👈 VERY IMPORTANT

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <span className="lightbox-close">×</span>

      <img
        src={src}
        alt="Preview"
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
