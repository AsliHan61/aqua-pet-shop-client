import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
   
  const [form, setForm] = useState(initialForm);

  const navigate = useNavigate();

  const handleForm = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue })); 
  };
  
  function handleSubmit (e) {
    e.preventDefault();
    const newProduct = form;
    axios.post("mongodb://127.0.0.1:27017/aqua-pet-shop-server/products/new", newProduct)
    .then((response) => {
      setForm(initialForm)
    });
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

      <button type="submit"> Add a New Product </button>
      </form>

    </div>
  );
};

export default NewProduct;
