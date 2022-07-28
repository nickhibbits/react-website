import "../styles/Socials.scss";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

function Socials() {
  return (
    <div className="socials-component">
      <a
        href="https://www.linkedin.com/in/nicholas-hibbits/"
        className="social-link"
      >
        <IoLogoLinkedin size={30} />
      </a>
      <a href="https://github.com/nickhibbits" className="social-link">
        <IoLogoGithub size={27} />
      </a>
      <a href="https://instagram.com/nhibit" className="social-link">
        <IoLogoInstagram size={30} />
      </a>
      <a href="mailto:nicholashibbits@gmail.com" className="social-link">
        <IoMailOutline size={30} />
      </a>
    </div>
  );
}

export default Socials;
