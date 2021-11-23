import React from "react";
import "./NavBar.css";
import CartWidget from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";
import "../itemList/item/ItemList.css";

const NavBar = () => {
  //
  return (
    <>
      <div className="navegador">
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <div class="container-fluid">
            <a class="navbar-brand" href="/#">
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
                  <a class="nav-link active" aria-current="page" href="Home">
                    <Link to="/Home">
                      <p>Home</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Manga">
                    <Link to="/categoria/manga">
                      <p>Manga</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Novels">
                    <Link to="/categoria/novela">
                      <p>Novels</p>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Carrito">
                    <CartWidget carrito="Cart" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
