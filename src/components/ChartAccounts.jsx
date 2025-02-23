import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  InputAdornment,
  IconButton,
  Switch,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormControlLabel from "@mui/material/FormControlLabel";

const ChartAccounts = () => {
  const [filters, setFilters] = useState({
    account: "All accounts",
    status: "Active",
    search: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const columns = [
    ...(checked
      ? [{ field: "accountNumber", headerName: "ACCOUNT NUMBER" }]
      : []),
    { field: "name", headerName: "NAME" },
    { field: "type", headerName: "TYPE" },
    {
      field: "defaultAccountFor",
      headerName: "DEFAULT ACCOUNT FOR",
    },
    {
      field: "cashFlowClassification",
      headerName: "CASH FLOW CLASSIFICATION",
    },
    { field: "notes", headerName: "NOTES" },
    {
      field: "actions",
      headerName: "Action",
      flex: 0.5,
      renderCell: () => (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      accountNumber: "123456",
      name: "Accounts Payable",
      type: "Current Liability",
      defaultAccountFor: "Accounts Payable",
      cashFlowClassification: "Operating activities",
      notes: "Accounts Payable",
    },
    {
      id: 2,
      accountNumber: "123456",
      name: "Accounts Payable",
      type: "Current Liability",
      defaultAccountFor: "Accounts Payable",
      cashFlowClassification: "Operating activities",
      notes: "Accounts Payable",
    },
    {
      id: 3,
      accountNumber: "123456",
      name: "Accounts Payable",
      type: "Current Liability",
      defaultAccountFor: "Accounts Payable",
      cashFlowClassification: "Operating activities",
      notes: "Accounts Payable",
    },
    {
      id: 4,
      accountNumber: "123456",
      name: "Accounts Payable",
      type: "Current Liability",
      defaultAccountFor: "Accounts Payable",
      cashFlowClassification: "Operating activities",
      notes: "Accounts Payable",
    },
  ];

  return (
    <Box className="p-6 shadow-md bg-white rounded-md">
      <Box className="flex justify-between items-center mb-4 flex-wrap">
        <Box className="flex gap-4">
          <h2 className="text-2xl font-semibold">Chart of accounts</h2>
        </Box>
        <Box className="flex gap-4 flex-wrap">
          <Button variant="contained">Add Account</Button>
          <Button variant="contained">Import Accounts</Button>
        </Box>
      </Box>

      <Box className="flex justify-between items-center mb-4 flex-wrap">
        <div className="flex gap-4 items-center flex-wrap">
          <TextField
            label="Accounts"
            select
            value={filters.account}
            onChange={(e) => handleFilterChange("account", e.target.value)}
            className="md:w-48 w-full"
          >
            <MenuItem value="All accounts">All Accounts</MenuItem>
            <MenuItem value="Account A">Account A</MenuItem>
            <MenuItem value="Account B">Account B</MenuItem>
          </TextField>

          <TextField
            label="Status"
            select
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="w-full md:w-48"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>

          <TextField
            placeholder="Search file names..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="md:w-64 w-full"
          />
        </div>

        <FormControlLabel
          className="w-full md:w-fit mt-3 md:mt-0"
          control={
            <Switch checked={checked} onChange={handleChange} color="primary" />
          }
          label="Show account numbers"
        />
      </Box>

      <Box className="mb-4">
        <Typography>{rows.length} matches</Typography>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        className="bg-white"
        noRowsOverlay={
          <Typography className="p-4 text-gray-500">No Accounts</Typography>
        }
      />
    </Box>
  );
};

export default ChartAccounts;
