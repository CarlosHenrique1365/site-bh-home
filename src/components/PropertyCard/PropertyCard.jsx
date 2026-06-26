import { FaMale, FaFemale } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContactActions from "../Contact/ContactActions";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  if (!property) return null;

  const gender =
    Array.isArray(property.category) && property.category.length > 0
      ? property.category[0]
      : "Masculino";

  return (
    <article className="property-card">
      {/* Imagem */}
      {property.thumb && (
        <img
          src={property.thumb}
          alt={property.title}
          onClick={() => navigate(`/property/${property.id}`)}
        />
      )}

      {/* Conteúdo */}
      <div className="property-card-content">
        <h3>{property.title}</h3>

        <p>{property.distance}</p>

        <h2>
          R$ {Number(property.price || 0).toLocaleString("pt-BR")}
        </h2>

        <div className="property-card-footer">
          <span className="badge-gender">
            {gender === "Feminino" ? <FaFemale /> : <FaMale />}
            {gender}
          </span>

          <span className="badge-available">
            Disponível
          </span>
        </div>
      </div>

      <ContactActions />
    </article>
  );
};

export default PropertyCard;