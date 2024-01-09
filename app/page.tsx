import About from "$/components/About";
import Connect from "$/components/Connect";

import Work from "$/components/Work";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

function Home() {
  // keep page content in separate component, so _app.tsx and index.tsx can render on the server
  return (
    <>
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <About />
          <Work />
          <Connect />
        </div>
      </div>
    </>
  );
}

export default Home;
