import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { handleScroll } from "$/utils/helpers";
import { useWindowCheck } from "$/utils/customHooks";

import imageStyles from "$/styles/imageStyles/IconNav.module.scss";

import Link from "next/link";
import React from "react";

function IconNav() {
  const width = useWindowCheck();
  let size = width ? (width > 850 ? 50 : 30) : null;

  if (size) {
    return (
      <ul className={imageStyles.icon_nav}>
        <li>
          <Link href="#about_container" onClick={(e) => handleScroll(e)}>
            <MdInfoOutline size={size} color={"white"} />
          </Link>
        </li>
        <li>
          <Link href="#work_container" onClick={(e) => handleScroll(e)}>
            <MdWorkOutline size={size} color={"white"} />
          </Link>
        </li>
        <li>
          <Link href="#connect_container" onClick={(e) => handleScroll(e)}>
            <MdOutlineConnectWithoutContact size={size} color={"white"} />
          </Link>
        </li>
      </ul>
    );
  }

  return null;
}

export default IconNav;
