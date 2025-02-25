// PopupCard.jsx
import React from "react";
import "./popup.scss"; // Import styles for the PopupCard

const PopupCard = ({ projectNumber, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Project {projectNumber} Details</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultricies diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupCard;
