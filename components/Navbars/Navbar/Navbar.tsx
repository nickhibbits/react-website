import navbarStyles from "$/components/Navbars/Navbar/Navbar.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import { navOptions } from "$/constants/navOptions";

function Navbar() {
  return (
    <nav className={`${navbarStyles.nav} ${layoutStyles.component}`}>
      <ul className={navbarStyles.options_wrapper}>
        {navOptions.map((option, i) => {
          return (
            <li className={navbarStyles.option} key={i}>
              {option}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
