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
          <h2 className="head">Education</h2>
          <p >
          I'm pursuing a degree in Computer Science and Engineering at HKUST. This journey has been enriching, allowing me to explore subjects like Python, C++, AI, and statistics. I've applied these skills in real-world projects and internships, gaining valuable experience. The program provides a solid foundation in computer science, preparing me for a career in tech. Through projects and internships, I've gained practical skills that complement my theoretical knowledge.
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="head">Skills</h2>
          <p >
          I've developed strong technical skills in languages like Python, C++, and SQL. Tools like Pandas and NumPy have been invaluable in data science projects. I've also honed my communication and teamwork skills, essential for collaborating effectively. My technical expertise is complemented by creative problem-solving abilities, allowing me to contribute to various projects. I'm proficient in building scalable applications using platforms like Google Cloud and Firebase.
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="head">Co Curriculars</h2>
          <p >
          I'm passionate about extracurricular activities that complement my studies. As Vice President of WISE at HKUST, I boosted participation by 80%. I'm also an Engineering Student Ambassador, promoting the program and enhancing its visibility. My work with the Investment Circle improved portfolio performance by 15% using Python. These roles have helped me develop leadership and teamwork skills, essential for professional success.
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="head">Work</h2>
          <p >
         I've had diverse professional experiences that have shaped my skills. Currently, I'm an IT Intern at Tata Steel, developing a Python-based PDF extraction system. I'm also a Software Developer at Vision Drop AI, contributing to NokkenTalk AI. Additionally, I've interned at MSTC Limited and Wallem Shipmanagement Limited, optimizing database architecture and streamlining workflows. These experiences have provided valuable insights into industry practices and technologies.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
