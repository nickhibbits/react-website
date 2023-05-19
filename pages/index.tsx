import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

import trees from "$/public/images/trees-overhead.jpg";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

import { useWindowCheck } from "$/utils/customHooks";
import Image from "next/image";

import Intro from "$/components/Intro";
import About from "$/components/About";
import Work from "$/components/Work";
import Connect from "$/components/Connect";

function Home() {
  const width = useWindowCheck();
  let size = width ? (width > 850 ? 50 : 30) : null;

  if (size && width) {
    return (
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <section
            className={layoutStyles.container}
            id={layoutStyles.home_container}
          >
            <Intro />
            <div className={appStyles.box_fade}>
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
                    <MdOutlineConnectWithoutContact
                      size={size}
                      color={"white"}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={appStyles.box_trees}>
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
      </div>
    );
  }
}

export default Home;
