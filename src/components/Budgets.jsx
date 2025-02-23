import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";

const Budgets = () => {
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

  const rows = [
    {
      id: 1,
      budget: "Garden Row Budget",
      fiscalYear: "2024",
      propertyUnit: "Garden Row (multi-building complex)",
      start: "1/1/2024",
      end: "12/31/2024",
      totalIncome: "SAR 42,744.00",
      totalExpenses: "SAR 17,140.00",
    },
    {
      id: 2,
      budget: "Garden Row Budget",
      fiscalYear: "2024",
      propertyUnit: "Garden Row (multi-building complex)",
      start: "1/1/2024",
      end: "12/31/2024",
      totalIncome: "SAR 42,744.00",
      totalExpenses: "SAR 17,140.00",
    },
  ];

  const columns = [
    { field: "budget", headerName: "BUDGET" },
    { field: "fiscalYear", headerName: "FISCAL YEAR" },
    { field: "propertyUnit", headerName: "PROPERTY - UNIT" },
    { field: "start", headerName: "START" },
    { field: "end", headerName: "END" },
    { field: "totalIncome", headerName: "TOTAL INCOME" },
    { field: "totalExpenses", headerName: "TOTAL EXPENSES" },
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
      <Box className="flex justify-between items-center mb-4">
        <Box className="flex gap-4">
          <h2 className="text-2xl font-semibold mb-4">Budgets</h2>
        </Box>
        <Box className="flex gap-4">
          <Button variant="contained">Add budget</Button>
        </Box>
      </Box>
      {/* Header Section */}
      <Box className="flex justify-between items-center mb-4">
        <Box className="flex gap-4">
          <TextField
            select
            label="Filter by Type"
            defaultValue="All"
            className="w-48"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Check">Check</MenuItem>
            <MenuItem value="Bill">Bill</MenuItem>
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
      </Box>

      {/* DataGrid */}
      <Box className="h-96">
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          className="bg-white w-full"
          pagination
          components={{
            NoRowsOverlay: () => (
              <Typography className="p-4 text-gray-500">No budgets.</Typography>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Budgets;
