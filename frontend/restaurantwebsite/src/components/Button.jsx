import React from 'react';

const Button = ({ children, onClick, variant = 'primary', fullWidth = false }) => {
  const baseClasses = "px-6 py-2 rounded-md font-medium transition-all duration-300 text-center";
  
  const variantClasses = {
    primary: "bg-[#E63946] hover:bg-[#D62836] text-[#F1FAEE]",
    secondary: "bg-[#A5D8A6] hover:bg-[#8AC98B] text-[#2D3142]",
    outline: "bg-transparent border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-[#F1FAEE]"
  };
  
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {children}
    </button>
  );
};

export default Button;