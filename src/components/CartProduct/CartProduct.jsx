import React from "react";
import { useState, useEffect } from "react";
import {
  getSingleProduct,
  updateProductAmount,
  updateCartProductAmount,
  deleteCartProduct,
} from "../../services/server";

function CartProduct({ product }) {
  const [productDetailed, setproductDetailed] = useState([]);

  const [amount, setAmount] = useState(0);

  const getData = async () => {
    const data = await getSingleProduct(product.number);
    setproductDetailed(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const increase = () => {
    updateProductAmount(productDetailed, productDetailed.quantity - 1);
    updateCartProductAmount(product, product.amount + 1);
    getData();
    // this.forceUpdate();
  };

  const decrease = () => {
    updateProductAmount(productDetailed, productDetailed.quantity + 1);
    updateCartProductAmount(product, product.amount - 1);
    getData();
  };

  const deleteProduct = () => {
    updateProductAmount(
      productDetailed,
      productDetailed.quantity + product.amount
    );
    deleteCartProduct(product);
    getData();
  };

  return (
    <>
      {}
      <h2>{productDetailed.name}</h2>
      <p>Amount: {product.amount}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>reduce</button>
      <button onClick={deleteProduct}>delete</button>
    </>
  );
}

export default CartProduct;
