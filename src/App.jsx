import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}

export default App;
