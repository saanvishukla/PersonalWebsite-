import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="wrapper">
        <div className="skillsSection">
          <h2>Technical Skills</h2>
          <ul className="technical-skills-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
                style={{ width: "90px", height: "90px", marginRight: "5px" }}
              />
              <p className="skill-name">Python</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                style={{ width: "90px", height: "90px", marginRight: "5px" }}
              />
              <p className="skill-name">C++</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                alt="Azure SQL"
                style={{ width: "90px", height: "90px", marginRight: "5px" }}
              />
              <p className="skill-name">SQL</p>
            </li>
            <li>
              <img
                src="./cobra.png"
                alt="Cobra"
                style={{ width: "90px", height: "90px", marginRight: "5px" }}
              />
              <p className="skill-name" style={{ paddingRight: "12px" }}>
                Cobra
              </p>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg"
                alt="R"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">R</p>
            </li>
            <li>
              <img
                src="./power.png"
                alt="PowerBI"
                style={{ width: "120px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Power BI</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">MongoDB</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"
                alt="Pandas"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Pandas</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
                alt="NumPy"
                style={{ width: "90px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">NumPy</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
                alt="Matplotlib"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Matplotlib</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
                alt="Scikit-learn"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Scikit-learn</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML5"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">HTML5</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="CSS3"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">CSS3</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
                alt="Swift"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Swift</p>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/.xlsx_icon.svg"
                alt="Excel"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Excel</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Node.js"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Node.js</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                style={{ width: "70px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">Next.js</p>
            </li>
            <li>
              <img
                src="./aws.svg"
                alt="AWS"
                style={{ width: "100px", height: "70px", marginRight: "5px" }}
              />
              <p className="skill-name">AWS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
