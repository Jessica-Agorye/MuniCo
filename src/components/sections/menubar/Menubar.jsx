import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menubar = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="">
      <div className="grid grid-cols-3  ">
        <div className=" text-3xl mt-4">
          <p className="ml-6 font-semibold">Muni-Co</p>
        </div>
        <div className="  pl-10 ">
          <ul className="flex gap-6 ml-6 mt-6 font-semibold">
            <li className=" font-bold">Home</li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
        <div className=" flex pl-60 gap-6 mt-4">
          <button className="bg-black text-white  font-bold px-6  py-1 text-center">
            Login
          </button>
          <Link to="/cart">
            {" "}
            <p className="mt-2 text-2xl">
              {" "}
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{" "}
              {cartItems.length}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
