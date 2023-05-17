import { useState, useEffect, useRef } from "react";

import nickProfessional from "../../assets/images/nick-professional.jpg";
import NavOptions from "./NavOptions";
import NavOptionsMobile from "./NavOptionsMobile";

import "../../styles/components/Nav.scss";

function Navbar() {
  const [displayMenuIcon, setDisplayMenuIcon] = useState(true);
  const [navWidth, setNavWidth] = useState("");
  const nav = useRef();

  function toggleNavOptions(container, visible) {
    if (visible.current === "false" && navWidth < 850) {
      container.current.setAttribute("data-visible", "true");
      setDisplayMenuIcon(false);
    } else if (visible.current === "true" && navWidth < 850) {
      container.current.setAttribute("data-visible", "false");
      setDisplayMenuIcon(true);
    }
  }

  useEffect(() => {
    navWidth >= 850 && setDisplayMenuIcon(true);
  }, [navWidth]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setNavWidth(entries[0].contentRect.width);
    });

    observer.observe(nav.current);
  }, []);

  return (
    <nav ref={nav}>
      <div className="nav-wrapper">
        <div className="nav-title">
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
        </div>
        {navWidth >= 850 ? (
          <NavOptions toggleNavOptions={toggleNavOptions} mobile={false} />
        ) : (
          <NavOptionsMobile
            toggleNavOptions={toggleNavOptions}
            displayMenuIcon={displayMenuIcon}
            navWidth={navWidth}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
