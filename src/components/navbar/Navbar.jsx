import React, { useState } from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill className="logo" />
            Real
          </span>
          State
        </h1>
        <div className="menu">
          <ul className={open ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <button className="btn btn-signin">Sign In</button>
        </div>

        <div className="humburger" onClick={handleOpen}>
          {open ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
