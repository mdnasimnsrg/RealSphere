import React from "react";

const Card = ({ title, value }) => {
    return (
      <div className="bg-white shadow-md rounded p-4 flex items-center space-x-4">
        <div className="text-3xl font-bold">{value}</div>
        <div className="flex-1">
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    );
};

export default Card;
