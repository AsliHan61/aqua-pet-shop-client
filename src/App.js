
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from '../src/components/Header';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
// import NewProduct from './NewProduct';
import AdminPage from '../src/pages/AdminPage';
import HomePage from '../src/pages/HomePage';
import ProductsPage from '../src/pages/ProductsPage';
import SingleProduct from '../src/pages/SingleProduct';

import axios from "axios";
const apiURL = "mongodb://127.0.0.1:27017/aqua-pet-shop-server";



function App() {

const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get(apiURL)
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((err) => console.log(err));
  };
  
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/admin" element={<AdminPage />}> </Route>
        <Route path="/products/:productId"  element={<SingleProduct  product={allProducts} />}> </Route>
      </Routes>
      <Footer />
    </div>
  );
  };

export default App;
