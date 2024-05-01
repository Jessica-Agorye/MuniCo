import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  let total = useSelector((state) => state.cart.total);
  let count = useSelector((state) => state.cart.count);
  console.log(count);

  const calculateTotal = () => {
    if (count === 1) {
      cartItems.forEach((item) => {
        total += item.price;
      });

      return total;
    }

    if (count > 1) {
      cartItems.forEach((item) => {
        count;
        total = item.price * count;
      });

      return total;
    }
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
