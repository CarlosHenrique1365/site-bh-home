import { FaMale, FaFemale } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContactActions from "../Contact/ContactActions";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const gender = property.category[0];

  return (
    <div className="property-card">
      <img
        src={property.thumb}
        alt={property.title}
        onClick={() => navigate(`/property/${property.id}`)}
      />

      <div className="text-card">
        <h3>{property.title}</h3>
        <p>{property.distance}</p>
        <h3>R$ {property.price}</h3>

        <span className="badge-gender">
          {gender === "Masculino" ? (
            <FaMale />
          ) : (
            <FaFemale />
          )}

          {gender}
        </span>
      </div>

      <ContactActions />
    </div>
  );
};

export default PropertyCard;