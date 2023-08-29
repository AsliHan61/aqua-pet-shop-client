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

  function handleSubmit (e) {

    e.preventDefault();

    const addProduct =  {
      name: name,
      type: type,
      price: price,
      stock: stock,
      description: description,
      imgURL: imgURL,
      rating: rating,
       
    }

   //  axios.post("https://ih-beers-api2.herokuapp.com/beers/new", addProduct)
    .then (navigate("/"))
  }
 


  return (
    <div>
      
      <form onSubmit={handleSubmit} >
      <label>Name</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>

      <label>Type</label>
      <input type="text" id="type" name="type" value={type} onChange={(e) => setName(e.target.value)}></input>

      <label>Price</label>
      <input type="text" id="price" name="price" value={price} onChange={(e) => setName(e.target.value)}></input>

      <label>Quantity in Stock</label>
      <input type="text" id="stock" name="stock" value={stock} onChange={(e) => setName(e.target.value)}></input>

      <label>Description</label>
      <input type="text" id="stock" name="stock" value={stock} onChange={(e) => setName(e.target.value)}></input>

      <label>Image</label>
      <input type="text" id="imgURL" name="imgURL" value={imgURL} onChange={(e) => setName(e.target.value)}></input>

      <label>Rating</label>
      <input type="text" id="rating" name="rating" value={rating} onChange={(e) => setName(e.target.value)}></input>
      

      <button type="submit"> Add a New Beer </button>
      </form>

    </div>
  );
};

export default NewProduct;
