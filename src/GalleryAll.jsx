import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Gallery.css";
import { images } from "./data/images";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";


export default function GalleryAll() {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      <h1 className="title">All Gallery Images</h1>

      <div className="gallery">
        {images.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
          >
            <img
  src={src}
  alt="gallery"
  onClick={() => setSelectedImg(src)}
  style={{ cursor: "zoom-in" }}
/>

          </div>
        ))}
      </div>
    </>
  );
}
