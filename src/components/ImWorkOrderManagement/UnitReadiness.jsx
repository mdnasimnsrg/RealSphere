import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const UnitReadiness = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);   

    const tableData = [
        {
            JobId: "IMJ240913-4008",
            Propertyname: "The Sanctuary",
            Unitname: "Sanctuary 1",
            Requestedon: "13 Sep 2024",
            JobDate: "13 Sep 2024",
            InspectorName: "Lydia",
            Projected: "2 hrs",
            Actual: "-",
            Others: "0",
            CompletedOn: "-",
            KPI: "Ontime",
            JobStatus: "Assigned",
        },
        {
            JobId: "IMJ240722-3512",
            Propertyname: "Green Apartment",
            Unitname: "Green Manage Unit -05",
            Requestedon: "22 Jul 2024",
            JobDate: "22 Jul 2024",
            InspectorName: "Kiddo",
            Projected: "1 hrs",
            Actual: "1 hrs",
            Others: "2 hrs",
            CompletedOn: "22 Jul 2024",
            KPI: "Ontime",
            JobStatus: "Yet To Verify",
        },
    ];

    const columns = [
        {
            name: "Job Id",
            //selector: (row) => row.status,
            selector: (row) => (
                <Link to={`/unit-readiness-details`}>
                    {row.JobId} 
                </Link>
            ),
        },
        {
            name: "Property name",
            selector: (row) => row.Propertyname,
        },
        {
            name: "Unit name",
            selector: (row) => row.Unitname,
        },
        {
            name: "Requested on",
            selector: (row) => row.Requestedon,
        },
        {
            name: "Job Date",
            selector: (row) => row.JobDate,
        },
        {
            name: "Inspector Name",
            selector: (row) => row.InspectorName,
        },
        {
            name: "Projected",
            selector: (row) => row.Projected,
        },
        {
            name: "Actual",
            selector: (row) => row.Actual,
        },
        {
            name: "Others",
            selector: (row) => row.Others,
        },
        {
            name: "Completed On",
            selector: (row) => row.CompletedOn,
        },
        {
            name: "KPI",
            selector: (row) => row.KPI,
        },
        {
            name: "Job Status",
            selector: (row) => row.JobStatus,
        },
    ];

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [resource, setResource] = useState("");

    const properties = [
        { id: 1, name: "Movenpick Jeddah Al Nawras", location: "Ash Shati, Jeddah", initials: "MJ", color: "bg-yellow-600" },
        { id: 2, name: "Atelier La View Center", location: "Ash Shati, Jeddah", initials: "AL", color: "bg-red-600" },
        { id: 3, name: "Serenity Towers", location: "Mukta Gardens, Chennai", image: "/serenity-towers.jpg" },
        { id: 4, name: "Verizon Properties", location: "Karapakkam, Kancheepuram", image: "/verizon-properties.jpg" },
        { id: 5, name: "Commercial", location: "Chennai, Chennai", initials: "C", color: "bg-green-600" }
    ];

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Unit Readiness</div>

            <div className="flex flex-wrap items-center gap-4">

                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="">Business Development</option>
                    </select>
                </div>

            </div>
        </div>

        <div className="p-2">
            <div className="bg-white shadow-md rounded-md p-4">

                <div className="flex flex-wrap gap-4 items-center justify-between mb-4">

                    <div className="flex w-full md:w-auto gap-2 flex-1">
                        <div className="flex w-auto">
                        <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                            <FiSearch className="text-gray-600" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search Inspections"
                            className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        </div>
                    </div>

                    <div className="flex w-full md:w-auto gap-2 justify-start md:justify-end">
                        <button 
                            className="flex bg-gray-100 p-2 rounded border hover:bg-gray-200"
                            onClick={() => setShowFilter(true)}
                        >
                            <FiFilter className="mr-2 text-gray-600" />
                        </button>
                        <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md">Create New Inspection</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                <DataTable
                    columns={columns}
                    data={tableData}
                    pagination 
                    highlightOnHover
                    striped
                    responsive
                />
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
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Resource</label>
                    <select
                     value={resource}
                     onChange={(e) => setResource(e.target.value)}
                     className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Resource</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Requested On</label>
                    <div className="flex space-x-2 mt-1">
                        <div className="relative w-1/2">
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2" />
                        </div>
                        <div className="relative w-1/2">
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 rounded px-3 py-2" />
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Status</label>
                    <select
                     value={status}
                     onChange={(e) => setStatus(e.target.value)}
                     className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <hr className="border-gray-300 mb-4" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white w-[515px] p-6 rounded-lg shadow-lg">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="text-lg font-semibold">Create New Inspection</h2>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                            ✖
                        </button>
                    </div>

                    <div className="flex items-center space-x-2 mt-4 text-gray-600">
                        <span className={step === 1 ? "font-medium" : "text-gray-400"}>Choose Property</span>
                        <span>&gt;</span>
                        <span className={step === 2 ? "font-medium text-blue-600" : "text-gray-400"}>Choose Unit</span>
                        <span>&gt;</span>
                        <span className={step === 3 ? "font-medium text-blue-600" : "text-gray-400"}>Preview</span>
                    </div>

                    {step === 1 && (
                        <>
                            <input
                                type="text"
                                placeholder="Search Property"
                                className="w-full p-2 mt-4 border rounded-md focus:ring focus:ring-blue-300"
                            />
                            <div className="mt-4 space-y-3 h-[235px] overflow-y-auto scrollbar-hide">
                                {properties.map((property) => (
                                <div
                                    key={property.id}
                                    className={`flex items-center p-3 border rounded-md cursor-pointer ${selectedProperty === property.id ? "bg-blue-100" : ""}`}
                                    onClick={() => setSelectedProperty(property.id)}
                                >
                                    {property.image ? (
                                    <img src={property.image} alt={property.name} className="w-10 h-10 rounded-md" />
                                    ) : (
                                    <div className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-md ${property.color}`}>{property.initials}</div>
                                    )}
                                    <div className="ml-3">
                                    <h3 className="font-semibold">{property.name}</h3>
                                    <p className="text-sm text-gray-500">{property.location}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            
                            <button
                                className={`w-full mt-4 p-2 rounded-md ${selectedProperty ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                disabled={!selectedProperty}
                                onClick={() => selectedProperty && setStep(2)}
                            >
                                Next
                            </button>                       
                        </>
                    )}

                    {step === 2 && (
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Search Property"
                                className="w-full p-2 mt-4 border rounded-md focus:ring focus:ring-blue-300"
                            />
                            <div className="mt-4 space-y-3 h-[235px] overflow-y-auto scrollbar-hide">
                                {properties.map((property) => (
                                <div
                                    key={property.id}
                                    className={`flex items-center p-3 border rounded-md cursor-pointer ${selectedProperty === property.id ? "bg-blue-100" : ""}`}
                                    onClick={() => setSelectedProperty(property.id)}
                                >
                                    {property.image ? (
                                    <img src={property.image} alt={property.name} className="w-10 h-10 rounded-md" />
                                    ) : (
                                    <div className={`w-10 h-10 flex items-center justify-center text-white font-bold rounded-md ${property.color}`}>{property.initials}</div>
                                    )}
                                    <div className="ml-3">
                                    <h3 className="font-semibold">{property.name}</h3>
                                    <p className="text-sm text-gray-500">{property.location}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button onClick={() => setStep(1)}>Previous</button>
                                <button
                                    className={`mt-4 p-2 rounded-md ${selectedProperty ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                                    disabled={!selectedProperty}
                                    onClick={() => selectedProperty && setStep(3)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="mt-4">
                            <div className="mt-4 space-y-3">

                            </div>
                            <div className="mt-4 flex justify-between">
                                <button onClick={() => setStep(2)}>Previous</button>
                                <button
                                    className="bg-blue-600 text-white"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )}

    </div>
  );
};

export default UnitReadiness;
