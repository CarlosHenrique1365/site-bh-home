import "./Carousel.css"
import { useState } from "react";

function Carousel({ gallery }) {
  const [currentImage, setCurrentImage] =
    useState(0);

  if (!gallery || gallery.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  return (
    <div className="carousel">
      <img
        className="carousel-main"
        src={gallery[currentImage]}
        alt=""
      />

      <div className="carousel-thumbs">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() =>
              setCurrentImage(index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;