import React, { useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
<<<<<<< HEAD:aqua-pet-shop-client/src/pages/HomePage.js
=======
import ProductsPage from "./ProductsPage";
import NewProduct from "../components/NewProduct";
import Searchbar from "../components/Searchbar";



>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/pages/HomePage.js

function HomePage() {
  const initialData = [];
  const [data, setData] = useState(initialData);
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (searchTerm) => {
   
 
    

  

  const handleSearch = (searchTerm) => {
    // Perform the search logic here
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };


  
    return (
      <div>
<<<<<<< HEAD:aqua-pet-shop-client/src/pages/HomePage.js
        <Navbar />
        <Header />
        <h1>Working</h1>
=======
        <Navbar /> 
        {/* <Searchbar onSearch={handleSearch} />  */}
         <Header />
        <ProductsPage />
>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/pages/HomePage.js
        <Footer />
        
      </div>
    );
  // }
};
  
  export default HomePage;
  