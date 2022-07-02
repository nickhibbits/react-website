import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="nav-component">
      <div className="N">NH</div>
      <div className="icon-wrapper">
        <HiOutlineMenuAlt3 size={25} color="white" />
      </div>
    </div>
  );
}

export default Nav;
