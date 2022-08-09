import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleProduct, addCart } from "../../services/server";
import styles from "./Details.module.scss";
import {
  seedStudents,
  getProducts,
  updateProductAmount,
  deleteStudent,
  createStudent,
} from "../../services/server";

function Details() {
  const [singleProduct, setsingleProduct] = useState();
  const [imageNumber, setImageNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  const [input, setInput] = useState("0");

  const { productId } = useParams();
  const id = parseInt(productId);

  const [products, setProducts] = useState([]);

  const getDataAll = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleChange = async (newRecord) => {
    const { id, ...reccord } = newRecord;
    await updateProductAmount(id, reccord);
    getDataAll();
  };

  const getData = async () => {
    const data = await getSingleProduct(id);
    setsingleProduct(data);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const imageChange = (index) => {
    setImageNumber(index);
  };

  useEffect(() => {
    console.log("amount TEST ", amount);
    setAmount(parseInt(input));
  }, [input]);

  useEffect(() => {
    getData();
  }, [imageNumber]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!singleProduct && <p>Loading</p>}
      {singleProduct && (
        <div className={styles.Details}>
          <h2>{singleProduct.name}</h2>
          <h2>Price: ${singleProduct.pricePerUnit}</h2>
          <h2>Quantity: {singleProduct.quantity}</h2>
          <img
            name="productImage"
            src={singleProduct.imageUrl[imageNumber]}
            width="500"
            height="333"
          ></img>
          {singleProduct.variants.map((productImage, index) => {
            return (
              <button onClick={() => imageChange(index)} key={index}>
                {productImage}
              </button>
            );
          })}
          <input
            type="number"
            id="amount"
            min="0"
            max={singleProduct.quantity}
            value={amount}
            onChange={handleInputChange}
          />
          <button onClick={() => addCart(singleProduct, amount)}>
            add to cart
          </button>
        </div>
      )}
    </>
  );
}

export default Details;
