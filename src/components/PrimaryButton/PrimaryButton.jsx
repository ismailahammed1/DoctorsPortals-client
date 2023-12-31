// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ children }) => {
  return (
    <button className="btn glass bg-gradient-to-r from-primary to-blue-800">
      {children}
    </button>
  );
};

export default PrimaryButton;
