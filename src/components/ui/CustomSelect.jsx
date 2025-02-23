import React from "react";

const CustomSelect = ({ icon, options, handleChange, selectedOption }) => {
  return (
    <div className="flex flex-wrap justify-center gap-y-2 ">
      <div className="flex items-center border rounded-md p-2 shadow-sm bg-white">
        <span className="text-gray-500 mr-2">{icon}</span>
        <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer" onChange={handleChange} value={selectedOption}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
