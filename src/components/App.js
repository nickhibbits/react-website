import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { useWindowCheck } from "../customHooks";

import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Connect from "./Connect";
import trees from "../assets/images/trees-overhead.jpg";

import "../styles/components/App.scss";
import "../styles/imageStyles/IconNav.scss";
import "../styles/layout/layout.scss";

function App() {
  const width = useWindowCheck();
  let size = width > 1100 ? 70 : 30;

  return (
    <main className="app-component">
      <section className="container" id="home-container">
        <Home />
        <div className="box-fade">
          <ul className="icon-nav">
            <li>
              <MdInfoOutline size={size} color={"white"} />
            </li>
            <li>
              <MdWorkOutline size={size} color={"white"} />
            </li>
            <li>
              <MdOutlineConnectWithoutContact size={size} color={"white"} />
            </li>
          </ul>
        </div>
        <div className="box-trees">
          <img
            className="img"
            src={trees}
            alt="overhead shot of forest"
            style={width > 1100 ? { display: "none" } : { display: "auto" }}
          />
        </div>
      </section>
      <About />
      <Work />
      <Connect />
    </main>
  );
}

export default App;
