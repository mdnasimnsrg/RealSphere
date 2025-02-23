import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FiSearch } from "react-icons/fi";
import { TextField, MenuItem, Select, IconButton, Button } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const CheckListGroupItemView = () => {
    const handleBack = () => {
        window.history.back();
    };

    const [searchTerm, setSearchTerm] = useState("");

    const [conditions, setConditions] = useState([
        { name: "No Damage", color: "green" },
        { name: "Slight Damage", color: "orange" },
        { name: "Damaged", color: "red" },
        { name: "Moderate Damage", color: "yellow" },
    ]);
    
    const handleAddCondition = () => {
        setConditions([...conditions, { name: "", color: "green" }]);
    };
    
    const handleDeleteCondition = (index) => {
        setConditions(conditions.filter((_, i) => i !== index));
    };
    
    const handleConditionChange = (index, field, value) => {
        const updatedConditions = [...conditions];
        updatedConditions[index][field] = value;
        setConditions(updatedConditions);
    };

  return (
    <div>

        <div className="bg-white flex justify-between items-center mb-4 p-2">
          <h1 className="text-xl font-semibold">
            <button
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              aria-label="Go back"
            >
              <ArrowBackIosIcon />
            </button>
            <span>Do you see any damage or wear?</span>
          </h1>
        </div>

        <div className="p-2">
            <div className="p-2"> 
                <div className="md:flex md:space-x-1">
                    {/* Left Side (Details) */}
                    <div className="md:w-1/4 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">Details</h2>
                        <div className="mb-4">
                        <p className="font-semibold">Check List Name</p>
                        <p>Do you see any damage or wear?</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Check List Group Name</p>
                        <p>Check list for Security Appliances</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Item Type</p>
                        <p>Inspection</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Item Category</p>
                        <p>Do you see any damage or wear?</p>
                        </div>
                        <div className="mb-4">
                        <p className="font-semibold">Status</p>
                        <p className="text-green-500">Active</p>
                        </div>
                        <div>
                        <p className="font-semibold">Url</p>
                        <p>https://youtu.be/885B2-3qeIc?si=dk58gtjQwem7F</p>
                        </div>
                        <div>
                        <p className="font-semibold">Instructions</p>
                        <p>Check list for Security Appliances</p>
                        </div>
                    </div>
                    
                    {/* Right Side (Checklist) */}
                    <div className="md:w-3/4 bg-white rounded-lg shadow-md p-4">
                        <div className="">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex w-full md:w-auto gap-2 flex-1">
                                    <div className="flex w-auto">
                                    <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                                        <FiSearch className="text-gray-600" />
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Save
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 border-b pb-2 font-semibold">
                                <div>Condition Name</div>
                                <div>Color</div>
                            </div>
                            {conditions.map((condition, index) => (
                                <div key={index} className="grid grid-cols-3 gap-4 items-center mt-2">
                                <TextField
                                    fullWidth
                                    value={condition.name}
                                    onChange={(e) => handleConditionChange(index, "name", e.target.value)}
                                    placeholder="Enter Condition Name"
                                    variant="outlined"
                                />
                                <Select
                                    fullWidth
                                    value={condition.color}
                                    onChange={(e) => handleConditionChange(index, "color", e.target.value)}
                                    className={`bg-${condition.color}-500 text-white rounded`}
                                >
                                    <MenuItem value="green" className="bg-green-500 text-white">Green</MenuItem>
                                    <MenuItem value="orange" className="bg-orange-500 text-white">Orange</MenuItem>
                                    <MenuItem value="yellow" className="bg-yellow-500 text-white">Yellow</MenuItem>
                                    <MenuItem value="red" className="bg-red-500 text-white">Red</MenuItem>
                                </Select>
                                <IconButton onClick={() => handleDeleteCondition(index)}>
                                    <DeleteIcon className="text-red-500" />
                                </IconButton>
                                </div>
                            ))}
                            <Button onClick={handleAddCondition} className="mt-4 text-blue-500">
                                Add New Condition +
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default CheckListGroupItemView;
