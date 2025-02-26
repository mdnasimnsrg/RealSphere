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
const LoginActivityReport = () => {
  const [filterColumnPopupOpen, setFilterColumnPopupOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRelationships, setSelectedRelationships] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const relationships = [
    "Tanant",
    "REsident",
    "Other",
    "Prospect",
    "Service Provider",
    "Employee",
    "Customer",
    "Sales Broker",
    "Vendor Employee",
    "Property Owener",
    "Vendor",
  ];
  const loginActivityReportData = [
    {
      UserId: "6EZ696LLN",
      "Contact Name": "Al-Mubarakah",
      Email: "aed.owner01@propgoto.com",
      "Mobile Number": "+971 862485745",
      Roles: "-",
      "Last Logged In": "2025-Feb-23 03:04 pm",
      Department: "-",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "VEV8WNPMJ",
      "Contact Name": "FMS Inspector 02",
      Email: "fms.inspector02@propgoto.com",
      "Mobile Number": "+966 765432145",
      Roles: "-",
      "Last Logged In": "2024-Mar-08 03:33 pm",
      Department: "Generic Department",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "QEB6RCDVO",
      "Contact Name": "Manpreet",
      Email: "manpreet@mailinator.com",
      "Mobile Number": "+91 9578423456",
      Roles: "-",
      "Last Logged In": "2024-Oct-16 09:58 am",
      Department: "-",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "2KGULMFG2",
      "Contact Name": "Duplicate contact check",
      Email: "duplicatecheck@mailinator.com",
      "Mobile Number": "+966 2131",
      Roles: "-",
      "Last Logged In": "2023-Sep-01 05:37 pm",
      Department: "-",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "KMO81JI3T",
      "Contact Name": "FMS Inspector 01",
      Email: "fms.inspector01@propgoto.com",
      "Mobile Number": "+966 765432355",
      Roles: "-",
      "Last Logged In": "2024-Apr-25 12:24 pm",
      Department: "Generic Department",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "QXQRYK7DW",
      "Contact Name": "Pranav",
      Email: "r.pranav@propgoto.com",
      "Mobile Number": "+966 8765432",
      Roles:
        "Property Management, Community & HOA Management, Visitor & Parking Management...",
      "Last Logged In": "2024-Nov-08 03:51 pm",
      Department: "Generic Department",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "LP4V84L5E",
      "Contact Name": "Gopika",
      Email: "gopika@propgoto.com",
      "Mobile Number": "+966 564646656",
      Roles:
        "Lease & Sales Management, Property Management, Visitor & Parking Management...",
      "Last Logged In": "2024-Apr-26 11:28 am",
      Department: "Sales Department",
      "Reporting To": "-",
      Status: "Inactive",
    },
    {
      UserId: "6RB7VXQW8",
      "Contact Name": "Demo Mr. Client Manager",
      Email: "demo.superuser@propgoto.com",
      "Mobile Number": "+91 6543564562",
      Roles:
        "Property Management, Visitor & Parking Management, Community & HOA Management...",
      "Last Logged In": "2024-Feb-01 04:59 pm",
      Department: "Generic Department",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "H96RESO44",
      "Contact Name": "Demo Mr. Security Guard",
      Email: "demo.guard@propgoto.com",
      "Mobile Number": "+966 756564545",
      Roles: "Lease & Sales Management",
      "Last Logged In": "2024-Dec-20 05:25 pm",
      Department: "Generic Department",
      "Reporting To": "-",
      Status: "Active",
    },
    {
      UserId: "FTO3A0G8B",
      "Contact Name": "Duplicate contact - check",
      Email: "dupdup@mailinator.com",
      "Mobile Number": "+966 23",
      Roles: "-",
      "Last Logged In": "2023-Sep-01 05:41 pm",
      Department: "-",
      "Reporting To": "-",
      Status: "Active",
    },
  ];
  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Login Activity Report</div>
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
                {loginActivityReportData.slice(0, 1).map((data, index) => (
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
              {loginActivityReportData.map((data, index) => (
                  <TableRow key={data.UserId + index}>
                    {Object.keys(data).map((key, keyIndex) => (
                      <TableCell key={key + keyIndex} className="text-nowrap">
                        <p className={data[key] === "Active" ? "text-green-500" :data[key] === "Inactive" ? "text-red-500" :""}>{data[key]}</p>
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
        children={<div className="min-h-80 flex flex-col justify-between">
            <div className="flex items-center justify-between border bg-transparent p-2 gap-2 ">
                <input type="search" name="search" placeholder="Search Columns" className="outline-none w-full"/>
                <div className="flex items-center gap-2">

                <div className="h-4 w-[1px] bg-gray-200"></div>
                <FiChevronDown/>
                </div>
            </div>
            <div className="flex justify-between gap-4">
              <Button disabled variant="contained" className="w-full">Clear All</Button>
              <Button disabled variant="contained" className="w-full">Apply</Button>
            </div>
        </div>}
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
                    setSelectedStatuses([]);
                    setSelectedRelationships([]);
                  }}
                >
                  Clear
                </Button>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-600"
                  >
                    Relationship
                  </label>
                  <Select
                    onChange={(e) => {
                      setSelectedRelationships((prev) =>
                        prev.includes(e.target.value)
                          ? prev.filter((item) => item !== e.target.value)
                          : [...prev, e.target.value]
                      );
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
                    {relationships.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <div className="flex gap-3 flex-wrap">
                    {selectedRelationships.map((relationship) => {
                      return (
                        <Chip
                          key={relationship}
                          label={relationship}
                          className="w-fit "
                          color="primary"
                          onDelete={() =>
                            setSelectedRelationships((prev) =>
                              prev.filter((item) => item !== relationship)
                            )
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
                    Status
                  </label>
                  <ButtonGroup sx={{ gap: 0.5 }}>
                    <Button
                      onClick={() => {
                        setSelectedStatuses((pre) =>
                          pre.includes("active")
                            ? pre.filter((value) => value !== "active")
                            : [...pre, "active"]
                        );
                      }}
                      variant={
                        selectedStatuses.includes("active")
                          ? "contained"
                          : "outlined"
                      }
                    >
                      Active
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedStatuses((pre) =>
                          pre.includes("in-active")
                            ? pre.filter((value) => value !== "in-active")
                            : [...pre, "in-active"]
                        );
                      }}
                      variant={
                        selectedStatuses.includes("in-active")
                          ? "contained"
                          : "outlined"
                      }
                    >
                      In-Active
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

export default LoginActivityReport;
