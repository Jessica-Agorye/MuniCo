// Import necessary components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screen/HomePage";
import Products from "./components/sections/products/Products";
import ProductPage from "./components/sections/productDetails/ProductPage"; // Import ProductPage
import Cart from "./components/sections/cart/Cart";

// Define the main component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />{" "}
        {/* Pass ProductPage component to route */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

// Export the main component
export default App;
