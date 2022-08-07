import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./Product.module.scss";

function Product({ product }) {
  console.log("product");
  console.log(product);
  console.log("idtestttttttttttttttttttttttttttttttt");
  console.log(product.id);
  console.log(product.id);
  const productImage = fetch(
    "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/592843-Product-0-I-637921022577170763_800x800.jpg?v=1656479744"
  );
  return (
    <div className={styles.Product}>
      <h2>{product.name}</h2>
      <img
        className={styles.Product__Image}
        src={product.imageUrl[0]}
        width="500"
        height="333"
      ></img>

      <NavLink to={product.id.toString()}>Details/Buy</NavLink>
    </div>
  );
}

export default Product;
