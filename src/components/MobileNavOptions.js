import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "../styles/Nav.scss";

const resume = require("../assets/Nick_Hibbits_Resume.pdf");

function NavOptionsMobile({ setNavMenuOpen, navMenuOpen, handleClick }) {
  return (
    <main className="mobile-nav-options-component">
      <div className="mobile-nav-options-wrapper">
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
            height: navMenuOpen ? "35vh" : "0vh",
            transform: navMenuOpen
              ? `translateY(${0}px)`
              : `translateY(${-300}px)`,
            transition: "all .4s ease",
          }}
        >
          <ul
            className="navbar-dropdown"
            style={{
              margin: navMenuOpen ? "10px 0px 0px 0px" : "0px",
            }}
          >
            <li onClick={() => handleClick("home")} className="nav-link">
              Home
            </li>
            <li onClick={() => handleClick("about")} className="nav-link">
              Profile
            </li>
            <li onClick={() => handleClick("work")} className="nav-link">
              Work
            </li>
            <a href={resume} download onClick={setNavMenuOpen}>
              <li className="nav-link">Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default NavOptionsMobile;
