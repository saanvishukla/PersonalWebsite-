import "./hero.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "200%",
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Computer Sci.";
  const typingSpeed = 100;
  const pauseDuration = 900;

  useEffect(() => {
    let charIndex = 0;
    let timeoutId;
    let direction = "forward";

    function type() {
      if (direction === "forward") {
        if (charIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          setTimeout(() => {
            direction = "backward";
            timeoutId = setTimeout(type, pauseDuration);
          }, pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(fullText.substring(0, charIndex - 1));
          charIndex--;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          setTimeout(() => {
            direction = "forward";
            timeoutId = setTimeout(type, pauseDuration);
          }, pauseDuration);
        }
      }
    }

    timeoutId = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [fullText, typingSpeed, pauseDuration]);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Saanvi Shukla</motion.h2>

          <motion.h1 variants={textVariants}>
            <span className="typingText">{displayedText}</span>
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <Link to="#Projects">
              <motion.button className="projects" variants={textVariants}>
                Projects
              </motion.button>
            </Link>
            <Link to="#Contacts">
              <motion.button className="con" variants={textVariants}>
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer, Research Assistant, Writer, Team Leader
      </motion.div>
    </div>
  );
};

export default Hero;
