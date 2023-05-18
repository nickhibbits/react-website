"use client";

import { useState, useEffect, useRef } from "react";

import nickProfessional from "$/public/images/nick-professional.jpg";
import NavOptions from "./NavOptions";
import NavOptionsMobile from "./NavOptionsMobile";

import navStyles from "$/styles/components/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [displayMenuIcon, setDisplayMenuIcon] = useState(true);
  const [navWidth, setNavWidth] = useState<null | number>(null);
  const nav = useRef<HTMLElement>(null);

  function toggleNavOptions(container: any, visible: any) {
    if (navWidth) {
      if (visible.current === "false" && navWidth < 850) {
        container.current.setAttribute("data-visible", "true");
        setDisplayMenuIcon(false);
      } else if (visible.current === "true" && navWidth < 850) {
        container.current.setAttribute("data-visible", "false");
        setDisplayMenuIcon(true);
      }
    }
  }

  useEffect(() => {
    if (navWidth) {
      navWidth >= 850 && setDisplayMenuIcon(true);
    }
  }, [navWidth]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setNavWidth(entries[0].contentRect.width);
    });

    if (nav.current) {
      observer.observe(nav.current);
    }
  }, []);

  return (
    <nav className={navStyles.nav} ref={nav}>
      <div className={navStyles.nav_wrapper}>
        <div className={navStyles.nav_title}>
          <Link href="/">
            <h2>Nick Hibbits</h2>
          </Link>
          <div className={navStyles.avatar_wrapper}>
            <Image
              src={nickProfessional}
              alt="nick-professional"
              className={navStyles.avatar}
            />
          </div>
        </div>
        {navWidth && navWidth >= 850 ? (
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
