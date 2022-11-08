import React from "react";

function NavOptions({
  toggleNavOptions,
  mobile,
  mobileContainerRef,
  droorOpen,
}) {
  function toggle() {
    return mobile && toggleNavOptions(mobileContainerRef, droorOpen);
  }

  return (
    <ul className="nav-options-component nav-options">
      <li>
        <a href="#home-container" className="nav-link" onClick={() => toggle()}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#about-container"
          className="nav-link"
          onClick={() => toggle()}
        >
          About
        </a>
      </li>
      <li>
        <a href="#work-container" className="nav-link" onClick={() => toggle()}>
          Work
        </a>
      </li>
      <li>
        <a
          href="#connect-container"
          className="nav-link"
          onClick={() => toggle()}
        >
          Connect
        </a>
      </li>
    </ul>
  );
}

export default NavOptions;
