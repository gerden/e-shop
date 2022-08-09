import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import Product from "./components/Product";
import Details from "./components/Details";
import Nav from "./components/Nav";
import { useState } from "react";
// import ProductCarousel from "./components/ProductCarousel";
import {
  seedStudents,
  getProducts,
  updateProductAmount,
  deleteStudent,
  createStudent,
} from "./services/server";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <button onClick={seedStudents}>Seed DB</button> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:productId" element={<Details />} />

        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
