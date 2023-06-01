import { navOptions } from "$/constants/navOptions";
import React from "react";

import navStyles from "$/styles/components/Nav.module.scss";
import Link from "next/link";
import { handleScroll } from "$/utils/helpers";

type NavOptionProps = {
  toggleNavOptions: any;
  mobile: boolean;
  mobileContainerRef?: any;
  droorOpen?: any;
};

const resumeLink =
  "https://docs.google.com/document/d/1LAUPQnsrAT2VF9PTtzbKjegGxBC90gg1yf5DALrAnc8/edit?usp=sharing";

function NavOptions({
  toggleNavOptions,
  mobile,
  mobileContainerRef,
  droorOpen,
}: NavOptionProps) {
  function toggle() {
    return mobile && toggleNavOptions(mobileContainerRef, droorOpen);
  }

  return (
    <ul
      className={
        mobile
          ? `${navStyles.nav_options_component} ${navStyles.nav_options_component_mobile_on}`
          : `${navStyles.nav_options_component}`
      }
    >
      {navOptions.map((option: string, index: number) => {
        return (
          <li key={index}>
            {option === "Resume" ? (
              <a href={resumeLink}>{option}</a>
            ) : (
              <Link
                href={`#${option.toLowerCase()}_container`}
                onClick={(e) => handleScroll(e, toggle)}
              >
                {option}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavOptions;
