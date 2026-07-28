import "./Carousel.css";
import { useState, useEffect, useMemo } from "react";

function Carousel({ gallery }) {
  const images = useMemo(() => {
    if (!Array.isArray(gallery)) return [];
    return gallery.filter(
      (image) => typeof image === "string" && image.trim() !== ""
    );
  }, [gallery]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [images]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="carousel">
        <div className="carousel-empty">
          Nenhuma imagem disponível
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-main-container">
        {images.length > 1 && (
          <button
            className="carousel-btn prev"
            onClick={previousImage}
            aria-label="Imagem anterior"
          >
            ‹
          </button>
        )}

        <img
          className="carousel-main"
          src={images[currentImage]}
          alt={`Imagem ${currentImage + 1}`}
        />

        {images.length > 1 && (
          <button
            className="carousel-btn next"
            onClick={nextImage}
            aria-label="Próxima imagem"
          >
            ›
          </button>
        )}

        {images.length > 1 && (
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentImage ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
