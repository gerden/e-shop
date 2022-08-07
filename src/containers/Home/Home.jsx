import React from "react";
import data from "../students.json";
import styles from "./Home.module.scss";
import Product from "../../components/Product";
import { useState, useEffect } from "react";
import ProductCarousel from "../../components/ProductCarousel";
import {
  seedStudent,
  getProducts,
  updateStudent,
  deleteStudent,
  createStudent,
} from "../../services/server";

function Home() {
  // let products = data;

  const [products, setProduct] = useState([]);
  console.log("products");
  console.log(products);

  const getData = async () => {
    const data = await getProducts();
    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.Home}>
      <ProductCarousel />

      <div className={styles.Home__Grid}>
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
