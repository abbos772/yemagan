import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="navbar__wrapper">
      <div className="container">
        <nav className="navbar">
          <NavLink to={"/"} className="navbar__logo">
            <h2>uzum market</h2>
          </NavLink>
          <button
            onClick={() => setToggle(!toggle)}
            className="navbar__category-btn"
          >
            <IoMenu />
            <span>Katalog</span>
          </button>
          <div className={`nav_bot_flex ${toggle ? "show" : " "}`}>
            <h2>Home</h2>
            <NavLink to={"/About"}>
              <Button variant="contained">Create Product</Button>
            </NavLink>
            <Button variant="contained">Manage Product</Button>
          </div>
          <div className="navbar__search">
            <input type="text" placeholder="Search..." />
            <button>
              <IoSearch />
            </button>
          </div>
          <div className="navbar__collection">
            <NavLink to={"/"} className="navbar__item">
              <IoHome />
              <span>Bosh Sahifa</span>
            </NavLink>
            <NavLink to={"/login"} className="navbar__item">
              <FaRegUser />
              <span>Login</span>
            </NavLink>
            <NavLink to={"/wishes"} className="navbar__item">
              <FaRegHeart />

              <span>Sevimlilar</span>
            </NavLink>
            <NavLink to={"/cart"} className="navbar__item">
              <FiShoppingCart />
              <span>Savat</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
