import { useEffect, useRef, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContactActions from "../Contact/ContactActions";
import Carousel from "../Carousel/Carousel";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" } // começa a carregar um pouco antes de entrar na tela
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  if (!property) return null;

  const gender =
    Array.isArray(property.category) && property.category.length > 0
      ? property.category[0]
      : "Masculino";

  return (
    <article className="property-card" ref={cardRef}>
      {/* Imagem */}
      <div onClick={() => navigate(`/property/${property.id}`)}>
        {isVisible ? (
          <Carousel
            gallery={
              property.gallery?.length ? property.gallery : [property.thumb]
            }
          />
        ) : (
          <div className="property-card-skeleton" />
        )}
      </div>

      {/* Conteúdo */}
      <div className="property-card-content">
        <h3>{property.title}</h3>

        <p>{property.distance}</p>

        <h2>R$ {Number(property.price || 0).toLocaleString("pt-BR")}</h2>

        <div className="property-card-footer">
          <span className="badge-gender">
            {gender === "Feminino" ? <FaFemale /> : <FaMale />}
            {gender}
          </span>

          <span className="badge-available">Disponível</span>
        </div>
      </div>

      <ContactActions />
    </article>
  );
};

export default PropertyCard;
