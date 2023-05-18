import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

import About from "./About";
import Home from "./Home";
import Work from "./Work";

import Connect from "./Connect";
import trees from "../assets/images/trees-overhead.jpg";

import appStyles from "$/styles/components/App.module.scss";
import imageStyles from "../styles/imageStyles/IconNav.module.scss";
import layoutStyles from "../styles/layout/layout.module.scss";
import { useWindowCheck } from "$/utils/customHooks";
import Image from "next/image";

function App() {
  const width = useWindowCheck();
  let size: number = width > 850 ? 50 : 30;

  return (
    <main className={appStyles.app_container}>
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
            {/* add height and width... ? */}
            <Image
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
