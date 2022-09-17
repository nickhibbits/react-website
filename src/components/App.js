import "../styles/App.scss";
import Home from "./Home";

// import { MdOutlineConnectWithoutContact } from "react-icons/md";
// import { MdWorkOutline } from "react-icons/md";
// import { MdInfoOutline } from "react-icons/md";

function App() {
  return (
    <main className="app-component">
      <section className="home-container">
        <div className="box-trees"> trees </div>
        <div className="box-fade">fade</div>
        <div className="home-wrapper">
          <Home />
        </div>
      </section>
    </main>
  );
}

export default App;
