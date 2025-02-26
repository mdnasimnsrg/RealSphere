import React, { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { FaEye, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";
import {
  Button,
  ButtonGroup,
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
const PropertyOverviewReport = () => {
  const [filterColumnPopupOpen, setFilterColumnPopupOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    properties: [],
    propertyType: [],
    PropertyHierarchy: [],
    community: "",
  });
  const propertiesOptions = ["Bluewater", "BlackSky", "Zenith zen", "LA torre"];
  const propertyTypeOptions = [
    "Room",
    "3 BHK",
    "Apartment",
    "5+ BHK",
    "Adervertisement Space",
  ];
  const propertyHierarchyOptions = [
    "Single Unit",
    "Blockwise Multiunit",
    "Floorwise multiunit",
    "Custom Level 1",
    "Custom Level 2",
  ];
  const propertyData = [
    {
      "Property ID": "PROP24-222",
      "Property Name": "Retal Real Estate",
      Location: "حي الملقا,Riyadh ,Saudi Arabia",
      Purpose: "Residential",
      Hierarchy: "Multiunit",
      "Build Date": "01 Apr 2024",
      "Property Type": "Apartment",
      "Total Units": 1,
      "Vacant Units": 0,
      "Occupied Units": 1,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 1,
      "Property Size": "102 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 0,
      Community: "true",
    },
    {
      "Property ID": "PROP23-109",
      "Property Name": "Bluewater",
      Location: "Al Barsha South,Dubai,United Arab Emirates",
      Purpose: "Residential",
      Hierarchy: "Multiunit",
      "Build Date": "01 Nov 2023",
      "Property Type": "Apartment",
      "Total Units": 6,
      "Vacant Units": 5,
      "Occupied Units": 1,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 6,
      "Property Size": "100 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 0,
      Community: "true",
    },
    {
      "Property ID": "PROP23-111",
      "Property Name": "Leo Apartments",
      Location: "Little Mount,Chennai,India",
      Purpose: "Residential",
      Hierarchy: "Floorwise Multiunit",
      "Build Date": "02 Nov 2023",
      "Property Type": "Apartment",
      "Total Units": 8,
      "Vacant Units": 6,
      "Occupied Units": 2,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 8,
      "Property Size": "100 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 1,
      Community: "true",
    },
    {
      "Property ID": "PROP23-116",
      "Property Name": "RAINBOW",
      Location: "AVADI,600054,India",
      Purpose: "Residential",
      Hierarchy: "Blockwise Multiunit",
      "Build Date": "01 Jun 2023",
      "Property Type": "Apartment",
      "Total Units": 22,
      "Vacant Units": 22,
      "Occupied Units": 0,
      "Planned Units": 17,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 5,
      "Property Size": "10800 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 4,
      Community: "true",
    },
    {
      "Property ID": "PROP23-112",
      "Property Name": "Zenith zen",
      Location: "VGP Layout,Kancheepuram,India",
      Purpose: "Residential",
      Hierarchy: "Blockwise Multiunit",
      "Build Date": "17 Nov 2020",
      "Property Type": "Apartment",
      "Total Units": 1,
      "Vacant Units": 1,
      "Occupied Units": 0,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 1,
      "Property Size": "800 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 0,
      Community: "true",
    },
    {
      "Property ID": "PROP23-113",
      "Property Name": "banyan",
      Location: "pallavaram,chennai,India",
      Purpose: "Residential",
      Hierarchy: "Blockwise Multiunit",
      "Build Date": "01 Jun 2023",
      "Property Type": "Apartment",
      "Total Units": 5,
      "Vacant Units": 4,
      "Occupied Units": 1,
      "Planned Units": 1,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 4,
      "Property Size": "1500 Sq. Meter",
      "Swimming Pool": 2,
      Elevators: 5,
      "Parking Slots": 0,
      Community: "true",
    },
    {
      "Property ID": "PROP23-110",
      "Property Name": "BlackSky",
      Location: "Shastri Nagar,Chennai,India",
      Purpose: "Residential",
      Hierarchy: "Blockwise Multiunit",
      "Build Date": "01 Oct 2024",
      "Property Type": "Apartment",
      "Total Units": 7,
      "Vacant Units": 7,
      "Occupied Units": 0,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 2,
      "Released Units": 5,
      "Property Size": "1700 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 1,
      Community: "true",
    },
    {
      "Property ID": "PROP23-115",
      "Property Name": "Oneness Apartments",
      Location: "Srinagar Colony,Chennai,India",
      Purpose: "Residential",
      Hierarchy: "Blockwise Multiunit",
      "Build Date": "01 Nov 2020",
      "Property Type": "Apartment",
      "Total Units": 9,
      "Vacant Units": 9,
      "Occupied Units": 0,
      "Planned Units": 6,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 3,
      "Property Size": "10000 Sq. Meter",
      "Swimming Pool": 2,
      Elevators: 10,
      "Parking Slots": 12,
      Community: "true",
    },
    {
      "Property ID": "PROP23-128",
      "Property Name": "Ahmed tawer",
      Location: "As Sulimaniyah,Riyadh ,Saudi Arabia",
      Purpose: "Residential",
      Hierarchy: "Multiunit",
      "Build Date": "10 Nov 2022",
      "Property Type": "Apartment",
      "Total Units": 1,
      "Vacant Units": 0,
      "Occupied Units": 1,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 1,
      "Property Size": "1500 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 1,
      "Parking Slots": 0,
      Community: "false",
    },
    {
      "Property ID": "PROP24-170",
      "Property Name": "Miller Apartments",
      Location: "Kapali Thottam,Chennai,India",
      Purpose: "Residential",
      Hierarchy: "Multiunit",
      "Build Date": "04 Mar 2024",
      "Property Type": "Apartment",
      "Total Units": 6,
      "Vacant Units": 3,
      "Occupied Units": 3,
      "Planned Units": 0,
      "Develop Units": 0,
      "Blocked Units": 0,
      "Released Units": 6,
      "Property Size": "100 Sq. Meter",
      "Swimming Pool": 0,
      Elevators: 0,
      "Parking Slots": 0,
      Community: "false",
    },
  ];

  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Property Overview Report</div>
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
                {propertyData.slice(0, 1).map((data, index) => (
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
                {propertyData.map((data, index) => (
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
                      propertyType: [],
                      PropertyHierarchy: [],
                      community: "",
                    });
                  }}
                >
                  Clear
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-600"
                  >
                    Property
                  </label>
                  <Select
                    onChange={(e) => {
                      setFilters((prev) => ({
                        ...prev,
                        properties: prev.properties.includes(e.target.value)
                          ? prev.properties.filter(
                              (item) => item !== e.target.value
                            )
                          : [...prev.properties, e.target.value],
                      }));
                    }}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            {<SearchIcon />}
                          </InputAdornment>
                        }
                      />
                    }
                  >
                    {propertiesOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className="flex gap-3 flex-wrap">
                    {filters.properties.map((property) => {
                      return (
                        <Chip
                          key={property}
                          label={property}
                          className="w-fit "
                          color="primary"
                          onDelete={() =>
                            setFilters((prev) => ({
                              ...prev,
                              properties: prev.properties.filter(
                                (item) => item !== property
                              ),
                            }))
                          }
                        />
                      );
                    })}
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-600"
                  >
                    Property Type
                  </label>
                  <Select
                    onChange={(e) => {
                      setFilters((prev) => ({
                        ...prev,
                        propertyType: prev.propertyType.includes(e.target.value)
                          ? prev.propertyType.filter(
                              (item) => item !== e.target.value
                            )
                          : [...prev.propertyType, e.target.value],
                      }));
                    }}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            {<SearchIcon />}
                          </InputAdornment>
                        }
                      />
                    }
                  >
                    {propertyTypeOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className="flex gap-3 flex-wrap">
                    {filters.propertyType.map((property) => {
                      return (
                        <Chip
                          key={property}
                          label={property}
                          className="w-fit "
                          color="primary"
                          onDelete={() =>
                            setFilters((prev) => ({
                              ...prev,
                              propertyType: prev.propertyType.filter(
                                (item) => item !== property
                              ),
                            }))
                          }
                        />
                      );
                    })}
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-600"
                  >
                    Property Hierarchy
                  </label>
                  <Select
                    onChange={(e) => {
                      setFilters((prev) => ({
                        ...prev,
                        PropertyHierarchy: prev.PropertyHierarchy.includes(e.target.value)
                          ? prev.PropertyHierarchy.filter(
                              (item) => item !== e.target.value
                            )
                          : [...prev.PropertyHierarchy, e.target.value],
                      }));
                    }}
                    input={
                      <OutlinedInput
                        startAdornment={
                          <InputAdornment position="start">
                            {<SearchIcon />}
                          </InputAdornment>
                        }
                      />
                    }
                  >
                    {propertyHierarchyOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className="flex gap-3 flex-wrap">
                    {filters.PropertyHierarchy.map((property) => {
                      return (
                        <Chip
                          key={property}
                          label={property}
                          className="w-fit "
                          color="primary"
                          onDelete={() =>
                            setFilters((prev) => ({
                              ...prev,
                              PropertyHierarchy: prev.PropertyHierarchy.filter(
                                (item) => item !== property
                              ),
                            }))
                          }
                        />
                      );
                    })}
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-600"
                  >
                    Community
                  </label>
                  <ButtonGroup sx={{ gap: 0.5 }}>
                    <Button
                      onClick={() => {
                        setFilters((pre) => ({
                          ...pre,
                          community: pre.community === "yes" ? "" : "yes",
                        }));
                      }}
                      variant={
                        filters.community === "yes" ? "contained" : "outlined"
                      }
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => {
                        setFilters((pre) => ({
                          ...pre,
                          community: pre.community === "no" ? "" : "no",
                        }));
                      }}
                      variant={
                        filters.community === "no" ? "contained" : "outlined"
                      }
                    >
                      No
                    </Button>
                  </ButtonGroup>
                  <hr />
                </div>
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

export default PropertyOverviewReport;
