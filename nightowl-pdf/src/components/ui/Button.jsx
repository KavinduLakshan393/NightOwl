import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-4 py-2 rounded font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-accent-color hover:opacity-90 text-white",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-300"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
