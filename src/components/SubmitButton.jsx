// src/SubmitButton.jsx
import React from 'react';

const SubmitButton = () => {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password {/* Test uses this text content to find the button */}
    </button>
  );
};

export default SubmitButton;