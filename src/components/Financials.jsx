import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";

const FinancialsSection = () => {
  const [selectedUnit, setSelectedUnit] = useState("All");
  const [basis, setBasis] = useState("cash");
  const [period, setPeriod] = useState("Three months to date");
  const [unitOptions, setUnitOptions] = useState([
    { label: "Property/Association/Company Level", checked: true },
    { label: "All Units", checked: true },
  ]);

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedOptions = [...unitOptions];
    updatedOptions[index].checked = !updatedOptions[index].checked;
    setUnitOptions(updatedOptions);
  };

  return (
    <Box className="p-6">
      <h2 className="text-lg font-semibold mb-4">Financials</h2>
      <div className="p-6 shadow-md bg-white rounded-md">
        <Box className="flex flex-wrap gap-4 items-center">

            <TextField
            label="Property or Company"
            select
            value="All"
            className="w-48"
            >
                <MenuItem value="All">All</MenuItem>
            </TextField>

            <TextField
            label="Unit"
            select
            value={selectedUnit}
            onChange={handleUnitChange}
            className="w-48"
            >
                <MenuItem value="All">
                    All ({unitOptions.filter((opt) => opt.checked).length})
                </MenuItem>
                <MenuItem value="Custom">
                    {unitOptions.map((option, index) => (
                    <Box key={index} className="flex items-center">
                        <Checkbox
                        checked={option.checked}
                        onChange={() => handleCheckboxChange(index)}
                        />
                        {option.label}
                    </Box>
                    ))}
                </MenuItem>
            </TextField>

            <TextField
            label="Period"
            select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-64"
            >
                <MenuItem value="Three months to date">Three months to date</MenuItem>
                <MenuItem value="Year to date">Year to date</MenuItem>
                <MenuItem value="Custom">Custom</MenuItem>
            </TextField>

            <Button variant="contained" color="success">Search</Button>
        </Box>

        <Box className="mt-4">
            <FormControl>
                <FormLabel>Basis</FormLabel>
                <RadioGroup
                    row
                    value={basis}
                    onChange={(e) => setBasis(e.target.value)}
                >
                    <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Cash basis"
                    />
                    <FormControlLabel
                    value="accrual"
                    control={<Radio />}
                    label="Accrual basis"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
      </div>
    </Box>
  );
};

export default FinancialsSection;
