import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const calculateTotal = () => {
    let totalPrice = 0;

    // Calculate total price by summing the price of each item in the cart
    cartItems.forEach((item) => {
      totalPrice += item.price * (item.count || 1); // Multiply item price by its quantity
    });

    return totalPrice;
  };

  return (
    <div className=" space-y-6">
      <p className=" font-semibold text-2xl">CART SUMMARY</p>
      <p>Total: ${calculateTotal().toFixed(2)} </p>
      <Link to="/checkout">
        <button className=" bg-blue-700 px-2 py-2">
          Checkout: ${calculateTotal().toFixed(2)}
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
