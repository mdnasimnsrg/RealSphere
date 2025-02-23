import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  InputAdornment,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";

const InvoiceFilesTab = () => {
  const [filters, setFilters] = useState({
    user: "All users",
    timeRange: "Any time",
    search: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const columns = [
    { field: "fileName", headerName: "FILE NAME", flex: 2 },
    { field: "uploaded", headerName: "UPLOADED", flex: 1 },
    { field: "createdBy", headerName: "CREATED BY", flex: 1 },
  ];

  const rows = []; // Empty data for now

  return (
    <Box className=" w-full">
      <Box className="flex justify-between items-center mb-4 flex-wrap w-full gap-y-3">
        <div className="flex gap-4 items-center flex-wrap">
          <TextField
            label="User"
            select
            value={filters.user}
            onChange={(e) => handleFilterChange("user", e.target.value)}
            className="md:w-48 w-full"
          >
            <MenuItem value="All users">All users</MenuItem>
            <MenuItem value="User A">User A</MenuItem>
            <MenuItem value="User B">User B</MenuItem>
          </TextField>

          <TextField
            label="Time Range"
            select
            value={filters.timeRange}
            onChange={(e) => handleFilterChange("timeRange", e.target.value)}
            className="md:w-48 w-full"
          >
            <MenuItem value="Any time">Any time</MenuItem>
            <MenuItem value="Last 7 days">Last 7 days</MenuItem>
            <MenuItem value="Last 30 days">Last 30 days</MenuItem>
            <MenuItem value="Custom">Custom</MenuItem>
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
            className="md:w-48 w-full"
          />
        </div>

        <Button variant="contained" color="primary">
          Upload invoice files
        </Button>
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
          <Typography className="p-4 text-gray-500">
            No invoice files.
          </Typography>
        }
      />
    </Box>
  );
};

export default InvoiceFilesTab;
