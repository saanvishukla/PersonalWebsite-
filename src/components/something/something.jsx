import React from "react";
import "./Project1.scss";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";

function Project1() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="project1-container">
      <Navbar />
      <div className="image-section">
        <video
          src="./background.mp4"
          className="background-video"
          autoPlay
          loop
          muted
        />
        <div className="overlay-text">
          <div className="top-center">SAANVI SHUKLA</div>
          <h1 className="the-blog">THE BLOG</h1>
          <div className="bottom-left">WELCOME TO</div>
          <div className="bottom-right">BY SAANVI</div>
        </div>
      </div>

      <div className="featured-section">
        <h1 className>FEATURED</h1>
        <div className="featured-articles">
          <div className="article">
            <img alt="Article 1" />
            <h2>Lorem Ipsum wdawkf akfaownaobgoawg</h2>
            <p>Lorem Ipsum wdawkf akfaownaobgoawg</p>
            <p>{loremIpsum}</p> {/* Added lorem ipsum */}
            <a href="#">Read More</a>
          </div>
          <div className="article">
            <img alt="Article 2" />
            <h2>Horem Ipsum wdawkf akfaownaobgoawg</h2>
            <p>Lorem Ipsum wdawkf akfaownaobgoawg</p>
            <p>{loremIpsum}</p>
            <a href="#">Read More</a>
          </div>
          <div className="article">
            <img alt="Article 3" />
            <h2>Lorem Ipsum wdawkf akfaownaobgoawg</h2>
            <p>Lorem Ipsum wdawkf akfaownaobgoawg</p>
            <p>{loremIpsum}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
