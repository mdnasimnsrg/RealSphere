import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

const Dropdown = ({ icon, text, options = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAbove, setOpenAbove] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    handleClose();
  }, [pathname]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (anchorEl && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - dropdownRect.bottom;
      setOpenAbove(spaceBelow < 200);
    }
  }, [anchorEl]);

  return (
    <div className="relative z-[99] w-full" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        className="flex items-center justify-between w-full py-3 text-white rounded-lg hover:text-black font-semibold"
        onClick={handleClick}
      >
        <div className="flex items-center gap-4 flex-nowrap text-nowrap">
          <span className="text-2xl">{icon}</span>
          <span>{text}</span>
        </div>
        <IoIosArrowForward
          className={`text-lg transition-transform ${
            anchorEl ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: openAbove ? "top" : "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: openAbove ? "bottom" : "top",
          horizontal: "left",
        }}
        PaperProps={{
          className:
            "max-h-80 w-fit overflow-y-auto bg-white text-black shadow-lg rounded-lg sc-fkSzgi",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            component={Link}
            to={option?.href}
          >
            {option?.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
