import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Listing from "./pages/listing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/products/:id" element={<ProductDetail />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}