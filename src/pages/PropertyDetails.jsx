import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import Media from "../data/Media/Media";
import Carousel from "../components/Carousel/Carousel";
import ContactActions from "../components/Contact/ContactActions";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscar = async () => {
      try {
        const response = await fetch("https://n8n-n8n-30edfb-178-253-250-81.sslip.io/webhook/InfoQuartos");
        const data = await response.json();
        const rooms = Array.isArray(data) ? data : data.data || [];
        const found = rooms.find((room) => room.id === id);

        if (found) {
          const media = Media[found.id] || {};
          setProperty({
            ...found,
            thumb: media.thumb || "",
            gallery: media.gallery || [],
            video: media.video || "",
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    buscar();
  }, [id]);

  if (loading) return <div className="pd-loading">Carregando...</div>;
  if (!property) return <div className="pd-loading">Imóvel não encontrado</div>;

  // Título pode ter 2 ou 3 partes:
  // "Quarto 1 - Rua Guajajaras 65, Apto 402"
  // "Quarto 2 - 1° Andar - Rua Timbiras 1929, Apto 403"
  const parts = (property.title || "").split(" - ");
  const roomPart = parts[0] || "";
  const floorPart = parts.length === 3 ? parts[1] : null;
  const addressPart = parts.length === 3 ? parts[2] : parts[1] || "";

  const gender =
    Array.isArray(property.category) && property.category.length > 0
      ? property.category[0]
      : "Masculino";

  return (
    <div className="pd-page">
      <button className="pd-back" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1 className="pd-title">{property.title}</h1>

      <p className="pd-distance">{property.distance}</p>

      <div className="pd-gallery">
        <Carousel gallery={property.gallery} />
      </div>

      <div className="pd-body">
        <div className="pd-main">
          <div className="pd-host-row">
            <div>
              <h2 className="pd-subtitle">{roomPart}</h2>
              {floorPart && <p className="pd-floor">{floorPart}</p>}
              {addressPart && <p className="pd-address">{addressPart}</p>}
              <span className={`pd-badge-gender ${gender === "Feminino" ? "feminino" : "masculino"}`}>
                {gender === "Feminino" ? <FaFemale /> : <FaMale />}
                {gender}
              </span>
            </div>
          </div>

          <hr className="pd-divider" />

          {property.description && (
            <>
              <div className="pd-section">
                <h3 className="pd-section-title">Sobre o quarto</h3>
                <p className="pd-description">{property.description}</p>
              </div>
              <hr className="pd-divider" />
            </>
          )}

          <div className="pd-section">
            <h3 className="pd-section-title">Localização</h3>
            <p className="pd-description">{property.distance}</p>
          </div>
        </div>

        <div className="pd-sidebar">
          <div className="pd-price-card">
            <div className="pd-price-row">
              <span className="pd-price">
                R$ {Number(property.price || 0).toLocaleString("pt-BR")}
              </span>
              <span className="pd-price-label">/mês</span>
            </div>

            <div className="pd-badge-available">Disponível</div>

            <ContactActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
