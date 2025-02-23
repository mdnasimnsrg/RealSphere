import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Chip,
  Checkbox,
  Autocomplete,
  ListItemText,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";

const PaidBillsTab = () => {
  const [property, setProperty] = useState("All");
  const [vendor, setVendor] = useState("Vendor");
  const [selectedUnits, setSelectedUnits] = useState(["All"]);
  const [filters, setFilters] = useState({
    property: "All",
    unit: "All",
    vendor: "Select...",
    dateRange: "Last 30 days",
    fromDate: "",
    toDate: "",
  });

  const unitsOptions = [
    { label: "All (2)", value: "all" },
    { label: "Property/Association/Company Level", value: "property" },
    { label: "All Units", value: "allUnits" },
  ];

  const handleUnitChange = (event, newValue) => {
    setSelectedUnits(newValue);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "dateRange" && value !== "Custom"
        ? { fromDate: "", toDate: "" }
        : {}),
    }));
  };

  const columns = [
    { field: "paidDate", headerName: "PAID DATE", flex: 1 },
    {
      field: "status",
      headerName: "",
      renderCell: (params) => (
        <Chip label="PAID" color="success" size="small" />
      ),
      sortable: false,
    },
    { field: "vendor", headerName: "VENDORS", flex: 2 },
    { field: "memo", headerName: "MEMO", flex: 2 },
    { field: "refNo", headerName: "REF NO.", flex: 1 },
    { field: "approvers", headerName: "APPROVERS", flex: 1 },
    { field: "amount", headerName: "AMOUNT", flex: 1 },
    {
      field: "action",
      headerName: "",
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
      paidDate: "12/13/2024",
      vendor: "Mortgage Servicer",
      memo: "Mortgage",
      refNo: "2036",
      approvers: "",
      amount: "SAR 1,500.00",
    },
    {
      id: 2,
      paidDate: "12/13/2024",
      vendor: "Hank the Handyman",
      memo: "Repair broken steps",
      refNo: "82124",
      approvers: "",
      amount: "SAR 200.00",
    },
    // Add more rows as needed
  ];

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

  return (
    <Box className="">
      <div className="flex gap-4 mb-4 mr-auto flex-wrap justify-center md:justify-start">
        <Button variant="contained" color="success">
          Record bill
        </Button>
        <Button variant="outlined">Pay bills</Button>
        <Button variant="outlined">Request owner contribution</Button>
      </div>
      <Box className="flex gap-4 mb-4 items-center flex-wrap">
        <TextField
          label="Property or Company"
          select
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          className="md:w-48 w-full"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Property A">Property A</MenuItem>
        </TextField>

        <Autocomplete
          multiple
          options={unitsOptions}
          value={selectedUnits}
          onChange={handleUnitChange}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
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
          label="Vendors"
          select
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          className="md:w-48 w-full"
        >
          <MenuItem value="">Select...</MenuItem>
        </TextField>

        <TextField
          label="Paid Date"
          select
          value={filters.dateRange}
          onChange={(e) => handleFilterChange("dateRange", e.target.value)}
          className="md:w-48 w-full"
        >
          <MenuItem value="Last 30 days">Last 30 days</MenuItem>
          <MenuItem value="Custom">Custom</MenuItem>
        </TextField>

        <>
          <TextField
            type="date"
            value={filters.fromDate}
            onChange={(e) => handleFilterChange("fromDate", e.target.value)}
            className="md:w-48 w-full"
            disabled={filters.dateRange !== "Custom"}
          />
          <TextField
            type="date"
            value={filters.toDate}
            onChange={(e) => handleFilterChange("toDate", e.target.value)}
            className="md:w-48 w-full"
            disabled={filters.dateRange !== "Custom"}
          />
        </>
      </Box>

      <Box className="mb-4">
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
        <span className="ml-4">{rows.length} matches</span>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        className="bg-white"
      />
    </Box>
  );
};

export default PaidBillsTab;
