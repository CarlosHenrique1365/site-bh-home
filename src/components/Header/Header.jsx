import "./Header.css";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.jpeg";

function Header({ searchValue, onSearchChange }) {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img
          src={logo}
          alt="BHomes"
          className="logo"
        />
      </div>

      <div className="search-container">
        <FiSearch />
        <input
          type="search"
          placeholder="Buscar quartos..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;