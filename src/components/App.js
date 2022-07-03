import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Nav from "./Nav";
import Socials from "./Socials";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="app-component">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
