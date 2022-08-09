import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import React from "react";

function Nav() {
  return (
    <nav className={style.navBar}>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/ShoppingCart">ShoppingCart</NavLink>
    </nav>
  );
}
export default Nav;
