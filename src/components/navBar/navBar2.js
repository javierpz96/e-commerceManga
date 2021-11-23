import React from "react";
import { Link } from "react-router-dom";
import logo from "./logopag.png";
import CartWidget from "../cartWidget/cartWidget";

import "./NavBar.css";

const NavBar2 = () => {
  return (
    <div className="Navegador2">
      <ul class="menu">
        <li>
            <div className="shrink">
          <img src={logo} />
          </div>
        </li>
        <div className="Navegador3">
          <li>
            <Link to="/Home">
              <a href="#0">
                Home 
                <span class="border border-top"></span>
                <span class="border border-right"></span>
                <span class="border border-bottom"></span>
                <span class="border border-left"></span>
              </a>
            </Link>
          </li>

          <li>
            <Link to="/categoria/manga">
              <a href="#0">
                Manga
                <span class="border border-top"></span>
                <span class="border border-right"></span>
                <span class="border border-bottom"></span>
                <span class="border border-left"></span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/categoria/novela">
              <a href="#0">
                Novels
                <span class="border border-top"></span>
                <span class="border border-right"></span>
                <span class="border border-bottom"></span>
                <span class="border border-left"></span>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/categoria/Carrito">
              <a href="#0">
                <CartWidget></CartWidget>
                <span class="border border-top"></span>
                <span class="border border-right"></span>
                <span class="border border-bottom"></span>
                <span class="border border-left"></span>
              </a>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar2;
