import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { useWindowCheck } from "../customHooks";

import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Navbar from "./Nav/Navbar";
import Connect from "./Connect";
import trees from "../assets/images/trees-overhead.jpg";

import "../styles/components/App.scss";
import "../styles/imageStyles/IconNav.scss";
import "../styles/layout/layout.scss";

function App() {
  const width = useWindowCheck();
  let size = width > 850 ? 50 : 30;

  return (
    <main className="app-container">
      <Navbar />
      <div className="app-component">
        <section className="container" id="home-container">
          <Home />
          <div className="box-fade">
            <ul className="icon-nav">
              <li>
                <a href="#about-container">
                  <MdInfoOutline size={size} color={"white"} />
                </a>
              </li>
              <li>
                <a href="#work-container">
                  <MdWorkOutline size={size} color={"white"} />
                </a>
              </li>
              <li>
                <a href="#connect-container">
                  <MdOutlineConnectWithoutContact size={size} color={"white"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="box-trees">
            <img
              className="img"
              src={trees}
              alt="overhead shot of forest"
              style={width > 850 ? { display: "none" } : { display: "auto" }}
            />
          </div>
        </section>
        <About />
        <Work />
        <Connect />
      </div>
    </main>
  );
}

export default App;
