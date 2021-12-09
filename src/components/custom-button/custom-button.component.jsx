import React from "react";

import "./custom-button.styles.scss";

// button also takes the property called 'type'.

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
