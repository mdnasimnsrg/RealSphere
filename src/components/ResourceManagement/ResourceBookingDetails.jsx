import React, { useState } from "react";
import { ChevronDown, CheckCircle, ClipboardList, Send, Clock } from "lucide-react";
import { FiUser, FiX } from "react-icons/fi";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, TextField, Select, MenuItem, ToggleButton, ToggleButtonGroup, InputAdornment } from "@mui/material";
import { CalendarMonth, AccessTime, AttachMoney, Search } from "@mui/icons-material";

const ResourceBookingDetails = () => {
    const handleBack = () => {
        window.history.back();
    };
    const [showFilter, setShowFilter] = useState(false);

    const [scheduling, setScheduling] = useState("Flexible");
    const [resource, setResource] = useState("Technicians");

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const [isOpen1, setIsOpen1] = useState(false);
    const toggleModal1 = () => setIsOpen1(!isOpen1);

    const timelineData = [
        {
          status: "Inspection Completed",
          notes: "Notes : OK",
          date: "09-01-2025 06:44 PM",
          user: "Farooq Abdullah",
          icon: <CheckCircle className="w-5 h-5 text-white" />, // Check icon
          bgColor: "bg-blue-600",
        },
        {
          status: "Inspector Assigned",
          notes: "",
          date: "09-01-2025 06:38 PM",
          user: "Farooq Abdullah",
          icon: <Clock className="w-5 h-5 text-white" />, // Clock icon
          bgColor: "bg-blue-600",
        },
    ];

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <h1 className="text-xl font-semibold">
                <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                aria-label="Go back"
                >
                <ArrowBackIosIcon />
                </button>
                <span>Resource Booking</span>
            </h1>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
            </div>
        </div>

        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Top Info Section */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="">
                    <div className="bg-white shadow-md rounded-md p-4 flex flex-col">
                        <span className="text-gray-500">Inspection Order</span>
                        <span className="font-semibold">IMO250109-2014</span>
                        <span className="text-sm text-gray-400">Farooq Abdullah | 09 Jan 2025</span>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-md rounded-md p-4 flex flex-col">
                        <span className="text-gray-500">Property And Unit Details</span>
                        <span className="font-semibold">Serenity Towers</span>
                        <span className="text-sm text-gray-400">UNIT25-1185 , Unit -1 (Lease)</span>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-md rounded-md p-4 flex flex-col">
                        <span className="text-gray-500">Resource Details</span>
                        <span className="font-semibold">Nirav</span>
                        <span className="text-sm text-gray-400">+91 987654321</span>
                        <button onClick={() => setShowFilter(true)} variant="link" className="text-blue-600">RE ASSIGN</button>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-md rounded-md p-4 flex flex-col">
                        <span className="text-gray-500">Assigned Date</span>
                        <span className="text-sm text-gray-400">Start Date : 09-01-2025</span>
                    </div>
                </div>
            </div>

            {/* Gate Pass Section */}
            <div className="mb-6 w-[400px]">
                <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <ClipboardList className="text-purple-600" />
                        <div>
                        <span className="font-semibold">Truck Gate-Pass</span>
                        <p className="text-sm text-gray-400">Last Link sent on 09 Jan 25</p>
                        </div>
                    </div>
                    <button onClick={toggleModal} className="bg-blue-500 text-white flex items-center">
                        <Send size={16} className="mr-2" /> Send Link
                    </button>
                </div>
            </div>

            {/* Inspection Details */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-semibold">Inspection Details</h2>
                    <button onClick={toggleModal1} variant="link" className="text-blue-600">View Tracker</button>
                </div>
                
                {/* Table */}
                <div className="mt-4">
                    {["Unit -1 (Lease)", "AC", "TV"].map((item, index) => (
                        <div key={index} className="border rounded-lg mb-2 p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img src="/placeholder.jpg" alt="item" className="w-12 h-12 rounded" />
                            <div>
                            <p className="font-semibold">{item}</p>
                            <p className="text-sm text-gray-400">{index === 0 ? "UNIT25-1185" : index === 1 ? "Samsung" : "Sony"}</p>
                            </div>
                        </div>
                        <CheckCircle className="text-green-500" size={24} />
                        <ChevronDown className="text-gray-400" size={24} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        {showFilter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    showFilter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShowFilter(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Filter</h2>
                    <hr className="border-gray-300 mb-4" />
                    <div className="">
                        <div className="flex justify-between items-center mb-4">
                        <span className="text-blue-500 font-semibold">Inspection Request</span>
                        <Select value="Business Development" className="bg-white">
                            <MenuItem value="Business Development">Business Development</MenuItem>
                        </Select>
                        </div>

                        <div className="mb-4">
                        <h4 className="font-medium mb-2">Step 1</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <TextField
                            label="Start Date & Time"
                            InputProps={{ startAdornment: (<InputAdornment position="start"><CalendarMonth /></InputAdornment>) }}
                            defaultValue="09 Jan 25 19:00 pm"
                            fullWidth
                            />
                            <TextField
                            label="Projected Hours"
                            type="number"
                            InputProps={{ endAdornment: (<InputAdornment position="end">Hr</InputAdornment>) }}
                            defaultValue={1}
                            fullWidth
                            />
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="mr-2">Scheduling</span>
                            <ToggleButtonGroup
                            value={scheduling}
                            exclusive
                            onChange={(e, value) => setScheduling(value || scheduling)}
                            >
                            <ToggleButton value="Flexible">Flexible</ToggleButton>
                            <ToggleButton value="Strict">Strict</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        </div>

                        <div className="mb-4">
                        <h4 className="font-medium mb-2">Step 2</h4>
                        <Select value={resource} onChange={(e) => setResource(e.target.value)} fullWidth>
                            <MenuItem value="Technicians">Technicians</MenuItem>
                        </Select>
                        <TextField
                            placeholder="Search"
                            InputProps={{ startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>) }}
                            fullWidth
                            className="mt-2"
                        />
                        <div className="flex items-center justify-between mt-4 p-3 border rounded-lg bg-gray-50">
                            <div className="flex items-center">
                            <span className="mr-2">👨‍💼</span>
                            <div>
                                <p className="font-medium">Nirav</p>
                                <p className="text-sm text-gray-500">Inspector</p>
                            </div>
                            </div>
                            <div>
                            <p className="text-sm flex items-center"><AccessTime className="mr-1" />1 hr</p>
                            <p className="text-sm flex items-center"><AttachMoney className="mr-1" />50 ₹</p>
                            </div>
                        </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                        <p className="flex items-center text-sm"><AccessTime className="mr-1" />Total hour: 1 Hr</p>
                        <p className="flex items-center text-sm text-green-600"><AttachMoney className="mr-1" />Est Cost: 50 ₹</p>
                        </div>

                        <div className="flex justify-between mt-6">
                        <Button variant="outlined">Close</Button>
                        <Button variant="contained" color="primary">Re-Assign</Button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[480px] rounded-lg shadow-lg p-2 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Approved</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="rounded-lg shadow-md p-4 bg-white">
                        <div className="flex flex-col items-center text-center p-4 border-b">
                            <img src="/qr-code.png" alt="QR Code" className="w-24 h-24" />
                            <p className="text-lg font-semibold mt-2">yneaqq</p>
                            <p className="text-sm text-gray-500">Valid Till 19 Jan 25, 06:44</p>
                            <div className="flex items-center mt-2">
                            <CheckCircle className="text-green-500 w-4 h-4" />
                            <span className="ml-2 text-green-600 text-sm font-medium">Approved</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-700 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p className="text-gray-500">Reference Id</p>
                                <p className="font-medium">SR-1270</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Allotted Slot</p>
                                <p className="font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Property Name</p>
                                <p className="font-medium">Serenity Towers</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Unit</p>
                                <p className="font-medium">Unit -1 (Lease), UNIT25-1185</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Vehicle Type</p>
                                <p className="font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Vehicle Number</p>
                                <p className="font-medium">-</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Gate Entry</p>
                                <p className="font-medium">Any</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Requested By</p>
                                <p className="font-medium">Farooq Abdullah</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-gray-500">Visit Start & End Date</p>
                                <p className="font-medium">09 Jan 25, 06:44 - 19 Jan 25, 06:44</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {isOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[480px] rounded-lg shadow-lg p-2 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Track Update</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal1}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />
                    <div className="max-w-md mx-auto space-y-4">
                        {timelineData.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${item.bgColor}`}>
                                {item.icon}
                                </div>
                                {index !== timelineData.length - 1 && <div className="w-0.5 h-6 bg-blue-300" />}
                            </div>
                            <div>
                                <p className="font-semibold">{item.status}</p>
                                {item.notes && <p className="text-sm text-gray-600">{item.notes}</p>}
                                <p className="text-xs text-gray-500">{item.date} | {item.user}</p>
                            </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default ResourceBookingDetails;
