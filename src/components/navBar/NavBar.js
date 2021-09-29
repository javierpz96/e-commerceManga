import React from "react";
import "./NavBar.css";
import CartWidget from "../cartWidget/cartWidget";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="6">
            <p>Comivic</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="1">
                  <p>Home</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="2">
                 <p>Manga</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="3">
                  <p>Novels</p>
                </a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="4">
                <CartWidget carrito="Cart"/>
                </a>
              </li>  

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
