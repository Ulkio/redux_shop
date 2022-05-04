import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Header.module.css";

function Header() {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <header className={style.header}>
      <Link to="/">Home</Link>
      <Link to="/cart">
        Panier <span className={style.cartSize}>{cart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
