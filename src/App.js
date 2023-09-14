
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import React from "react";
import AdminPage from '../src/pages/AdminPage';
import HomePage from '../src/pages/HomePage';
import ProductsPage from '../src/pages/ProductsPage';
import ProductDetail from '../src/pages/ProductDetail';
import NewProduct from './components/NewProduct';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
const mongoose = require('mongoose');






function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route>
        <Route path="/product/:productId"  element={<ProductDetail  />}> </Route>
        
      </Routes>
      
    </div>
  );
  };

export default App;
