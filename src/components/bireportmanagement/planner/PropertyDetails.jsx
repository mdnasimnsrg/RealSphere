import { useState } from "react";
import {
    FaHotel,
    FaRulerCombined,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaShareAlt,
    FaChevronLeft,
    FaMoneyBill,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import CustomModal from "../../CustomModal";
import { Avatar, Box, Button, MenuItem, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Grid } from "lucide-react";

const PropertyPage = () => {
    const [activeTab, setActiveTab] = useState("unitDetails");
    const [open, setOpen] = useState(false);
    const [durationType, setDurationType] = useState("days");

    const navigate = useNavigate();
    const params = useParams();

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

    const property = propertiesData.find(
        (p) =>
            p.title.toLowerCase().replace(/\s+/g, "-") ===
            params.property.toLowerCase()
    );

    if (!property) {
        return (
            <div className="text-center text-red-500 text-lg mt-10">
                Property not found!
            </div>
        );
    }

    return (
        <div>
            <div className="bg-white flex items-center gap-2 p-4">
                <button
                    className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-800/10"
                    onClick={() => navigate(-1)}
                >
                    <FaChevronLeft className="text-lg" />
                </button>
                <h1 className="text-xl font-semibold">{property.title}</h1>
            </div>
            <div className="p-4">
                <div className="p-4 bg-white rounded-lg shadow mt-4">
                    <div className="flex flex-col-reverse md:flex-row gap-2 justify-between">
                        <div className="flex border-b bg-gray-200 rounded py-1 px-2 place-self-start">
                            <button
                                className={`py-2 text-sm px-4 font-semibold rounded ${activeTab === "unitDetails" ? "bg-white" : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("unitDetails")}
                            >
                                Unit Details
                            </button>
                            <button
                                className={`py-2 px-4 text-sm font-semibold rounded ${activeTab === "propertyDetails" ? "bg-white" : "text-gray-500"
                                    }`}
                                onClick={() => setActiveTab("propertyDetails")}
                            >
                                Property Details
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 self-end">
                            <button className="p-2 text-gray-500 hover:text-black">
                                <FaShareAlt size={20} />
                            </button>
                            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white" onClick={() => setOpen(true)}>
                                Block Unit
                            </button>
                        </div>
                    </div>

                    {activeTab === "unitDetails" ? (
                        <UnitDetails property={property} />
                    ) : (
                        <PropertyDetails property={property} />
                    )}
                </div>
            </div>
            <CustomModal isOpen={open} onClose={() => setOpen(false)} children={<> {/* Property Card */}
                <Box className="bg-white rounded-lg shadow-md p-4 border">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box className="relative">
                            <Avatar
                                variant="square"
                                src="/images/propertyImagePlaceholder.svg"
                                className="w-16 h-16"
                            />
                            <Box className="absolute bottom-0 left-0 bg-blue-500 px-2 py-1 rounded text-white">
                                <Typography variant="body2">Hotel</Typography>
                            </Box>
                        </Box>
                        <Grid container spacing={1} className="flex-1">
                            <Grid item xs={9}>
                                <Typography variant="body1" className="text-lg font-semibold">
                                    Month / ₹ 0
                                </Typography>
                                <Typography variant="body2">
                                    Moven Pick Second Floor • Commercial Use
                                </Typography>
                            </Grid>
                            <Grid item xs={3} className="flex justify-end">
                                <Typography
                                    variant="body2"
                                    className="text-green-700 bg-green-100 px-2 py-1 rounded"
                                >
                                    Vacant
                                </Typography>
                            </Grid>
                            <Grid item xs={6} className="flex items-center">
                                <Typography variant="body2">Unfurnished</Typography>
                            </Grid>
                            <Grid item xs={6} className="flex items-center">
                                <Typography variant="body2">📏 2048 Sq. Meter</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>

                {/* Form Inputs */}
                <Box className="mt-4 space-y-3">
                    {/* Blocking for Opportunity */}
                    <Typography variant="body2" className="font-semibold">
                        Blocking for Opportunity <span className="text-red-500">*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Search Resource"
                        select
                        className="bg-gray-100 rounded"
                    >
                        <MenuItem value="Opportunity 1">Opportunity 1</MenuItem>
                        <MenuItem value="Opportunity 2">Opportunity 2</MenuItem>
                    </TextField>

                    {/* Duration */}
                    <Typography variant="body2" className="font-semibold">
                        Duration <span className="text-red-500">*</span>
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            placeholder="Enter Duration"
                            className="bg-gray-100 rounded"
                        />
                        <ToggleButtonGroup
                            value={durationType}
                            exclusive
                            onChange={(event, newType) => setDurationType(newType)}
                            className="bg-gray-100 rounded"
                        >
                            <ToggleButton value="days">Days</ToggleButton>
                            <ToggleButton value="months">Months</ToggleButton>
                            <ToggleButton value="years">Years</ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>

                    {/* Blocking Purpose */}
                    <Typography variant="body2" className="font-semibold">
                        Blocking Purpose
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Enter Blocking Purpose"
                        className="bg-gray-100 rounded"
                    />
                </Box>

                {/* Buttons */}
                <Stack direction="row" spacing={2} justifyContent="space-between" className="mt-4">
                    <Button variant="outlined" fullWidth onClick={() => setOpen(false)}>
                        Close
                    </Button>
                    <Button variant="contained" fullWidth className="bg-blue-600 text-white">
                        Block
                    </Button>
                </Stack></>} />

        </div>
    );
};

const UnitDetails = ({ property }) => {
    return (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                    <img
                        src="/images/propertyImagePlaceholder.svg"
                        alt="Property"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex justify-between items-start gap-4">

                    <h2 className="mt-4 text-sm font-semibold">
                        {property.title} | {property.type}
                    </h2>
                    <div className="flex flex-col items-end gap-2">
                        <p>{property.price} ₹ / Month</p>
                        <span className="px-3 py-1 text-sm bg-green-700/10 text-green-700 rounded-lg font-bold">
                            {property.status}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                    <p>{property.furnishing}</p>
                    <span> • </span>
                    <p className="text-gray-600 flex items-center">
                        <FaRulerCombined className="mr-2" /> {property.size} Sq. Meter
                    </p>
                </div>
                <div className="p-4 bg-blue-400/10 flex gap-4 justify-between items-center flex-wrap my-4">
                    <p className="text-gray-600 flex items-center">
                        <FaHotel className="mr-2" /> {property.category}
                    </p>
                    <p className="text-gray-600 flex items-center">
                        <FaMoneyBill className="mr-2" />
                        {property.leaseType}
                    </p>
                    <p className="text-gray-600 flex items-center"><FaCalendarAlt className="mr-2" /> {property.buildDate}</p>

                </div>
                <hr />
                <p className="text-gray-600 flex items-center mt-4">
                    <FaMapMarkerAlt className="mr-2 text-themeBlue" /> {property.location.area},{" "}
                    {property.location.city}, {property.location.country}
                </p>
            </div>
            <div className="w-full bg-blue-50 p-4 rounded-lg shadow-sm flex justify-between items-start h-fit">
                <h3 className="text-lg font-semibold">Execution Status</h3>
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-lg">
                    • {property.executionStatus}
                </span>
            </div>
        </div>
    );
};

const PropertyDetails = ({ property }) => {
    return (
        <div className="mt-6 flex flex-col md:flex-row">
            <div className="flex-1 p-4">
                <div className="w-full h-64 bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500">Property Image Placeholder</span>
                </div>
                <div className="flex items-center justify-between gap-4">

                    <h2 className="mt-4 text-lg font-semibold">{property.title}</h2>
                    <span className="px-3 py-1 text-xs bg-green-700/10 text-green-700 rounded-lg font-bold text-nowrap">
                        {property.availableUnits + " " + "units available"}
                    </span>
                </div>
                <p className="text-gray-600">{property.id}</p>
                <hr className="my-3" />
                <p className="text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-themeBlue" /> {property.location.area},{" "}
                    {property.location.city}, {property.location.country}
                </p>
            </div>
            <div className="w-full md:w-1/3 p-4">
                <h3 className="text-lg font-semibold mb-3">Nearby Locations</h3>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(property.nearbyLocations).map(([key, value]) => (
                        <div key={key} className="bg-blue-50 p-4 rounded-lg text-center">
                            <p className="font-semibold capitalize">{key}</p>
                            <p className="text-sm text-gray-500">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PropertyPage;


