import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  let total = useSelector((state) => state.cart.total);

  const calculateTotal = () => {
    cartItems.forEach((item) => {
      total += item.price;
    });

    return total;
  };

  return (
    <div>
      <p>Cart Summary</p>
      <p>Total: ${calculateTotal().toFixed(2)} </p>
      <button>Checkout: ${total.toFixed(2)}</button>
    </div>
  );
};

export default CartSummary;
