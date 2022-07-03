import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  // const class = navMenuOpen ? "menu-open" : "menu-closed"

  function toggleNav(e) {
    e.preventDefault();

    setNavMenuOpen(!navMenuOpen);
  }

  if (navMenuOpen) {
    return (
      <div className="nav-component-menu-open">
        <div className="navbar-top">
          <div className="N">NH</div>
          <div className="icon-wrapper" onClick={(e) => toggleNav(e)}>
            <IoClose size={25} color="white" />
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="dropdown-link" to="">
            Home
          </Link>
          <Link className="dropdown-link" to="">
            About
          </Link>
          <Link className="dropdown-link" to="">
            Projects
          </Link>
          <Link className="dropdown-link" to="">
            Connect
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="nav-component">
      <div className="N">NH</div>
      <div className="icon-wrapper" onClick={(e) => toggleNav(e)}>
        <HiOutlineMenuAlt3 size={25} color="white" />
      </div>
    </div>
  );
}

export default Nav;
