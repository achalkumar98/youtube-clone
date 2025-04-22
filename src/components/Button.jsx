import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 py-1 mx-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;

