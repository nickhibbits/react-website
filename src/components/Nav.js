import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "../styles/Nav.css";

function Nav({ navMenuOpen, setNavMenuOpen, srcollToSection }) {
  const handleClick = (section) => {
    srcollToSection(section);
    setNavMenuOpen();
  };

  console.log("navMenuOpen", navMenuOpen);
  return (
    <div className="nav-component-menu-open">
      <div className="nav-menu-open-wrapper">
        <div className="navbar-top">
          <div className="N">NH</div>
          <div className="icon-wrapper" onClick={setNavMenuOpen}>
            {navMenuOpen ? (
              <IoClose size={25} color="white" />
            ) : (
              <HiOutlineMenuAlt3 size={25} color="white" />
            )}
          </div>
        </div>
        {/* <div className="navbar-dropdown-wrapper" */}
        <ul
          className="navbar-dropdown"
          style={{
            transform: navMenuOpen
              ? `translateY(${0}px)`
              : `translateY(${-200}px)`,
            transition: "transform 1s ease",
          }}
        >
          {/* <ul className={navMenuOpen ? "navbar-dropdown" : "hide-navbar"}> */}
          <li onClick={() => handleClick("home")} className="dropdown-link">
            Home
          </li>
          <li onClick={() => handleClick("about")} className="dropdown-link">
            Profile
          </li>
          <li onClick={() => handleClick("work")} className="dropdown-link">
            Projects
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
