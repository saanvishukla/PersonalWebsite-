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
    title: "Data Science Bowl",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 3,
    title: "CodeForces Round",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 4,
    title: "Kaggle Competition",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 5,
    title: "AI Hackathon",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 6,
    title: "Data Science Bowl",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 7,
    title: "CodeForces Round",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    id: 8,
    title: "Kaggle Competition",
    img: "/trial.png",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
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
        <h1>Competitions & Extra Curriculars</h1>
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
