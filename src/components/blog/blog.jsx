// Blog.js
import React from "react";
import Navbar from "../navbar/Navbar";
import "./blog.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-container">
      <Navbar />
      <div className="blog-content">
        <div className="project-card first-project-card">
          <div className="modal-content">
            <div className="tags"></div>
            <Link to="/project1" className="view-project-1">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <div className="modal-content">
            <h1>Lorem ipsum</h1>
            <div className="tags">
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/project2" className="view-project-button">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <div className="modal-content">
            <h1>Different Title</h1>
            <div className="tags">
              <span>Tag 1</span>
              <span>Tag 2</span>
              <span>Tag 3</span>
              <span>Tag 4</span>
            </div>
            <p>
              Different description here. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/project3" className="view-project-button">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <div className="modal-content">
            <h1>Another Title</h1>
            <div className="tags">
              <span>Tag A</span>
              <span>Tag B</span>
              <span>Tag C</span>
              <span>Tag D</span>
            </div>
            <p>
              Another description here. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/project4" className="view-project-button">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
