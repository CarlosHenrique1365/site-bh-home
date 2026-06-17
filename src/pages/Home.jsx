import { useState } from "react";
import "./Home.css"
import properties from "../data/properties"
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Header from "../components/Header/Header";
import Buttons from "../components/Header/Buttons";

function Home() {
    const [filter, setFilter] = useState("Tudo");
    const [search, setSearch] = useState("");

    let filteredProperties = [...properties];
 

    // BUSCA — filtra por título, descrição ou distância
    if (search) {
        filteredProperties = filteredProperties.filter((property) =>
            property.title.toLowerCase().includes(search.toLowerCase()) ||
            property.desc.toLowerCase().includes(search.toLowerCase()) ||
            property.distance.toLowerCase().includes(search.toLowerCase())
        );
    }

    // FILTROS BUTTONS
    if (filter === "Menor preço") {
        filteredProperties.sort((a, b) => a.price - b.price);
    } else if (filter === "Maior preço") {
        filteredProperties.sort((a, b) => b.price - a.price);
    } else if (filter !== "Tudo") {
        filteredProperties = filteredProperties.filter(
            (property) => property.category.includes(filter) // ✅ .includes()
        );
    }

    return (
        <>
            <Header
                searchValue={search}
                onSearchChange={setSearch}
            />
            <Buttons
                activeFilter={filter}
                onFilterChange={setFilter}
            />
            <main>
                <section className="properties-grid">
                    {filteredProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

export default Home;