import "../styles/App.scss";
import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Connect from "./Connect";

import trees from "../assets/images/trees-overhead.jpg";

import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

function App() {
  const size = 30;

  return (
    <main className="app-component">
      <section className="container home-container">
        <Home />
        {/* <div className="box-fade"> */}
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
        {/* </div> */}
        <div className="box-trees">
          <img className="img" src={trees} alt="overhead shot of forest" />
        </div>
      </section>
      <About />
      <Work />
      <Connect />
    </main>
  );
}

export default App;
