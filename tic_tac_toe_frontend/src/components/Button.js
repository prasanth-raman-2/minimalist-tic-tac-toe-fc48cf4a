import React from 'react';

const Button = ({ onClick, className, children, disabled }) => {
  return (
    <button
      className={`custom-button ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
