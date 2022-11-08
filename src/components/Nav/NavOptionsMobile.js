import React, { useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useWindowCheck } from "../../customHooks";

import NavOptions from "./NavOptions";
import nickProfessional from "../../assets/images/nick-professional.jpg";

function NavOptionsMobile({ toggleNavOptions, displayMenuIcon }) {
  const navOptionsContainer = useRef();
  const visible = useRef();
  const width = useWindowCheck();

  useEffect(() => {
    width > 850 &&
      navOptionsContainer.current.setAttribute("data-visible", false);
  }, [width]);

  useEffect(() => {
    visible.current = navOptionsContainer.current.getAttribute("data-visible");
  }, [displayMenuIcon]);

  return (
    <div className="nav-options-mobile-component">
      <div
        onClick={() => toggleNavOptions(navOptionsContainer, visible)}
        className="mobile-nav-toggle"
      >
        {displayMenuIcon ? (
          <MdOutlineMenu size={40} />
        ) : (
          <MdOutlineClose size={40} />
        )}
      </div>

      <div
        className="nav-options-mobile-container"
        data-visible={"false"}
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
        <NavOptions
          mobile={true}
          toggleNavOptions={toggleNavOptions}
          mobileContainerRef={navOptionsContainer}
          droorOpen={visible}
        />
      </div>
    </div>
  );
}

export default NavOptionsMobile;
