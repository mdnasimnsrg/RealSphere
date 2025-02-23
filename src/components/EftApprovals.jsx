import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  Autocomplete,
  Checkbox,
  ListItemText,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";

const EftApprovals = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filterOptions = ["Pending", "Approved", "Rejected", "In Progress"];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (option) => {
    setSelectedFilters((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const renderSelectedFilters = () =>
    selectedFilters.length > 0 ? selectedFilters.join(", ") : "Select";

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

  const [selectedUnits, setSelectedUnits] = useState(["All"]);

  const unitsOptions = [
    { label: "All (2)", value: "all" },
    { label: "Property/Association/Company Level", value: "property" },
    { label: "All Units", value: "allUnits" },
  ];

  const handleUnitChange = (event, newValue) => {
    setSelectedUnits(newValue);
  };

  const rows = [];

  const columns = [
    { field: "date", headerName: "DATE" },
    { field: "account", headerName: "ACCOUNT" },
    { field: "paidTo", headerName: "PAID TO" },
    { field: "payeeType", headerName: "PAYEE TYPE" },
    { field: "properties", headerName: "PROPERTIES" },
    { field: "status", headerName: "STATUS" },
    { field: "approver", headerName: "APPROVER" },
    { field: "amount", headerName: "AMOUNT" },
    {
      field: "actions",
      headerName: "Actions",

      renderCell: () => (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box className="p-6 shadow-md bg-white rounded-md">
      <Box className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <Box className="flex gap-4">
          <h2 className="text-2xl font-semibold  text-nowrap">EFT approvals</h2>
        </Box>
        <Box className="flex gap-4">
          <Button variant="contained">Configure approvals</Button>
        </Box>
      </Box>
      {/* Header Section */}
      <Box className="flex justify-between items-center mb-4">
        <Box className="flex gap-4 flex-wrap">
          <TextField
            select
            label="Filter by Type"
            defaultValue="All"
            className="md:w-48 w-full"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Check">Check</MenuItem>
            <MenuItem value="Bill">Bill</MenuItem>
          </TextField>

          <Autocomplete
            multiple
            options={unitsOptions}
            value={selectedUnits}
            onChange={handleUnitChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderOption={(props, option, { selected }) => (
              <MenuItem {...props}>
                <Checkbox checked={selected} />
                <ListItemText primary={option.label} />
              </MenuItem>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Unit"
                placeholder="Search..."
              />
            )}
            className="md:w-48 w-full"
          />

          <TextField
            label="Filter by Status"
            value={renderSelectedFilters()}
            onClick={handleFilterClick}
            className="md:w-48 w-full"
            InputProps={{
              readOnly: true,
            }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            className="md:w-48 w-full"
          >
            {filterOptions.map((option, index) => (
              <MenuItem key={index} onClick={() => handleFilterChange(option)}>
                <Checkbox checked={selectedFilters.includes(option)} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Menu>

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
      </Box>

      {/* DataGrid */}
      <Box className="h-96">
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          disableSelectionOnClick
          className="bg-white"
          pagination
          components={{
            NoRowsOverlay: () => (
              <Typography className="p-4 text-gray-500">
                No recurring transactions.
              </Typography>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default EftApprovals;
