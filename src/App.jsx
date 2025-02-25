import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Competitions from "./components/competitions/competition";
import Skills from "./components/skills/Skills";
import Projects from "./components/project_section/project";
import Blog from "./components/blog/blog";
import Project1 from "./components/project0/project0";
import Project2 from "./components/project2/Project2";
import Project3 from "./components/project3/Project3";
import Project4 from "./components/project4/Project4";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="Homepage" className="Homepage">
                  <Navbar />
                  <Hero />
                </section>
                <section id="About">
                  <About />
                </section>
                <section id="Experience" className="dynamic-height">
                  <Timeline />
                </section>
                <div id="Competition" className="competitions">
                  <Competitions />
                </div>
                <section id="Projects">
                  <Projects />
                </section>
                <section id="Skills" className="skills">
                  <Skills />
                </section>
                <section id="Contacts" className="contacts">
                  <Contact />
                </section>
              </>
            }
          />

          <Route path="/blog" element={<Blog />} />
          <Route
            path="/project1"
            element={<Project1 backgroundImage={"./background.JPG"} />}
          />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
