import Socials from "./Socials";
import "../styles/Nav.scss";
const resume = require("../assets/Nick_Hibbits_Resume_01.pdf");

function NavOptions({ handleClick }) {
  return (
    <main className="nav-options-component">
      <div className="nav-options-wrapper">
        <div className="N">Nick Hibbits</div>
        <div className="nav-options-grid-container">
          <div className="nav-options-container">
            <ul className="nav-options">
              <li onClick={() => handleClick("home")} className="nav-link">
                Home
              </li>
              <li onClick={() => handleClick("about")} className="nav-link">
                Profile
              </li>
              <li onClick={() => handleClick("work")} className="nav-link">
                Work
              </li>
              <a href={resume}>
                <li className="nav-link">Resume</li>
              </a>
            </ul>
            <Socials addPadding={false} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default NavOptions;
