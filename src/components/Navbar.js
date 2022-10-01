import { MdOutlineClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useRef, useState } from "react";

import "../styles/components/Nav.scss";

function Navbar() {
  const [displayMenuIcon, setDisplayMenuIcon] = useState(true);
  const navOptionsWrapper = useRef();

  function toggleNavOptions() {
    let visible = navOptionsWrapper.current.getAttribute("data-visible");
    if (visible === "false") {
      navOptionsWrapper.current.setAttribute("data-visible", true);
      setDisplayMenuIcon(false);
    } else if (visible === "true") {
      navOptionsWrapper.current.setAttribute("data-visible", false);
      setDisplayMenuIcon(true);
    }
  }

  return (
    <nav>
      <ul className="nav-wrapper">
        <li className="nav-title">
          <a href="/" className="nav-title-anchor">
            <h2>Nick Hibbits</h2>
          </a>
        </li>

        <div onClick={() => toggleNavOptions()} className="mobile-nav-toggle">
          {displayMenuIcon ? (
            <MdOutlineMenu size={40} />
          ) : (
            <MdOutlineClose size={40} />
          )}
        </div>

        <div
          ref={navOptionsWrapper}
          className="nav-options-wrapper"
          data-visible={false}
        >
          <li>
            <a
              href="#home-container"
              className="nav-link"
              onClick={() => toggleNavOptions()}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-container"
              className="nav-link"
              onClick={() => toggleNavOptions()}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work-container"
              className="nav-link"
              onClick={() => toggleNavOptions()}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#connect-container"
              className="nav-link"
              onClick={() => toggleNavOptions()}
            >
              Connect
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
