import React, { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { FaEye, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";
import {
  Button,
  Chip,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Download, Filter, SearchIcon } from "lucide-react";
import CustomModal from "../../CustomModal";
const UnitOccupancyReport = () => {
  const [filterColumnPopupOpen, setFilterColumnPopupOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    properties: [],
    unitTypes: [],
    unitCategory: [],
  });

  const unitData = [
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-544",
      "Unit Name": "Miller Lease 1",
      Purpose: "Residential",
      "Revenue Type": "Lease",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Occupied",
      "Agreement ID": "AGR240304-159",
      "Lease Start Date": "04 Mar 2024",
      "Lease End Date": "03 Mar 2025",
      "Account Name": "lizzie.tenant",
      "Primary Contact": "lizzie",
      Email: "lizzie@mailinator.com",
      "Contact Number": "+91987465252",
      "Last Logged in": "2024-Mar-04 06:48 pm",
      "Available From": "04 Mar 2024",
      "Available To": "03 Mar 2025",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-544",
      "Unit Name": "Miller Lease 1",
      Purpose: "Residential",
      "Revenue Type": "Lease",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "04 Mar 1972",
      "Available To": "03 Mar 2024",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-544",
      "Unit Name": "Miller Lease 1",
      Purpose: "Residential",
      "Revenue Type": "Lease",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "04 Mar 2025",
      "Available To": "31 Dec 2999",
    },
    {
      "Property ID": "PROP24-297",
      "Property Name": "Business Center",
      "Unit ID": "UNIT24-1007",
      "Unit Name": "Floor1",
      Purpose: "Commercial",
      "Revenue Type": "Lease",
      "Unit Category": "Commercial",
      "Unit Type": "1 BHK",
      Rooms: "-",
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "02 Nov 1972",
      "Available To": "31 Dec 2999",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-548",
      "Unit Name": "Miller Manage 1",
      Purpose: "Residential",
      "Revenue Type": "Manage",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Occupied",
      "Agreement ID": "AGR240304-160",
      "Lease Start Date": "04 Mar 2024",
      "Lease End Date": "03 Mar 2025",
      "Account Name": "Naruto tenant",
      "Primary Contact": "Naruto",
      Email: "naruto@yopmail.com",
      "Contact Number": "+91987654321",
      "Last Logged in": "-",
      "Available From": "04 Mar 2024",
      "Available To": "03 Mar 2025",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-548",
      "Unit Name": "Miller Manage 1",
      Purpose: "Residential",
      "Revenue Type": "Manage",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "04 Mar 1972",
      "Available To": "03 Mar 2024",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      "Unit ID": "UNIT24-548",
      "Unit Name": "Miller Manage 1",
      Purpose: "Residential",
      "Revenue Type": "Manage",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "04 Mar 2025",
      "Available To": "31 Dec 2999",
    },
    {
      "Property ID": "01-01-0016",
      "Property Name": "Mohanadiah",
      "Unit ID": "101010163",
      "Unit Name": "103 - 3",
      Purpose: "Residential",
      "Revenue Type": "Sale",
      "Unit Category": "Residential",
      "Unit Type": "Najd - Villa",
      Rooms: 5,
      Furnishing: "Furnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
      "Last Logged in": "-",
      "Available From": "22 Apr 1972",
      "Available To": "22 Apr 2999",
    },
    {
      "Property ID": "PROP23-111",
      "Property Name": "Leo Apartments",
      "Unit ID": "UNIT23-367",
      "Unit Name": "Apartment-1",
      Purpose: "Residential",
      "Revenue Type": "Lease",
      "Unit Category": "Residential",
      "Unit Type": "1 BHK",
      Rooms: 1,
      Furnishing: "Unfurnished",
      Occupant: "Vacant",
      "Agreement ID": "-",
      "Lease Start Date": "-",
      "Lease End Date": "-",
      "Account Name": "-",
      "Primary Contact": "-",
      Email: "-",
      "Contact Number": "-",
       "Last Logged in": "-",
      "Available From": "22 Apr 1972",
      "Available To": "22 Apr 2999",
    },
  ];
  const filterFields = [
    {
      label: "Properties",
      options: ["Bluewater", "BlackSky", "Zenith zen", "LA torre"],
    },
    {
      label: "Unit Types",
      options: [
        "Room",
        "3 BHK",
        "Apartment",
        "5+ BHK",
        "Adervertisement Space",
      ],
    },
    {
      label: "Unit Category",
      options: ["Land", "Residentials", "Commercial", "Plot", "Storage"],
    },
  ];
  const toCamelCaseFromLabel = (label) => {
    if (!label) return "";
    return label
      .toLowerCase()
      .replace(/ (\w)/g, (_, letter) => letter.toUpperCase());
  };

  const handleFilterChange = (fieldLabel, value) => {
    const camelCaseLabel = toCamelCaseFromLabel(fieldLabel);
    setFilters((prev) => {
      const currentValues = prev[camelCaseLabel];
      const isValueIncluded = currentValues.includes(value);

      return {
        ...prev,
        [camelCaseLabel]: isValueIncluded
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Unit Occupancy Report</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <CustomSelect
            options={["Business Development"]}
            icon={<FaUserCircle />}
          />
        </div>
      </div>
      <div className="md:p-4">
        <div className="bg-white p-2 md:p-4 shadow">
          <div className="flex items-center justify-between">
            <Button
              endIcon={<FaEye />}
              color="inherit"
              variant="outlined"
              onClick={setFilterColumnPopupOpen}
            >
              Filter columns
            </Button>
            <div className="flex items-center gap-3">
              <button className="h-10 w-10 border rounded flex justify-center items-center">
                <Download className="text-gray-600" />
              </button>
              <button
                onClick={setShowFilter}
                className="h-10 w-10 border rounded flex justify-center items-center"
              >
                <Filter className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto sc-fkSzgi my-4">
            <Table>
              <TableHead className="bg-gray-100">
                {unitData.slice(0, 1).map((data, index) => (
                  <TableRow key={data.UserId + index}>
                    {Object.keys(data).map((key, keyIndex) => (
                      <TableCell key={key + keyIndex} className="text-nowrap">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {unitData.map((data, index) => (
                  <TableRow
                    key={data.UserId + index}
                    className="hover:bg-blue-500/10"
                  >
                    {Object.keys(data).map((key, keyIndex) => (
                      <TableCell key={key + keyIndex} className="text-nowrap">
                        <p className="capitalize">{data[key]}</p>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={filterColumnPopupOpen}
        onClose={() => setFilterColumnPopupOpen(false)}
        size="md"
        title={"Choose Column To Dispalay"}
        children={
          <div className="min-h-80 flex flex-col justify-between">
            <div className="flex items-center justify-between border bg-transparent p-2 gap-2 ">
              <input
                type="search"
                name="search"
                placeholder="Search Columns"
                className="outline-none w-full"
              />
              <div className="flex items-center gap-2">
                <div className="h-4 w-[1px] bg-gray-200"></div>
                <FiChevronDown />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <Button disabled variant="contained" className="w-full">
                Clear All
              </Button>
              <Button disabled variant="contained" className="w-full">
                Apply
              </Button>
            </div>
          </div>
        }
      />
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 flex flex-col justify-between ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <button
                    className="text-gray-600 hover:text-black"
                    onClick={() => setShowFilter(false)}
                  >
                    <FiX size={20} />
                  </button>
                  <h2 className="text-xl font-semibold">Filter</h2>
                </div>
                <Button
                  onClick={() => {
                    setFilters({
                      properties: [],
                      unitTypes: [],
                      unitCategory: [],
                    });
                  }}
                >
                  Clear
                </Button>
              </div>
              <div className="space-y-3">
                {filterFields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-600"
                    >
                      {field.label}
                    </label>
                    <Select
                      onChange={(e) =>
                        handleFilterChange(field.label, e.target.value)
                      }
                      input={
                        <OutlinedInput
                          startAdornment={
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          }
                        />
                      }
                    >
                      {field.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                    <div className="flex gap-3 flex-wrap">
                      {(filters[toCamelCaseFromLabel(field.label)] || []).map(
                        (item) => (
                          <Chip
                            key={item}
                            label={item}
                            className="w-fit "
                            color="primary"
                            onDelete={() =>
                              handleFilterChange(field.label, item)
                            }
                          />
                        )
                      )}
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <Button variant="contained" className="w-full" size="large">
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitOccupancyReport;
