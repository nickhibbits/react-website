import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "../styles/Nav.css";

function Nav({ navMenuOpen, setNavMenuOpen, srcollToSection }) {
  const handleClick = (section) => {
    srcollToSection(section);
    setNavMenuOpen();
  };

  return (
    <div className="nav-component">
      <div className="nav-component-wrapper">
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
        <div
          className="navbar-dropdown-wrapper"
          style={{
            height: navMenuOpen ? "30vh" : "0vh",
            transform: navMenuOpen
              ? `translateY(${0}px)`
              : `translateY(${-190}px)`,
            transition: "all .7s ease",
          }}
        >
          <ul
            className="navbar-dropdown"
            style={{
              margin: navMenuOpen ? "10px 0px 0px 0px" : "0px",
            }}
          >
            <li onClick={() => handleClick("home")} className="dropdown-link">
              Home
            </li>
            <li onClick={() => handleClick("about")} className="dropdown-link">
              Profile
            </li>
            <li onClick={() => handleClick("work")} className="dropdown-link">
              Work
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
