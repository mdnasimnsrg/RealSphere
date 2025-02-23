import React, { useState } from "react";
import CustomSelect from "../../ui/CustomSelect";
import { FiCalendar, FiUser } from "react-icons/fi";
import CustomSelector from "../../ui/CustomSelector";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa";
import { TbHomeCheck, TbHomeSearch, TbHomeX } from "react-icons/tb";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropertyCard from "./PropertyCard";

const PropertyBoard = () => {
    const [properties, setProperties] = useState([
        { id: 1, name: "Movenpick Jeddah Al Nawras", available: 1, vacant: 1 },
        { id: 2, name: "Atelier La View Center" },
        { id: 3, name: "Serenity Towers", available: 2 },
        { id: 4, name: "Verzon Properties", available: 3, vacant: 2 },
        { id: 5, name: "Commercial", available: 2, vacant: 2 },
        { id: 6, name: "Al Reem Business Center", available: 1, vacant: 1 },
        { id: 7, name: "Falcon Workspace", available: 5, vacant: 3 },
        { id: 8, name: "Saooj Villa" },
    ]);
    const [selectedProperty, setSelectedProperty] = useState(properties[0]);
    const [currentTab, setCurrentTab] = useState("all");
    const propertiesData = [
        {
            id: "PROP25-328",
            title: "Moven Pick Second Floor",
            type: "Commercial Use",
            price: 0,
            status: "Vacant",
            furnishing: "Unfurnished",
            size: 2048,
            category: "Hotel",
            leaseType: "Lease",
            buildDate: "01 Apr 2023",
            location: {
                city: "Jeddah",
                country: "Saudi Arabia",
                area: "Sea",
            },
            executionStatus: "Plan",
            availableUnits: 1,
            nearbyLocations: {
                schools: "Near this Property",
                hospitals: "Near this Property",
                restaurants: "Near this Property",
                parks: "Near this Property",
                transportations: "Near this Property",
            },
        },
    ];
    const filterPropertiesData = propertiesData.filter((property) =>
        currentTab === "all" ? true : property.status.toLowerCase() === currentTab
    );

    const tabs = [
        {
            title: "All Units",
            icon: (
                <div className="h-10 w-10 rounded-full bg-blue-700/10 flex justify-center items-center flex-none">
                    <TbHomeSearch className="text-blue-800 text-xl" />
                </div>
            ),
            value: 1,
        },
        {
            title: "Vacant",
            icon: (
                <div className="h-10 w-10 rounded-full bg-green-700/10 flex justify-center items-center flex-none">
                    <TbHomeCheck className="text-green-700 text-xl" />{" "}
                </div>
            ),
            value: 1,
        },
        {
            title: "Blocked",
            icon: (
                <div className="h-10 w-10 rounded-full bg-orange-700/10 flex justify-center items-center flex-none">
                    {" "}
                    <TbHomeX className="text-orange-700 text-xl" />{" "}
                </div>
            ),
            value: 0,
        },
    ];
    return (
        <div>
            <div className="bg-white flex items-center flex-wrap gap-2 md:justify-between p-4 justify-center">
                <div className="text-xl font-semibold">Property Board</div>
                <CustomSelect icon={<FiUser />} options={["Business Development"]} />
            </div>

            <div className="p-4 flex flex-wrap gap-4 justify-between">
<div className="flex gap-4 flex-wrap">

                <CustomSelector
                    icon={<HiOutlineBuildingOffice2 />}
                    options={properties}
                    selectedOption={selectedProperty}
                    selected={selectedProperty}
                    setSelectedOption={setSelectedProperty}
                />
                <CustomSelector
                    icon={<FaBuilding />}
                    options={[{ id: "12", name: "No Blocks" }]}
                    selectedOption={{ id: "12", name: "No Blocks" }}
                    />
                <CustomSelector
                    icon={<FaBuilding />}
                    options={[{ id: "13", name: "No Floors" }]}
                    selectedOption={{ id: "13", name: "No Floors" }}
                    />
                    </div>
           

                    <CustomSelect
                        icon={<FiCalendar />}
                        options={[
                            "Today",
                            "Tomorrow",
                            "Next 1 week",
                            "Next 1 month",
                            "Next 1 year",
                        ]}

                    />
             

            </div>
            <div className="p-4">
                <div className="w-full bg-white shadow p-4 ">
                    <div className="flex items-center justify-between flex-col-reverse md:flex-row w-full gap-2">
                        <div className="w-full flex gap-4 overflow-x-auto">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.title}
                                    className="flex gap-2 p-2 rounded-full border items-center min-w-40"
                                    onClick={() =>
                                        setCurrentTab(tab.title.split(" ")[0].toLocaleLowerCase())
                                    }
                                >
                                    {tab.icon}
                                    <div className="text-left">
                                        <span className="font-bold">{tab.value}</span>
                                        <p className="text-sm font-semibold">{tab.title}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between gap-4 ">
                            <div className="lg:w-80 w-full">
                                <TextField
                                    variant="outlined"
                                    placeholder="Search"
                                    fullWidth
                                    sx={{
                                        backgroundColor: "#f5f7fa",
                                        borderRadius: "5px",
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "#3f6ad8", // Border color
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#3f6ad8",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#3f6ad8",
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: "#9099a2" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <CustomSelect
                                options={["All", "Vacant", "Occupied", "blocked"]}
                                selectedOption={currentTab}
                                handleChange={(e) => setCurrentTab(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-6">
                        {filterPropertiesData.length > 0 ? (
                            filterPropertiesData.map((property) => {
                                return <PropertyCard key={property.id} property={property} />;
                            })
                        ) : (
                            <figure className="w-full flex justify-center items-center col-span-full">
                                <img
                                    src="/images/no-data.png"
                                    alt="No data"
                                    height={200}
                                    width={200}
                                />
                            </figure>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyBoard;
