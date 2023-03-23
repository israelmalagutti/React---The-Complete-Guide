import React from "react";

import "./Button.modules.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
