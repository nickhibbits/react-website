import "../styles/Nav.scss";
import NavOptionsMobile from "./MobileNavOptions";
import NavOptions from "./NavOptions";

function Nav({ navMenuOpen, setNavMenuOpen, srcollToSection, notSmallScreen }) {
  const handleClick = (section) => {
    srcollToSection(section);
    setNavMenuOpen();
  };

  return (
    <div className="nav-component">
      {notSmallScreen ? (
        <NavOptions handleClick={handleClick} />
      ) : (
        <NavOptionsMobile
          setNavMenuOpen={setNavMenuOpen}
          navMenuOpen={navMenuOpen}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default Nav;
