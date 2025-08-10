import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 py-1 mx-1 bg-gray-200 text-gray-800 hover:text-white hover:bg-gray-600 rounded-lg text-sm font-medium whitespace-nowrap focus:outline-none transition-all duration-300">
      {name}
    </button>
  );
};

export default Button;
