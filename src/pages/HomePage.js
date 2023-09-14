import React, { useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsPage from "./ProductsPage";
import NewProduct from "../components/NewProduct";
import Searchbar from "../components/Searchbar";




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
        <Navbar /> 
        {/* <Searchbar onSearch={handleSearch} />  */}
         <Header />
        <ProductsPage />
        <Footer />
        
      </div>
    );
  // }
};
  
  export default HomePage;
  