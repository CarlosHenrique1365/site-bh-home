import { useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import Buttons from "../components/Header/Buttons";
import ListaN8n from "../components/ListaN8n/ListaN8n";

function Home() {
    const [filter, setFilter] = useState("Tudo");
    const [search, setSearch] = useState("");

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
                <ListaN8n
                    filter={filter}
                    search={search}
                />
            </main>
        </>
    );
}

export default Home;