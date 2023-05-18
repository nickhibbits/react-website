import { navOptions } from "$/constants/navOptions";
import React from "react";

import navStyles from "$/styles/components/Nav.module.scss";

type NavOptionProps = {
  toggleNavOptions: any;
  mobile: boolean;
  mobileContainerRef?: any;
  droorOpen?: any;
};

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
      {navOptions.map((option: string) => {
        return (
          <li>
            <a
              href={`#${option.toLowerCase()}_container`}
              onClick={() => toggle()}
            >
              {option}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavOptions;
