import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";
import ImageLightbox from "./ImageLightbox";


gsap.registerPlugin(ScrollTrigger);

const images = [
  "../1 (2).jpg",
  "../1 (4).jpg",
  "../1 (5).jpg",
  "../1 (7).jpg",
  "../1 (8).jpg",
  "../1 (9).jpg",
  "../1 (10).jpg",
  "../1 (11).jpg",
  // baaki images same rahengi
];

export default function Gallery() {

  const [selectedImg, setSelectedImg] = useState(null);
  const galleryRef = useRef(null);
  const itemsRef = useRef([]);
  const navigate = useNavigate();

  const visibleImages = images.slice(0, 6); // ✅ sirf 6 images

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <h1 className="title">Gallery</h1>

      <div className="gallery" ref={galleryRef}>
        {visibleImages.map((src, i) => (
          <div
            className="gallery-item"
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
          >
            <img
              src={src}
               alt="gallery"
                  onClick={() => {
                    console.log("clicked", src);   // 👈 TEST LINE
                     setSelectedImg(src);
                     }}
                   style={{ cursor: "zoom-in" }}
            />


          </div>
        ))}
      </div>

      <ImageLightbox
      src={selectedImg}
      onClose={() => setSelectedImg(null)}
    />

      {/* LOAD MORE BUTTON */}
      <div className="load-more-wrapper">
        <button
          className="load-more-btn"
          onClick={() => navigate("/gallery-all")}
        >
          Load More
        </button>
      </div>
    </>
  );
}
