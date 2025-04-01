import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./new_navbar.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NewNavbar = () => {
  return (
    <>
      <div className="navbar">
        <Sidebar className="" />
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.span>
          <div className="buttons">
            <Link to="/blog" className="resumeButton">
              Blog
            </Link>
            <a
              href="https://www.linkedin.com/in/saanvi-shukla-s12/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedinButton"
            >
              LinkedIn
            </a>
            <Link to="#Contacts" className="resumeButton">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <hr className="navbar-line" />
    </>
  );
};

export default NewNavbar;
