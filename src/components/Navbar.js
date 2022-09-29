import React from "react";

import "../styles/components/Nav.scss";

function Navbar() {
  return (
    <nav>
      <ul className="nav-wrapper">
        <li className="nav-title">
          <a href="/" className="nav-title-anchor">
            <h2>Nick Hibbits</h2>
          </a>
        </li>
        <div className="nav-options-wrapper">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Connect
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
