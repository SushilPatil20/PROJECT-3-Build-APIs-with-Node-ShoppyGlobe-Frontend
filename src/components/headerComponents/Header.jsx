import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems);

  return (
    <header className="flex items-center justify-between py-6 border-b sticky top-0 bg-blue-800 px-8">
      <Logo />
      <Link to={`/cart`}>
        <div className="relative">
          <span className="text-2xl text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          {totalCarts.length !== 0 && (
            <span
              className="absolute right-0 -top-4 bg-blue-400 min-w-7 h-7 
    flex items-center justify-center rounded-full text-white -z-10"
            >
              {totalCarts.length}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;
