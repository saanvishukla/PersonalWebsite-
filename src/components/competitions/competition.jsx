import React, { useRef } from "react";
import "./competitions.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const competitionItems = [
  {
    id: 1,
    title: "Cathay Hackathon 2024",
    img: "/trial.png",
    desc: "Developed OptiTech during the Cathay Hackathon 2024, creating an innovative dashboard to forecast aircraft maintenance needs and streamline operations among more than 1,500 competing students.",
  },
  {
    id: 2,
    title: "HKAE Pitch Competition",
    img: "/trial.png",
    desc: "Currently participating as part of a team developing a wearable AI solution using BCI technology, selected as one of the 7 finalists in the HKAE Pitch Competition.",
  },
  {
    id: 3,
    title: "2025 Hong Kong Web3 Ideathon",
    img: "/trial.png",
    desc: "Participating in the 2025 Hong Kong Web3 Ideathon, focusing on innovative Web3 solutions across Financial Inclusion, Community Impact, and Sustainable Development.",
  },
  {
    id: 4,
    title: "Executive Board,Investment Circle ",
    img: "/trial.png",
    desc: "Analyse large datasets utilising Python, deriving insights that guided investment strategies; these efforts contributed to a 15% improvement in overall portfolio performance.",
  },
  {
    id: 5,
    title: "AWS Educate Cloud Student Ambassador",
    img: "/trial.png",
    desc: "Selected as one of the top 23 AWS Ambassadors from a large pool of candidates.",
  },
  {
    id: 6,
    title: "Deputy Head Student Ambassador,HKUST",
    img: "/trial.png",
    desc: "Liaise with 200 student ambassadors to plan and organise events, including Discord sessions, undergraduate seminars, Info Day, Orientation Week, and campus tours, engaging with 500+ incoming students.",
  },
  {
    id: 7,
    title: "Harvard Conference'24, Impact Challenge ",
    img: "/trial.png",
    desc: "Co-led a team of 4 in studying CLAV’s business model and identifying pain points so as to design innovative solutions for the firm operating system; pitched the idea to a panel of judges from CLAV.",
  },
  {
    id: 8,
    title: "Winner, Fringe Festival, Edinburgh",
    img: "/trial.png",
    desc: "Represented India at Fringe Festival in Scotland securing Best Dance Performance position out of 59,600 performances.",
  },
  {
    id: 9,
    title: "Vice President,WISE",
    img: "/trial.png",
    desc: "Led initiatives including networking sessions and workshops, resulting in an 80% increase in participation.",
  },
  {
    id: 10,
    title: "Curator and Executive Producer,TEDx HKUST ",
    img: "/trial.png",
    desc: "Orchestrated the successful execution of TEDx HKUST by managing logistics for an event with 120 participants drawn from more than 535 applicants.",
  },
];

const Competition = ({ item, isReversed }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="competitionItem">
      <div className="container">
        <div className={`wrapper ${isReversed ? "reversed" : ""}`}>
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See More</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Competitions = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="competitions" ref={ref}>
      <div className="progress">
        <h1>Competitions & Extra Co-Curriculars</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="gridContainer">
        {competitionItems.map((item, index) => (
          <Competition item={item} key={item.id} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default Competitions;
