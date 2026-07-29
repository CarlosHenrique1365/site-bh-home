import { useEffect, useMemo, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Media from "../../data/Media/Media";

const ListaN8n = ({ filter, search }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const carregarQuartos = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://n8n-n8n-30edfb-178-253-250-81.sslip.io/webhook/InfoQuartos"
          // "http://localhost:5678/webhook/InfoQuartos"
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }

        const text = await response.text();

        if (!text.trim()) {
          throw new Error("O webhook retornou uma resposta vazia.");
        }

        let data;

        try {
          data = JSON.parse(text);
        } catch {
          console.error("Resposta recebida:", text);
          throw new Error("O webhook não retornou um JSON válido.");
        }

        console.log("Resposta do n8n:", data);

        const rooms = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        const propertiesWithMedia = rooms.map((room) => {
          const media = Media[room.id] || {};
          console.log(room.id);

          return {
            ...room,
            thumb: media.thumb || "",
            gallery: media.gallery || [],
            video: media.video || "",
          };
        });

        if (isMounted) {
          setProperties(propertiesWithMedia);
        }
      } catch (err) {
        console.error("Erro ao carregar quartos:", err);

        if (isMounted) {
          setProperties([]);
          setError(err.message || "Não foi possível carregar os quartos.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    carregarQuartos();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProperties = useMemo(() => {
    let rooms = [...properties];

    // Pesquisa pelo Header
    if (search.trim() !== "") {
      const termo = search.toLowerCase();

      rooms = rooms.filter((room) =>
        [
          room.title,
          room.distance,
          room.address,
          room.description,
        ]
          .filter(Boolean)
          .some((value) =>
            value.toLowerCase().includes(termo)
          )
      );
    }

    // Botões de filtro
    switch (filter) {
      case "Faculdade":
        rooms = rooms.filter((room) =>
          room.distance?.toLowerCase().includes("faculdade")
        );
        break;

      case "Metrô":
        rooms = rooms.filter((room) =>
          room.distance?.toLowerCase().includes("metrô") ||
          room.distance?.toLowerCase().includes("metro")
        );
        break;

      case "Centro":
        rooms = rooms.filter((room) =>
          room.distance?.toLowerCase().includes("centro")
        );
        break;

      case "Menor preço":
        rooms.sort(
          (a, b) => Number(a.price || 0) - Number(b.price || 0)
        );
        break;

      case "Maior preço":
        rooms.sort(
          (a, b) => Number(b.price || 0) - Number(a.price || 0)
        );
        break;

      case "Tudo":
      default:
        break;
    }

    return rooms;
  }, [properties, filter, search]);

  if (loading) {
    return <p>Carregando quartos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid">
      {filteredProperties.length === 0 ? (
        <p>Nenhum quarto encontrado.</p>
      ) : (
        filteredProperties.map((property) => (
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