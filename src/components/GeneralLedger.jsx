import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from "dayjs";

const GeneralLedger = () => {
  const [property, setProperty] = useState("Properties only");
  const [unit, setUnit] = useState("All");
  const [account, setAccount] = useState("Account 1");
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());
  const [basis, setBasis] = useState("cash");
  const [includeFundType, setIncludeFundType] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="p-6">
        <div className="md:flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">General Ledger</h2>
          <Box className="flex gap-4">
            <Button variant="outlined">Record general journal entry</Button>
            <Button variant="outlined">View locked periods</Button>
          </Box>
        </div>

        <div className="p-6 shadow-md bg-white rounded-md">
          <Box className="flex flex-wrap gap-4 items-center">
            <TextField
              label="Property or Company"
              select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="Properties only">Properties only</MenuItem>
              <MenuItem value="Companies only">Companies only</MenuItem>
            </TextField>

            <TextField
              label="Unit"
              select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="All">All (2)</MenuItem>
            </TextField>

            <TextField
              label="Accounts"
              select
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="">Select...</MenuItem>
              <MenuItem value="Account 1">Account 1</MenuItem>
              <MenuItem value="Account 2">Account 2</MenuItem>
            </TextField>

            <TextField
              label="Date Range"
              select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="md:w-48 w-full"
            >
              <MenuItem value="Last 30 days">Last 30 days</MenuItem>
              <MenuItem value="This Month">This Month</MenuItem>
              <MenuItem value="Custom">Custom</MenuItem>
            </TextField>

            <DatePicker
              label="From"
              value={fromDate}
              onChange={(date) => setFromDate(date)}
              className="md:w-48 w-full"
            />

            <DatePicker
              label="To"
              value={toDate}
              onChange={(date) => setToDate(date)}
              className="md:w-48 w-full"
            />

            <Button variant="contained" color="success">
              Search
            </Button>
          </Box>

          <Box className="mt-4 flex items-center gap-8">
            <FormControl>
              <FormLabel>Accounting Basis</FormLabel>
              <RadioGroup
                row
                value={basis}
                onChange={(e) => setBasis(e.target.value)}
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Cash"
                />
                <FormControlLabel
                  value="accrual"
                  control={<Radio />}
                  label="Accrual"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Include</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeFundType}
                    onChange={(e) => setIncludeFundType(e.target.checked)}
                  />
                }
                label="Fund Type"
              />
            </FormControl>
          </Box>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default GeneralLedger;
