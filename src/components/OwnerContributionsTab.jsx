import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";

const OwnerContributionsTab = () => {

  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const options = [
    "Due date",
    "GL Accounts",
    "Amount",
    "Approval status",
    "Approver",
    "Reference number",
    "Vendor categories",
    "Work Order",
    ];

  const [filters, setFilters] = useState({
    property: "All properties",
    status: "All statuses",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const columns = [
    { field: "status", headerName: "STATUS", flex: 1 },
    { field: "due", headerName: "DUE", flex: 1 },
    { field: "properties", headerName: "PROPERTIES", flex: 2 },
    { field: "task", headerName: "TASK", flex: 2 },
    { field: "lastUpdate", headerName: "LAST UPDATE", flex: 1 },
    { field: "requestedFrom", headerName: "REQUESTED FROM", flex: 1 },
    { field: "priority", headerName: "PRIORITY", flex: 1 },
    { field: "requested", headerName: "REQUESTED", flex: 1 },
    { field: "received", headerName: "RECEIVED", flex: 1 },
  ];

  const rows = []; // Empty data for now

  return (
    <Box className="">

      <Box className="flex gap-4 mb-4 items-center flex-wrap">
        <TextField
          label="Property"
          select
          value={filters.property}
          onChange={(e) => handleFilterChange("property", e.target.value)}
         className="md:w-48 w-full"
        >
          <MenuItem value="All properties">All properties</MenuItem>
          <MenuItem value="Property A">Property A</MenuItem>
          <MenuItem value="Property B">Property B</MenuItem>
        </TextField>

        <TextField
          label="Status"
          select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="md:w-48 w-full"
        >
          <MenuItem value="All statuses">All statuses</MenuItem>
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>

        <Button
            variant="text"
            startIcon={<FilterListIcon />}
            onClick={handleClick}
        >
            Add filter option
        </Button>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            "aria-labelledby": "filter-button",
            }}
        >
            {options.map((option, index) => (
            <MenuItem key={index} onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
        </Menu>
      </Box>

      <Box className="mb-4">
        <Typography>
          {rows.length} matches
        </Typography>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        className="bg-white"
        noRowsOverlay={
          <Typography className="p-4 text-gray-500">
            We didn't find any tasks. Maybe you don't have any or maybe you need
            to <span className="text-blue-500 cursor-pointer">clear your filters</span>.
          </Typography>
        }
      />
    </Box>
  );
};

export default OwnerContributionsTab;
