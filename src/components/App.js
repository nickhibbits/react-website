import "../styles/App.css";
import Nav from "./Nav";
import Socials from "./Socials";

function App() {
  return (
    <div className="app-component">
      <Nav />
      <div className="homepage-name">Nick Hibbits.</div>
      <Socials />
    </div>
  );
}

export default App;
