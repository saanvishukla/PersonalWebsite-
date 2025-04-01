import React, { useRef, useState } from "react";
import "./project.scss";
import { motion, useInView } from "framer-motion";
import PopupCard from "../popcard/Popup";

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (projectNumber) => {
    setSelectedProject(projectNumber);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={`project-section ${isPopupOpen ? "blurred" : ""}`}>
      <motion.div className="projects" ref={ref}>
        <h2>Projects</h2>
        <motion.div className="listContainer">
          {Array.from({ length: 4 }, (_, index) => (
            <motion.div
              key={index}
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
              onClick={() => openPopup(index + 1)}
            >
              <h2>Project {index + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                libero enim nisi aliquam consectetur expedita magni eius ex
                corrupti animi! Ad nam pariatur assumenda quae mollitia libero
                repellat explicabo maiores?
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {isPopupOpen && (
        <PopupCard projectNumber={selectedProject} onClose={closePopup} />
      )}
    </div>
  );
};

export default Projects;
