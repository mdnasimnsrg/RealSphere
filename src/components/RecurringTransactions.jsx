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

const RecurringTransactions = () => {
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

  const [selectedUnits, setSelectedUnits] = useState(["All"]);

  const unitsOptions = [
    { label: "All (2)", value: "all" },
    { label: "Property/Association/Company Level", value: "property" },
    { label: "All Units", value: "allUnits" },
  ];

  const handleUnitChange = (event, newValue) => {
    setSelectedUnits(newValue);
  };

  const rows = [
    {
      id: 1,
      nextDate: "2/1/2025",
      type: "Check",
      payee: "City of Plainville",
      memo: "Property Taxes",
      frequency: "Monthly",
      duration: "Until cancelled",
      postingDay: "Post 5 days in advance",
      amount: "SAR 150.00",
    },
    {
      id: 2,
      nextDate: "1/15/2025",
      type: "Check",
      payee: "Peckham's Greenhouse",
      memo: "Landscaping and lawn care",
      frequency: "Monthly",
      duration: "Until cancelled",
      postingDay: "Post 5 days in advance",
      amount: "SAR 250.00",
    },
    {
      id: 3,
      nextDate: "1/15/2025",
      type: "Bill",
      payee: "The Mercantile",
      memo: "Pool services and cleaning",
      frequency: "Monthly",
      duration: "Until cancelled",
      postingDay: "Post 5 days in advance",
      amount: "SAR 500.00",
    },
    {
      id: 4,
      nextDate: "1/17/2025",
      type: "Bill",
      payee: "Henry Insurance Group",
      memo: "Insurance bill",
      frequency: "Monthly",
      duration: "Until cancelled",
      postingDay: "Post 5 days in advance",
      amount: "SAR 1,000.00",
    },
  ];
  const columns = [
    {
      field: "nextDate",
      headerName: "NEXT DATE",
    },
    { field: "type", headerName: "TYPE" },
    { field: "payee", headerName: "PAYEE" },
    { field: "memo", headerName: "MEMO" },
    {
      field: "frequency",
      headerName: "FREQUENCY",
    },
    {
      field: "duration",
      headerName: "DURATION",
    },
    {
      field: "postingDay",
      headerName: "POSTING DAY",
    },
    { field: "amount", headerName: "AMOUNT" },
    {
      field: "actions",
      headerName: "Action",

      renderCell: () => (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box className="p-6 shadow-md bg-white rounded-md">
      <Box className="flex justify-between items-center mb-4 flex-wrap">
        <Box className="flex gap-4">
          <h2 className="text-2xl font-semibold mb-4">
            Recurring transactions
          </h2>
        </Box>
        <Box className="flex gap-4 flex-wrap">
          <Button variant="contained">Add recurring bill</Button>
          <Button variant="contained">Add recurring check</Button>
          <Button variant="contained">Add recurring journal entries</Button>
        </Box>
      </Box>
      {/* Header Section */}
      <Box className="flex justify-between items-center my-4 flex-wrap">
        <Box className="flex gap-4 flex-wrap mt-4">
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
      <Box className="h-96 w-full overflow-x-auto">
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          className="bg-white text-nowrap"
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

export default RecurringTransactions;
