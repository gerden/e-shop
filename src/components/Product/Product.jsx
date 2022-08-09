import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./Product.module.scss";

function Product({ product }) {
  return (
    <div className={styles.Product}>
      <h2>{product.name}</h2>
      <img
        className={styles.Product__Image}
        src={product.imageUrl[0]}
        width="500"
        height="333"
      ></img>

      <NavLink to={product.number.toString()}>Details/Buy</NavLink>
    </div>
  );
}

export default Product;
