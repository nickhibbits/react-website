"use client";

import { navOptions } from "$/constants/navOptions";
import { useState, useEffect } from "react";

import navbarMobileStyles from "$/components/Navbars/NavbarMobile/NavbarMobile.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

import Link from "next/link";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${navbarMobileStyles.nav} ${layoutStyles.padding_wrapper}`}
    >
      <div
        className={navbarMobileStyles.svgWrapper}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Xsvg" : "menuSVG"}
      </div>
      {menuOpen && (
        <ul className={navbarMobileStyles.options_wrapper}>
          {navOptions.map((option, i) => {
            if (option !== "Resume") {
              return (
                <li className={navbarMobileStyles.option} key={i}>
                  <a href={`#${option.toLowerCase()}`}>{option}</a>
                </li>
              );
            } else {
              return (
                <li className={navbarMobileStyles.option} key={i}>
                  <Link href={option.toLowerCase()}>{option}</Link>
                </li>
              );
            }
          })}
        </ul>
      )}
    </nav>
  );
}

export default NavbarMobile;
