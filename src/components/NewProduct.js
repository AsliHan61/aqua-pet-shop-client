import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
  

   const [form, setForm] = useState(initialForm);


const apiURL = 'http://localhost:5005';

const initialForm = {
  name: "",
  type: "",
  price:"" ,
  stock: "",
  description: "",
  imgURL: "",
  rating: "",
 };

function NewProduct(props) {
  
   const [form, setForm] = useState(initialForm);
   const token = localStorage.getItem("authToken")

  function handleSubmit (e) {
    e.preventDefault();
    const newProduct = form;
    axios.post(`${apiURL}/api/products`, newProduct, {
      headers: {
        Authorization:`Bearer ${token}`
      }
        })
    .then((response) => {
      setForm(initialForm)

      props.refreshProducts();  
    })
    .catch((error) => console.log(error)); 
  };
  

    });

  } 


  const handleForm = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [inputName]: inputValue })); 
  };
  

  return (

  
    <div>
      <form onSubmit={handleSubmit} style={{width:'800px', paddingLeft:'40%'}}>

        <label>Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleForm} /> <p></p>
        
        <label>Type</label>
        <input type="text" id="type" name="type" value={form.type} onChange={handleForm} /> <p></p>

        <label>Price</label>
        <input type="text" id="price" name="price" value={form.price} onChange={handleForm} /> <p></p>

        <label>Quantity in Stock</label>
        <input type="text" id="stock" name="stock" value={form.stock} onChange={handleForm} /> <p></p>

        <label>Description</label>
        <input type="text" id="description" name="description" value={form.description} onChange={handleForm} /> <p></p>

        <label>Image URL</label>
        <input type="text" id="imgURL" name="imgURL" value={form.imgURL} onChange={handleForm} /> <p></p>

        <label>Rating</label>

        <input type="text" id="rating" name="rating" value={form.rating} onChange={handleForm} />


      <button type="submit"> Add a New Product </button>
      </form>


    </div>
  );

 

    </>
  );
  <Footer />

};


export default NewProduct;
