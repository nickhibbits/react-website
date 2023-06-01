import { useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

import NavOptions from "./NavOptions";
import nickProfessional from "$/public/images/nick-professional-min.jpg";
import Image from "next/image";

import navStyles from "$/styles/components/Nav.module.scss";

type NavOptionsMobileProps = {
  toggleNavOptions: any;
  displayMenuIcon: any;
  navWidth: any;
};

function NavOptionsMobile({
  toggleNavOptions,
  displayMenuIcon,
  navWidth,
}: NavOptionsMobileProps) {
  const navOptionsContainer = useRef<any>(null);
  const visible = useRef<any>(null);

  useEffect(() => {
    // if (navWidth >= 850)
    // navWidth >= 850 &&
    navOptionsContainer.current.setAttribute("data-visible", false);
  }, []);

  useEffect(() => {
    visible.current = navOptionsContainer.current.getAttribute("data-visible");
  }, [displayMenuIcon]);

  return (
    <div className="nav-options-mobile-component">
      <div
        onClick={() => toggleNavOptions(navOptionsContainer, visible)}
        className={navStyles.mobile_nav_toggle}
      >
        {displayMenuIcon ? (
          <MdOutlineMenu size={40} />
        ) : (
          <MdOutlineClose size={40} />
        )}
      </div>

      <div
        className={navStyles.nav_options_mobile_container}
        data-visible={"false"}
        ref={navOptionsContainer}
      >
        <div className={navStyles.nav_options_mobile_avatar_wrapper}>
          <Image
            src={nickProfessional}
            alt="nick-professional"
            className={navStyles.nav_options_mobile_avatar}
            style={navWidth > 850 ? { display: "none" } : { display: "block" }}
          />
        </div>
        {/* {navOptionsContainer.current.getAttribute("data-visible") == true && ( */}
        <NavOptions
          mobile={navWidth < 850}
          toggleNavOptions={toggleNavOptions}
          mobileContainerRef={navOptionsContainer}
          droorOpen={visible}
        />
        {/* // )} */}
      </div>
    </div>
  );
}

export default NavOptionsMobile;
