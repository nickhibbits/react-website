import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ navMenuOpen, setNavMenuOpen }) {
  if (navMenuOpen) {
    return (
      <div className="nav-component-menu-open">
        <div className="navbar-top">
          <div className="N">NH</div>
          <div className="icon-wrapper" onClick={setNavMenuOpen}>
            <IoClose size={25} color="white" />
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link onClick={setNavMenuOpen} className="dropdown-link" to="/">
            Home
          </Link>
          <Link onClick={setNavMenuOpen} className="dropdown-link" to="/about">
            About
          </Link>
          <Link
            onClick={setNavMenuOpen}
            className="dropdown-link"
            to="/projects"
          >
            Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="nav-component">
      <div className="N">NH</div>
      <div className="icon-wrapper" onClick={setNavMenuOpen}>
        <HiOutlineMenuAlt3 size={25} color="white" />
      </div>
    </div>
  );
}

export default Nav;
