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
  const { productId } = useParams();
  const id = parseInt(productId);
  // if (singleProduct) {
  //   setLoading(false);
  // }
  console.log("testID");
  console.log(id);
  console.log("getSingleProduct(id)");
  console.log(singleProduct);
  // console.log(singleProduct.variants);

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

  const imageChange = async (index) => {
    // console.log(index);
    setImageNumber(index);
  };

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
            console.log("singleProductmmmmmmmmmmmmmggggggggggg");
            console.log(singleProduct);
            console.log(singleProduct.getElementById);
            return (
              <button onClick={() => imageChange(index)} key={index}>
                {productImage}
              </button>
            );
          })}
          <input type="amount" id="amount"></input>
          <button
            onClick={() =>
              addCart(singleProduct.id, document.getElementById("amount").value)
            }
          >
            add to cart
          </button>
        </div>
      )}
    </>
  );
}

export default Details;
