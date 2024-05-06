// ProductPage.jsx
import { useLocation } from "react-router-dom";
import Menubar from "../menubar/Menubar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";

const ProductPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  if (!state || !state.product) {
    return <div>Loading...</div>;
  }

  const { product } = state;

  return (
    <div>
      <Menubar />
      <div className="mt-20 mx-auto w-2/5 flex gap-8">
        <div>
          {" "}
          <img
            src={product.image}
            alt={product.title}
            className=" w-690 h-30"
          />
        </div>

        <div className="mt-20 leading-8">
          <p>
            <span className=" font-bold">Description:</span>{" "}
            {product.description}
          </p>
          <p>
            {" "}
            <span className=" font-bold">Price:</span> {product.price}
          </p>
          <h2>{product.title}</h2>
          {/* Add other details as needed */}
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4"
            onClick={() => dispatch(addToCart(product))}
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
