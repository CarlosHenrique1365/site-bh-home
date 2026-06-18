import "./Buttons.css";
// Importa os ícones
import { FaUniversity, FaSubway, FaMapMarkerAlt, FaSortAmountDown, FaSortAmountUp, FaThLarge } from "react-icons/fa";
const filters = [
  { label: "Tudo",        icon: <FaThLarge /> },
  { label: "Faculdade",   icon: <FaUniversity /> },
  { label: "Metrô",       icon: <FaSubway /> },
  { label: "Centro",      icon: <FaMapMarkerAlt /> },
  { label: "Menor preço", icon: <FaSortAmountDown /> },
  { label: "Maior preço", icon: <FaSortAmountUp /> },
];

function Buttons ({activeFilter, onFilterChange}) {
  return(
    <ul className="filters">
      {filters.map((filter) => {
        return(
        <li key={filter.label}>
          <button
            className={`filter-button ${
              activeFilter == filter.label ? "active" : ""}`}
              onClick={() => onFilterChange(filter.label)}>
                {filter.icon}
                {filter.label} 
          </button>
        </li>
      )
      })}
    </ul>
  )
};

export default Buttons;