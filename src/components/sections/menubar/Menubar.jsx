import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../login/LogInForm";

const Menubar = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [loginClicked, setLogInClicked] = useState(false);

  function handleLogInClick() {
    setLogInClicked(true);
  }

  return (
    <div className="menubar">
      <div className="grid grid-cols-3">
        <div className="text-3xl mt-4">
          <p className="pl-20 font-semibold">Muni-Co</p>
        </div>
        <div className="flex justify-center pl-10">
          <ul className="flex gap-6 ml-6 mt-6 font-semibold">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex pl-60 gap-6 mt-4">
          <Link to="/">
            <button
              className="bg-black text-white font-bold px-6 py-1 text-center"
              onClick={handleLogInClick}
            >
              Login
            </button>
          </Link>
          <Link to="/cart">
            <p className="mt-2 text-2xl">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>{" "}
              {cartItems.length}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex justify-end mr-10 mt-10 ">
        {loginClicked && <LoginForm />}
      </div>
    </div>
  );
};

export default Menubar;
