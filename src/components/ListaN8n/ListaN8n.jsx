import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Media from "../../data/Media/Media";

const ListaN8n = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarQuartos = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5678/webhook/InfoQuartos"
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log("Resposta do n8n:", data);

        // O n8n pode retornar um array diretamente ou dentro de "data"
        const rooms = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : [];

        // Junta as informações do n8n com as mídias locais
        const propertiesWithMedia = rooms.map((room) => {
          const media = Media[room.id] || {};

          return {
            ...room,
            thumb: media.thumb || "",
            gallery: media.gallery || [],
            video: media.video || "",
          };
        });

        console.log("Dados renderizados:", propertiesWithMedia);

        setProperties(propertiesWithMedia);
        setError("");
      } catch (err) {
        console.error("Erro ao carregar quartos:", err);
        setProperties([]);
        setError("Não foi possível carregar os quartos.");
      } finally {
        setLoading(false);
      }
    };

    carregarQuartos();
  }, []);

  if (loading) {
    return <p>Carregando quartos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid">
      {properties.length === 0 ? (
        <p>Nenhum quarto disponível.</p>
      ) : (
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))
      )}
    </div>
  );
};

export default ListaN8n;