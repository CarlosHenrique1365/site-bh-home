import { useParams } from "react-router-dom";
import properties from "../data/properties";
import Carousel from "../components/Carousel/Carousel";
import ContactActions from "../components/Contact/ContactActions";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (room) => room.id === Number(id)
  );

  if (!property) {
    return <h2>Imóvel não encontrado</h2>;
  }

  return (
    <div className="property-details">
      <h1>{property.title}</h1>

      <Carousel gallery={property.gallery} />

      <p>{property.desc}</p>

      <p>
        <strong>Preço:</strong> R$ {property.price}
      </p>

      <p>
        <strong>Distância:</strong> {property.distance}
      </p>

      <ContactActions />
    </div>
  );
}

export default PropertyDetails;