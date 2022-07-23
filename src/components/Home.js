import "../styles/Home.css";
import nick from "../images/nick-professional.jpg";

export function Home() {
  return (
    <main className="home-component">
      <div className="headline-wrapper">
        <div className="headline">Hi I'm Nick</div>
        <div className="subline">Web Developer</div>
      </div>
      <div className="image-wrapper">
        <img src={nick} alt="nick-hibbits"></img>
      </div>
    </main>
  );
}

export default Home;
