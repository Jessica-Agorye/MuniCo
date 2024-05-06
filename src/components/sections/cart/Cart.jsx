import { useSelector } from "react-redux";
import Menubar from "../menubar/Menubar";
import { useDispatch } from "react-redux";
import CartSummary from "../cartSummary/CartSummary";

import {
  removeFromCart,
  incrementCartItemQuantity,
} from "../../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  //   return (
  //     <div>
  //       <Menubar />
  //       <p className=" mt-20 mb-10 pl-10 text-2xl font-semibold">Cart Items</p>
  //       <div className=" grid grid-cols-2 h-60">
  //         {cartItems.length > 0 && (
  //           <div className="mt-20 h-30 ">
  //             {cartItems.map((item) => {
  //               return (
  //                 <div className="mt-20 mx-20 w-60 h-50" key={item.id}>
  //                   <img
  //                     src={item.image}
  //                     alt={item.title}
  //                     className=" w-30 h-30"
  //                   />
  //                   <p>Description: {item.description}</p>
  //                   <p>Price: {item.price}</p>
  //                   <h2>{item.title}</h2>
  //                   <div className="flex gap-3">
  //                     <button
  //                       onClick={() =>
  //                         dispatch(incrementCartItemQuantity({ id: item.id }))
  //                       }
  //                     >
  //                       +
  //                     </button>
  //                     <p>{item.count}</p>
  //                     <button>-</button>
  //                   </div>

  //                   <button
  //                     onClick={() => dispatch(removeFromCart({ id: item.id }))}
  //                     className="bg-blue-500 text-white px-4 py-2 mt-4"
  //                   >
  //                     Remove Item
  //                   </button>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         )}

  //         {cartItems.length === 0 && (
  //           <p className="text-3xl text-center mt-20">Your Cart Is Empty</p>
  //         )}

  //         {cartItems.length > 0 && (
  //           <div className=" ">
  //             <CartSummary />
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <Menubar />
      <p className=" mt-20 mb-10 pl-10 text-2xl font-semibold">Cart Items</p>
      <div className=" grid grid-cols-2 h-60">
        {cartItems.length > 0 ? (
          <div className="mt-20 h-30 ">
            {cartItems.map((item) => {
              return (
                <div className="mt-20 mx-20 w-60 h-50" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-30 h-30"
                  />
                  <p>Description: {item.description}</p>
                  <p>Price: {item.price}</p>
                  <h2>{item.title}</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        dispatch(incrementCartItemQuantity({ id: item.id }))
                      }
                    >
                      +
                    </button>
                    <p>{item.count || 1}</p>
                    <button>-</button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className="bg-blue-500 text-white px-4 py-2 mt-4"
                  >
                    Remove Item
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-3xl text-center mt-20">Your Cart Is Empty</p>
        )}

        {cartItems.length > 0 && (
          <div className=" ">
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
