import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const CustomMenu = ({ trigger, options = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Custom Trigger (Button/Icon/Text) */}
      <div onClick={handleClick} className="cursor-pointer">
        {trigger}
      </div>

      {/* Dynamic Menu List */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "shadow-lg rounded-lg",
        }}
      >
        {options.length > 0 ? (
          options.map((option, index) =>
            option === "divider" ? (
              <hr />
            ) : (
              <MenuItem
                key={index}
                onClick={() => {
                  option.onClick && option.onClick();
                  handleClose();
                }}
                className="flex gap-2"
              >
                {option.icon && <span className="text-lg">{option.icon}</span>}
                {option.label}
              </MenuItem>
            )
          )
        ) : (
          <MenuItem className="text-gray-400">No options available</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default CustomMenu;
