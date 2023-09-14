import React from "react";
import axios from "axios";
<<<<<<< HEAD:aqua-pet-shop-client/src/components/NewProduct.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
=======
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/NewProduct.js

function NewProduct() {
   const initialForm = {
    name: "",
    type: "",
    price:"" ,
    stock: "",
    description: "",
    imgURL: "",
    rating: "",
   };
<<<<<<< HEAD:aqua-pet-shop-client/src/components/NewProduct.js
   
  const [form, setForm] = useState(initialForm);

  const navigate = useNavigate();

  const handleForm = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue })); 
  };
  
=======
   const [form, setForm] = useState(initialForm);


>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/NewProduct.js
  function handleSubmit (e) {
    e.preventDefault();
    const newProduct = form;
    axios.post("mongodb://127.0.0.1:27017/aqua-pet-shop-server/products/new", newProduct)
    .then((response) => {
      setForm(initialForm)
    });
<<<<<<< HEAD:aqua-pet-shop-client/src/components/NewProduct.js
  }
 


  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleForm} > </input>

        <label>Type</label>
        <input type="text" id="type" name="type" value={form.type} onChange={handleForm} > </input>

        <label>Price</label>
        <input type="text" id="price" name="price" value={form.price} onChange={handleForm} > </input>

        <label>Quantity in Stock</label>
        <input type="text" id="stock" name="stock" value={form.stock} onChange={handleForm} > </input>

        <label>Description</label>
        <input type="text" id="description" name="description" value={form.description} onChange={handleForm} > </input>

        <label>Image URL</label>
        <input type="text" id="imgURL" name="imgURL" value={form.imgURL} onChange={handleForm} > </input>

        <label>Rating</label>
        <input type="text" id="rating" name="rating" value={form.rating} onChange={handleForm} > </input>
=======
  } 

  const handleForm = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue })); 
  };
  

  return (
  //  <Navbar />







  
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleForm} /> 

        <label>Type</label>
        <input type="text" id="type" name="type" value={form.type} onChange={handleForm} />

        <label>Price</label>
        <input type="text" id="price" name="price" value={form.price} onChange={handleForm} />

        <label>Quantity in Stock</label>
        <input type="text" id="stock" name="stock" value={form.stock} onChange={handleForm} />

        <label>Description</label>
        <input type="text" id="description" name="description" value={form.description} onChange={handleForm} />

        <label>Image URL</label>
        <input type="text" id="imgURL" name="imgURL" value={form.imgURL} onChange={handleForm} />

        <label>Rating</label>
        <input type="text" id="rating" name="rating" value={form.rating} onChange={handleForm} />
>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/NewProduct.js

      <button type="submit"> Add a New Product </button>
      </form>

<<<<<<< HEAD:aqua-pet-shop-client/src/components/NewProduct.js
    </div>
  );
=======
    </>
  );
  <Footer />
>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/NewProduct.js
};

export default NewProduct;
