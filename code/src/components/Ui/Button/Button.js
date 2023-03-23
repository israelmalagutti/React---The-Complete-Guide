import React from "react";

import buttonStyles from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} className={buttonStyles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
