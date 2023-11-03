import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <h1>Mohammad Ittehad Rahman Sami</h1>
        <p>Web Developer & Designer</p>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio website. I am a passionate web developer and designer with a strong
          focus on creating beautiful and functional websites. I am a full stack developer with knowledge about php, node, react, django and python.
        </p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-item">
          {/* <img src="project1.jpg" alt="Project 1" /> */}
          <h3>AgrowCulture</h3>
          <p>Ecommerce website using php and mysql.</p>
        </div>

        <div className="portfolio-item">
          {/* <img src="project2.jpg" alt="Project 2" /> */}
          <h3>Spectrum</h3>
          <p>Ecommerce website using MERN stack</p>
        </div>
        {/* Add more portfolio items as needed */}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at: ittehadrahman@iut-dhaka.edu</p>
      </section>
    </div>
  );

}

export default App;
