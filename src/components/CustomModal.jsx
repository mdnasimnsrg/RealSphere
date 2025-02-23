/* eslint-disable react/prop-types */
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React from "react";

const CustomModal = ({ isOpen, onClose, title, children, size = "md" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    max: "max-w-max"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 scrollbar-hide">
      <div
        className={`bg-white rounded-lg shadow-lg w-full m-4 overflow-y-scroll max-h-[90vh] scrollbar-hide ${sizeClasses[size]}`}
      >
        <div className="flex justify-between items-center p-3 border-b border-light-200">
          <h2 className="text-md text-black font-semibold">{title}</h2>
          <button onClick={onClose} className="text-black focus:outline-none">
            <CloseOutlinedIcon style={{ fontSize: 20 }} />
          </button>
        </div>
        <div className="p-4">{children}</div>
        {/* <div className = "flex justify-end p-4 border-t">
          <button
            onClick = { onClose }
            className = "px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
                Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CustomModal;
