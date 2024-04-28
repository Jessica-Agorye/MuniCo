import { useState, useEffect } from "react";
import Menubar from "../menubar/Menubar";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Response Failed");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Menubar />
      <div className="mt-16">
        <p className=" mb-10 pl-10 text-2xl font-semibold">Products Page</p>

        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded-md mx-10"
            >
              <Link to={`/product/${product.id}`} state={{ product }}>
                <img src={product.image} alt="" className="w-56 h-" />
              </Link>
              <h2 className="mt-4">Product: {product.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
