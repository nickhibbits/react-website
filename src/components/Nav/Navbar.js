import { useWindowCheck } from "../../customHooks";
import { useState, useEffect } from "react";

import "../../styles/components/Nav.scss";
import nickProfessional from "../../assets/images/nick-professional.jpg";
import NavOptions from "./NavOptions";
import NavOptionsMobile from "./NavOptionsMobile";

function Navbar() {
  const width = useWindowCheck();
  const [displayMenuIcon, setDisplayMenuIcon] = useState(true);

  // let visible = false;

  function toggleNavOptions(container, visible) {
    if (visible.current === "false" && width < 850) {
      container.current.setAttribute("data-visible", true);
      setDisplayMenuIcon(false);
    } else if (visible.current === "true" && width < 850) {
      container.current.setAttribute("data-visible", false);
      setDisplayMenuIcon(true);
    }
  }

  useEffect(() => {
    width > 850 && setDisplayMenuIcon(true);
  }, [width]);

  return (
    <nav on>
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
        {width > 850 ? (
          <NavOptions toggleNavOptions={toggleNavOptions} mobile={false} />
        ) : (
          <NavOptionsMobile
            toggleNavOptions={toggleNavOptions}
            displayMenuIcon={displayMenuIcon}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
