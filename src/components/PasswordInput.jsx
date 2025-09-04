// src/PasswordInput.jsx
import React from 'react';

const PasswordInput = () => {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      placeholder="Enter your password" // Test uses this placeholder to find it
      onChange={handleChange}
    />
  );
};

export default PasswordInput;