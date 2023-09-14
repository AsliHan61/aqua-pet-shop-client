<<<<<<< HEAD:aqua-pet-shop-client/src/components/Navbar.js
=======
import {React} from "react";
import navbarImg from "../assets/cart.png"
import logosmallImg from "../assets/logo-small.png"
import Searchbar from "./Searchbar";
import Button from '@mui/material/Button';
>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/Navbar.js


function Navbar() {

<<<<<<< HEAD:aqua-pet-shop-client/src/components/Navbar.js
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <img src="./assets/img/logo-small.png" alt="Header"> </img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdown" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#!">All Products</a></li>
                          <li><hr class="dropdown-divider" /></li>
                          <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                          <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                      </ul>
                  </li>
              </ul>
              <form class="d-flex">
                  <button class="btn btn-outline-dark" type="submit">
                    <img src="./assets/img/cart.png" alt="Cart"> </img>
                      Cart
                      <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
              </form>
          </div>
      </div>
=======

    return (
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
      <div className={"container px-4 px-lg-5"}>
        <img src={logosmallImg} alt="alt-test" />

              <Button variant="outlined">Login</Button>

              
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                  <li class="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#!">All Products</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="#!">Profile Page</a></li>
                          <li><a className="dropdown-item" href="#!">Log Out</a></li>
                      </ul>
                  </li>
              </ul>
              
             
            
              <Searchbar />
              
      </div>

              <form className="d-flex">
                  <button className="btn btn-outline-dark" type="submit">
                    <img src={navbarImg} alt="cart" />
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                  </button>
              </form>

              

            <button id="search-button" type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
</div>

>>>>>>> c7216923600e70945943d1d52561bda0e767f664:src/components/Navbar.js
  </nav>
    );
  }
   
  export default Navbar;