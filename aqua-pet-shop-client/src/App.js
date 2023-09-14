
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from "react";
import AdminPage from '../src/pages/AdminPage';
import HomePage from '../src/pages/HomePage';
import ProductsPage from '../src/pages/ProductsPage';
import SingleProduct from '../src/pages/SingleProduct';
import NewProduct from './components/NewProduct';
import Login from '../src/pages/Login';





function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route>
        <Route path="/admin" element={<AdminPage />}> </Route>
        <Route path="/products/:productId"  element={<SingleProduct  />}> </Route>
      </Routes>
      
    </div>
  );
  };

export default App;