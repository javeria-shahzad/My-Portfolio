import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Objective from "./pages/Objective";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import SoftSkills from "./pages/SoftSkills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Objective />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <SoftSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
