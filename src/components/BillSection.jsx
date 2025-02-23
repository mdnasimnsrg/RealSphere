import React, { useState } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
  MenuItem,
  IconButton,
  TextField,
  Checkbox,
  Autocomplete,
  ListItemText,
  Chip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PaidBillTab from "./PaidBillTab";
import OwnerContributionsTab from "./OwnerContributionsTab";
import InvoiceFilesTab from "./InvoiceFilesTab";

const BillsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [property, setProperty] = useState("All");
  const [vendor, setVendor] = useState("Vendor");
  const [status, setStatus] = useState("(4) Overdue, Due, Partially Paid");

  const [selectedUnits, setSelectedUnits] = useState(["All"]);

  const unitsOptions = [
    { label: "All (2)", value: "all" },
    { label: "Property/Association/Company Level", value: "property" },
    { label: "All Units", value: "allUnits" },
  ];

  const handleUnitChange = (event, newValue) => {
    setSelectedUnits(newValue);
  };

  const columns = [
    { field: "dueDate", headerName: "DUE DATE", flex: 1 },
    {
      field: "status",
      headerName: "",
      renderCell: (params) => (
        <Chip label="PAID" color="success" size="small" />
      ),
      sortable: false,
    },
    { field: "vendor", headerName: "VENDORS", flex: 2 },
    { field: "memo", headerName: "MEMO", flex: 3 },
    { field: "refNo", headerName: "REF NO.", flex: 1 },
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
      dueDate: "1/14/2025",
      vendor: "Henry Insurance Group",
      memo: "Annual property insurance",
      refNo: "33507",
      amount: "SAR 1,200.00",
    },
    {
      id: 2,
      dueDate: "12/15/2024",
      vendor: "Morris & Hayes, LLC",
      memo: "Eviction fees / consult",
      refNo: "DC-7771",
      amount: "SAR 500.00",
    },
    // Add more rows as needed
  ];

  return (
    <Box className="p-4 shadow-md bg-white rounded-md">
      {(tabIndex === 0 || tabIndex === 1 || tabIndex === 3) && (
        <h2 className="text-2xl font-semibold mb-4">Bills</h2>
      )}
      {tabIndex === 2 && (
        <Box>
          <h2 className="text-2xl font-semibold mb-4">Owner contributions</h2>
          <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
            <Button variant="contained" color="success">
              Request owner contribution
            </Button>
            <Button variant="outlined">Contribution settings</Button>
          </div>
        </Box>
      )}
      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={(e, newIndex) => setTabIndex(newIndex)}
        className="mb-4"
        variant="scrollable"
      >
        <Tab label="Unpaid bills" />
        <Tab label="Paid bills" />
        <Tab label="Owner contributions" />
        <Tab label="Invoice Files (0)" />
      </Tabs>

      {tabIndex === 0 && (
        <Box className="">
          <div className="flex gap-4 mb-4 mr-auto flex-wrap justify-center md:justify-start">
            <Button variant="contained" color="success">
              Record bill
            </Button>
            <Button variant="outlined">Pay bills</Button>
            <Button variant="outlined">Request owner contribution</Button>
          </div>

          {/* Filters and Actions */}
          <Box className="flex flex-wrap items-center gap-4 mb-4">
            {/* Dropdown Filters */}
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
              label="Vendors"
              select
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="">Select...</MenuItem>
            </TextField>

            <TextField
              label="Status"
              select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="(4) Overdue, Due, Partially Paid">
                (4) Overdue, Due, Partially Paid
              </MenuItem>
            </TextField>
          </Box>

          {/* Data Table */}
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            disableSelectionOnClick
            className="bg-white"
          />
        </Box>
      )}

      {tabIndex === 1 && <PaidBillTab />}
      {tabIndex === 2 && <OwnerContributionsTab />}
      {tabIndex === 3 && <InvoiceFilesTab />}
    </Box>
  );
};

export default BillsSection;
