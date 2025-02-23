import React, { useState } from "react";
import { Menu, MenuItem, Avatar, IconButton } from "@mui/material";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const CustomSelector = ({
  icon,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-2 bg-white p-2 border rounded cursor-pointer w-full md:w-fit">
      <div className="text-xl text-gray-600">{icon}</div>

      <IconButton onClick={handleClick} className="flex items-center gap-2">
        <span className="text-sm font-semibold">{selectedOption.name}</span>
        {open ? (
          <AiFillCaretUp className="text-sm" />
        ) : (
          <AiFillCaretDown className="text-sm" />
        )}
      </IconButton>

      {/* MUI Menu for dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxWidth: "850px",
            width: "90vw",
            padding: "10px",
          },
        }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {options.length > 1 ? (
            options.map((option) => (
              <button
                key={option.id}
                className={`flex gap-3 items-center p-2 border rounded w-full text-left hover:bg-gray-100 ${selectedOption.id === option.id &&
                  "border-blue-700 bg-blue-700/5"
                  }`}
                onClick={() => {
                  setSelectedOption(option);
                  handleClose();
                }}
              >
                <div className="h-12 w-12 rounded-full bg-gray-600 flex-none">
                  <img
                    src={option.image ? option.image : "/images/blankuser.png"}
                    alt={option.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-sm">{option.name}</p>
                  <p className="text-xs text-green-700 font-bold">
                    {[
                      option.available !== undefined
                        ? `${option.available} Available`
                        : null,
                      option.vacant !== undefined
                        ? `${option.vacant} Vacant`
                        : null,
                    ]
                      .filter(Boolean)
                      .join(" / ")}
                  </p>
                </div>
                {selectedOption.id === option.id && (
                  <FaCheckCircle className="text-green-700" />
                )}
              </button>
            ))
          ) : (
            <div className="w-full flex justify-center items-center col-span-full">
              <img
                src="/images/no-data.png"
                alt="no-data"
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
};

export default CustomSelector;
