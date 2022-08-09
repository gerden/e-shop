import React from "react";
// import data from "../students.json";
import CartProduct from "../../components/CartProduct";
import styles from "./ShoppingCart.module.scss";
import { useState, useEffect } from "react";
import { getCartProducts, getSingleProduct } from "../../services/server";

function ShoppingCart() {
  const [cartProducts, setCartProduct] = useState([]);

  const getData = async () => {
    const data = await getCartProducts();
    setCartProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(cartProducts);

  return (
    <div className={styles.Home__Grid}>
      {cartProducts.map((product, index) => {
        return <CartProduct key={index} product={product} />;
      })}
    </div>
  );
}

export default ShoppingCart;
