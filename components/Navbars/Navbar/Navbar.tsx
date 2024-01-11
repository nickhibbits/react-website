import navbarStyles from "$/components/Navbars/Navbar/Navbar.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import { navOptions } from "$/constants/navOptions";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={`${navbarStyles.nav} ${layoutStyles.padding_wrapper}`}>
      <ul className={navbarStyles.options_wrapper}>
        {navOptions.map((option, i) => {
          if (option !== "Resume") {
            return (
              <li className={navbarStyles.option} key={i}>
                <a href={`#${option.toLowerCase()}`}>{option}</a>
              </li>
            );
          } else {
            return (
              <li className={navbarStyles.option} key={i}>
                <Link href={option.toLowerCase()}>{option}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
