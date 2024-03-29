import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

import nickProfessional from "$/public/images/nick-professional-min.jpg";
import NavOptions from "./NavOptions";
import NavOptionsMobile from "./NavOptionsMobile";

import navStyles from "$/styles/components/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { handleScroll } from "$/utils/helpers";

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
    <motion.nav
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={navStyles.nav}
      style={{ opacity: 0 }}
      ref={nav}
    >
      <div className={navStyles.nav_wrapper}>
        <div className={navStyles.nav_title}>
          <Link href="#home_container" onClick={(e) => handleScroll(e)}>
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
        ) : null}
        {navWidth && navWidth <= 850 ? (
          <NavOptionsMobile
            toggleNavOptions={toggleNavOptions}
            displayMenuIcon={displayMenuIcon}
            navWidth={navWidth}
          />
        ) : null}
      </div>
    </motion.nav>
  );
}

export default Navbar;
