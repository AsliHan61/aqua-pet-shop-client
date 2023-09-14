import React from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsPage from "./ProductsPage";
import NewProduct from "../components/NewProduct";


function HomePage() {

  
    return (
      <div>
        <Navbar /> 
         <Header />
        <h1>Products</h1>
        <ProductsPage />
        <Footer />
        
      </div>
    );
  }
  
  export default HomePage;
  