import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, primary = false }) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      className={`btn ${mode}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
