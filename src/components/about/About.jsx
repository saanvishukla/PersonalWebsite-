import { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div
        className="textContainerAbout"
        variants={variants}
      ></motion.div>
      <motion.div className="titleContainerAbout" variants={variants}>
        <div className="titleAbout">
          <h1>
            <motion.b whileHover={{ color: "white" }}>About</motion.b> Me
          </h1>
        </div>
        <div className="titleAbout">
          <h1>
            <motion.b whileHover={{ color: "white" }}>Computer</motion.b>{" "}
            Student
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainerAbout" variants={variants}>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p>
          I'm currently pursuing my degree in Computer Science and Engineering at HKUST. This journey has been incredibly enriching, allowing me to delve into subjects like Python, C++, AI, and statistics. I've also had the opportunity to apply these skills in real-world projects and internships, which has been truly valuable.
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills</h2>
          <p>
          I've developed a strong set of skills that blend technical expertise with creative problem-solving. I'm proficient in languages like Python, C++, and SQL, which have been invaluable in my work with AI and data analysis. Tools like Pandas, NumPy, and Scikit-learn have allowed me to dive deep into data science projects, while platforms like Google Cloud and Firebase have helped me build scalable applications. Beyond coding, I've honed my skills in communication and teamwork, which are essential for collaborating effectively in multi-disciplinary environments.
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Co Curriculars</h2>
          <p>
          I'm passionate about extracurricular activities that complement my studies. As Vice President of WISE at HKUST, I've led initiatives that boosted participation by 80%. I'm also an Engineering Student Ambassador, promoting the engineering program and enhancing its visibility. Additionally, my work with the Investment Circle has allowed me to apply my analytical skills using Python, contributing to a 15% improvement in portfolio performance
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Work Experience</h2>
          <p>
          I've had a diverse range of professional experiences that have shaped my skills and perspectives. Currently, I'm working as an Information Technology Intern at Tata Steel, where I've developed a website with a Python-based PDF extraction system, enhancing operational efficiency for key clients like Indian Railways. I'm also a Software Developer at Vision Drop AI, contributing to the development of NokkenTalk AI, which will be showcased at CES 2025. Additionally, I've interned at MSTC Limited, optimizing database architecture and automating ETL processes, and at Wallem Shipmanagement Limited, where I streamlined workflows by integrating systems with Microsoft D365.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
