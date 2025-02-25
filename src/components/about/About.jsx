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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>
        <motion.div
          className="boxAbout"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
