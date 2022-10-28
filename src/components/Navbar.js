import { MdOutlineClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useRef, useState } from "react";
import { useWindowCheck } from "../customHooks";

import "../styles/components/Nav.scss";
import nickProfessional from "../assets/images/nick-professional.jpg";

function Navbar() {
  const [displayMenuIcon, setDisplayMenuIcon] = useState(true);
  const navOptionsContainer = useRef();
  const width = useWindowCheck();

  function toggleNavOptions() {
    let visible = navOptionsContainer.current.getAttribute("data-visible");
    if (visible === "false") {
      navOptionsContainer.current.setAttribute("data-visible", true);
      setDisplayMenuIcon(false);
    } else if (visible === "true") {
      navOptionsContainer.current.setAttribute("data-visible", false);
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
          <div className="avatar-wrapper">
            <img
              src={nickProfessional}
              alt="nick-professional"
              className="avatar"
            />
          </div>
        </li>

        <div onClick={() => toggleNavOptions()} className="mobile-nav-toggle">
          {displayMenuIcon ? (
            <MdOutlineMenu size={40} />
          ) : (
            <MdOutlineClose size={40} />
          )}
        </div>

        <div
          className="nav-options-mobile-container"
          data-visible={false}
          ref={navOptionsContainer}
        >
          <div className="nav-options-mobile-avatar-wrapper">
            <img
              src={nickProfessional}
              alt="nick-professional"
              className="nav-options-mobile-avatar"
              style={width > 850 ? { display: "none" } : { display: "block" }}
            />
          </div>
          <div className="nav-options-wrapper">
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
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
