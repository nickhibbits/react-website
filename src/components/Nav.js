import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import "../styles/Nav.css";

function Nav({ navMenuOpen, setNavMenuOpen, srcollToSection }) {
  const handleClick = (section) => {
    srcollToSection(section);
    setNavMenuOpen();
  };
  if (navMenuOpen) {
    return (
      <div className="nav-component-menu-open">
        <div className="nav-menu-open-wrapper">
          <div className="navbar-top">
            <div className="N">NH</div>
            <div className="icon-wrapper" onClick={setNavMenuOpen}>
              <IoClose size={25} color="white" />
            </div>
          </div>
          <ul className="navbar-dropdown">
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

  return (
    <div className="nav-component">
      <div className="nav-component-wrapper">
        <div className="N">NH</div>
        <div className="icon-wrapper" onClick={setNavMenuOpen}>
          <HiOutlineMenuAlt3 size={25} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
