import React, { useState } from "react";
import { FiSearch, FiFilter, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Resources = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };      

    const tableData = [
        {
            id: "1",
            Picture: "",
            ResourceID: "R20250110-101",
            ContactId: "CUST250110-506",
            name: "Tobias",
            Job: "Security guard",
            Department: "Security Department",
            Profession: "Security Guard",
            Module: "Lease & Sales Management",
            WorkingCalendar: "09:30 am - 06:30 pm",
            FunctionalLocation: "Riyadh",
            HourlyRate: "SAR 100",
            ReportingTo: "Zyair",
        },
        {
            id: "2",
            Picture: "",
            ResourceID: "R20250110-101",
            ContactId: "CUST250110-506",
            name: "Tobias",
            Job: "Security guard",
            Department: "Security Department",
            Profession: "Security Guard",
            Module: "Lease & Sales Management",
            WorkingCalendar: "09:30 am - 06:30 pm",
            FunctionalLocation: "Riyadh",
            HourlyRate: "SAR 100",
            ReportingTo: "Zyair",
        },
        {
            id: "3",
            Picture: "",
            ResourceID: "R20250110-101",
            ContactId: "CUST250110-506",
            name: "Tobias",
            Job: "Security guard",
            Department: "Security Department",
            Profession: "Security Guard",
            Module: "Lease & Sales Management",
            WorkingCalendar: "09:30 am - 06:30 pm",
            FunctionalLocation: "Riyadh",
            HourlyRate: "SAR 100",
            ReportingTo: "Zyair",
        },
        {
            id: "4",
            Picture: "",
            ResourceID: "R20250110-101",
            ContactId: "CUST250110-506",
            name: "Tobias",
            Job: "Security guard",
            Department: "Security Department",
            Profession: "Security Guard",
            Module: "Lease & Sales Management",
            WorkingCalendar: "09:30 am - 06:30 pm",
            FunctionalLocation: "Riyadh",
            HourlyRate: "SAR 100",
            ReportingTo: "Zyair",
        },
        {
            id: "5",
            Picture: "",
            ResourceID: "R20250110-101",
            ContactId: "CUST250110-506",
            name: "Tobias",
            Job: "Security guard",
            Department: "Security Department",
            Profession: "Security Guard",
            Module: "Lease & Sales Management",
            WorkingCalendar: "09:30 am - 06:30 pm",
            FunctionalLocation: "Riyadh",
            HourlyRate: "SAR 100",
            ReportingTo: "Zyair",
        },
    ];

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleEdit = (e, id) => {
        e.stopPropagation();
        if (selectedRowId === id) {
          setDropdownVisible(!dropdownVisible);
        } else {
          setDropdownVisible(true);
        }
          setSelectedRowId(id);
    };

    const [isOpen1, setIsOpen1] = useState(false);
    const toggleModal1 = () => setIsOpen1(!isOpen1);

    const [isOpen2, setIsOpen2] = useState(false);
    const toggleModal2 = () => setIsOpen2(!isOpen2);

    const columns = [
        {
            name: "Picture",
            selector: (row) => row.Picture,
        },
        {
            name: "Resource ID",
            selector: (row) => row.ResourceID,
        },
        {
            name: "Contact Id",
            selector: (row) => row.ContactId,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            cell: (row) => (
                <button
                  onClick={() => toggleModal1(row.name)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {row.name}
                </button>
            ),
        },
        {
            name: "Job",
            selector: (row) => row.Job,
        },
        {
            name: "Department",
            selector: (row) => row.Department,
        },
        {
            name: "Profession",
            selector: (row) => row.Profession,
        },
        {
            name: "Module",
            selector: (row) => row.Module,
        },
        {
            name: "Working Calendar",
            selector: (row) => row.WorkingCalendar,
        },
        {
            name: "Functional Location",
            selector: (row) => row.FunctionalLocation,
        },
        {
            name: "Hourly Rate",
            selector: (row) => row.HourlyRate,
        },
        {
            name: "Reporting To",
            selector: (row) => row.ReportingTo,
        },
        {
            name: "",
            cell: (row) => (
                <div className="relative">
                    <button
                        onClick={(e) => handleEdit(e, row.id)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <MoreVertIcon />
                    </button>
                    {dropdownVisible && selectedRowId === row.id && (
                        <div className="absolute z-10 bg-white shadow-md rounded-md p-1 mt-2 w-[80px]">
                            <ul className="text-sm text-gray-700">
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                >
                                    Inactive
                                </li>
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                    onClick={toggleModal1}
                                >
                                    View
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    const filteredData = tableData.filter(
        (row) =>
          row.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const [isOpen3, setIsOpen3] = useState(false);
    const toggleModal3 = () => setIsOpen3(!isOpen3);

    const [isOpen4, setIsOpen4] = useState(false);
    const toggleModal4 = () => setIsOpen4(!isOpen4);
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const users = [
        { id: 1, name: "Venkat", phone: "+91 9884477542", email: "venkat@propgoto.com", avatar: "" },
        { id: 2, name: "Asahel", phone: "+91 9587412356", email: "asahel@propertyautomate.com", avatar: "" },
        { id: 3, name: "Hind", phone: "+971 587896236", email: "hind@propertyautomate.com", avatar: "" },
        { id: 4, name: "Vikram", phone: "+91 987654321", email: "vikram@yopmail.com", avatar: "", initials: "V" },
        { id: 5, name: "Zabuza", phone: "+91 9584142136", email: "zabuza@mailinator.com", avatar: "" },
        { id: 6, name: "Madara", phone: "+91 9999999999", email: "madara@mail.com", avatar: "" },
    ];

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [image, setImage] = useState(null);

    const toggleUserSelection = (id) => {
        setSelectedUsers((prev) =>
        prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
        );
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
    };

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Resource Master</div>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
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
                            placeholder="Search Resources"
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
                        <button onClick={toggleMenu} className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add New
                        </button>

                        {showMenu && (
                            <div className="absolute z-10 w-24 bg-white rounded-md shadow-lg mt-10">
                                <button onClick={toggleModal} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Tools
                                </button>
                                <button onClick={toggleModal3} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Vehicles
                                </button>
                                <button onClick={toggleModal4} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Users
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="overflow-x-auto">
                <DataTable
                    columns={columns}
                    data={filteredData}
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
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <div className="flex flex-wrap gap-2">
                        {["Active", "Inactive"].map((status, index) => (
                            <label
                            key={status}
                            className="px-4 py-2 bg-gray-200 rounded text-sm cursor-pointer hover:bg-blue-500 hover:text-white flex items-center"
                            >
                            <input
                                type="checkbox"
                                value={status}
                                className="hidden"
                                onChange={(e) => handleStatusChange(e, status)}
                            />
                            {status}
                            </label>
                        ))}
                    </div>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Type</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Type</option>
                        <option value="">Tools</option>
                        <option value="">Vehicles</option>
                        <option value="">Users</option>
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
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Add Tools</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="tools" className="block text-gray-700 font-bold mb-2">Tools*</label>
                            <select id="tools" className="border rounded w-full py-2 px-3">
                                <option value="">Select Tools</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department*</label>
                            <select id="department" className="border rounded w-full py-2 px-3">
                                <option value="">Select Department</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Functional Location*</label>
                            <select id="location" className="border rounded w-full py-2 px-3">
                                <option value="">Select Functional Location</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="serial" className="block text-gray-700 font-bold mb-2">Serial Number*</label>
                            <input type="text" placeholder="Enter Serial Number" id="serial" className="border rounded w-full py-2 px-3" />
                        </div>

                        <div>
                            <label htmlFor="rate" className="block text-gray-700 font-bold mb-2">Rate*</label>
                            <input type="text" placeholder="Enter Rate" id="rate" className="border rounded w-full py-2 px-3" />
                        </div>

                        <div>
                            <label htmlFor="period" className="block text-gray-700 font-bold mb-2">Period*</label>
                            <select id="period" className="border rounded w-full py-2 px-3">
                                <option value="">Select Period</option>
                            </select>
                        </div>
                    </div>


                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">IMAGES</label>
                        <div className="border rounded w-full py-4 px-3 bg-gray-100 flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-7 0l-3-3m0 0l-3 3m3-3v-12a2 2 0 012-2h10a2 2 0 012 2v12m-9 0h7" />
                            </svg>
                            <span className="ml-2 text-gray-500">Upload Image</span>
                            <input type="file" className="hidden" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end"> {/* Buttons */}
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400">Cancel</button>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Create</button>
                    </div>

                </div>
            </div>
        )}

        {isOpen3 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Add Vehicles</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal3}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department*</label>
                            <select id="department" className="border rounded w-full py-2 px-3">
                                <option value="">Select Department</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Functional Location*</label>
                            <select id="location" className="border rounded w-full py-2 px-3">
                                <option value="">Select Functional Location</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="vehicle" className="block text-gray-700 font-bold mb-2">Vehicle*</label>
                            <select id="vehicle" className="border rounded w-full py-2 px-3">
                                <option value="">Select Vehicle</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="vehicleno" className="block text-gray-700 font-bold mb-2">Vehicle Number*</label>
                            <input type="text" id="vehicleno" placeholder="Enter Vechicle Number" className="border rounded w-full py-2 px-3" />
                        </div>

                        <div>
                            <label htmlFor="rate" className="block text-gray-700 font-bold mb-2">Rate*</label>
                            <input type="text" id="rate" placeholder="Enter Rate" className="border rounded w-full py-2 px-3" />
                        </div>

                        <div>
                            <label htmlFor="period" className="block text-gray-700 font-bold mb-2">Period*</label>
                            <select id="period" className="border rounded w-full py-2 px-3">
                                <option value="">Select Period</option>
                            </select>
                        </div>
                    </div>


                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">IMAGES</label>
                        <div className="border rounded w-full py-4 px-3 bg-gray-100 flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v4a2 2 0 002 2h12a2 2 0 002-2v-4m-7 0l-3-3m0 0l-3 3m3-3v-12a2 2 0 012-2h10a2 2 0 012 2v12m-9 0h7" />
                            </svg>
                            <span className="ml-2 text-gray-500">Upload Image</span>
                            <input type="file" className="hidden" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end"> {/* Buttons */}
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400">Cancel</button>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Create</button>
                    </div>

                </div>
            </div>
        )}

        {isOpen4 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Add Users</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal4}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />
                    
                    <div className="p-4 flex">
                        <div className="w-1/2 pr-4 h-[500px] overflow-y-auto">
                            {["Module", "Jobs", "Profession", "Working Calendar", "Functional Location"].map((label, index) => (
                            <div key={index} className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">{label} <span className="text-red-500">*</span></label>
                                <select className="w-full mt-1 p-2 border rounded-lg text-gray-700">
                                <option>Select {label}</option>
                                </select>
                            </div>
                            ))}

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hours Rate<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                    <input type="number" className="w-full mt-1 p-2 border rounded-lg text-gray-700 pr-6" placeholder="Enter Hours Rate" />
                                    <span className="absolute right-3 top-3 text-gray-500">SAR</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Daily Rate<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                    <input type="number" className="w-full mt-1 p-2 border rounded-lg text-gray-700 pr-6" placeholder="Enter Daily Rate" />
                                    <span className="absolute right-3 top-3 text-gray-500">SAR</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                                <label className="block text-sm font-medium text-gray-700">Reporting To<span className="text-red-500">*</span></label>
                                <select className="w-full mt-1 p-2 border rounded-lg text-gray-700">
                                    <option>Select Reporting To</option>
                                </select>
                            </div>

                            <div className="mt-3">
                                <label className="block text-sm font-medium text-gray-700">Images</label>
                                <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer bg-blue-50 rounded-lg relative">
                                    {image ? (
                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                    <label className="text-center text-blue-500 text-sm cursor-pointer">
                                        <input type="file" className="hidden" onChange={handleImageUpload} />
                                        <span className="block">⬆ Upload Image</span>
                                    </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 pl-4 border-l">
                            <label className="block text-sm font-medium text-gray-700">Search Users Name <span className="text-red-500">*</span></label>
                            <input
                            type="text"
                            placeholder="Search Users Name"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />

                            <div className="mt-4 h-[400px] overflow-y-auto">
                            {users
                                .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
                                .map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-2 border-b">
                                    {/* Avatar */}
                                    <div className="flex items-center space-x-3">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-semibold text-white">
                                        {user.initials}
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm font-medium">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.phone} • {user.email}</p>
                                    </div>
                                    </div>

                                    <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => toggleUserSelection(user.id)}
                                    className="h-5 w-5 cursor-pointer"
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t flex justify-end space-x-3">
                        <button className="px-4 py-2 border rounded-lg text-gray-700">Cancel</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create</button>
                    </div>

                </div>
            </div>
        )}

        {isOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Tobias</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal1}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        <div className="p-1">
                            <div className="flex flex-col items-center">
                                <div className="w-full bg-gray-200 flex items-center justify-center rounded-md">
                                    <span className="text-gray-500 text-4xl">🏢</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                                <p><strong>Resource Type:</strong> Users</p>
                                <p><strong>Resource Name:</strong> Tobias</p>
                                <p><strong>Resource ID:</strong> R20250110-101</p>
                                <p><strong>Department:</strong> Security Department</p>
                                <p><strong>Job:</strong> Security guard</p>
                                <p><strong>Profession:</strong> Security Guard</p>
                                <p><strong>Module Assigned:</strong> Lease & Sales Management</p>
                                <p><strong>Working Calendar:</strong> 09:30 am - 06:30 pm</p>
                                <p><strong>Hours Rate:</strong> SAR 100</p>
                                <p><strong>Daily Rate Day:</strong> SAR 800</p>
                                <p><strong>Reporting To:</strong> Zyair</p>
                                <p><strong>Functional Location:</strong> Riyadh</p>
                            </div>
                        </div>
                        <div className="p-4 border-t flex justify-end">
                            <button onClick={toggleModal2} className="bg-blue-500 text-white px-4 py-2 rounded ">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {isOpen2 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Edit Users</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal2}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="p-4 flex">
                        <div className="w-1/2 pr-4 h-[500px] overflow-y-auto">
                            {["Module", "Jobs", "Profession", "Working Calendar", "Functional Location"].map((label, index) => (
                            <div key={index} className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">{label} <span className="text-red-500">*</span></label>
                                <select className="w-full mt-1 p-2 border rounded-lg text-gray-700">
                                <option>Select {label}</option>
                                </select>
                            </div>
                            ))}

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hours Rate<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                    <input type="number" className="w-full mt-1 p-2 border rounded-lg text-gray-700 pr-6" placeholder="Enter Hours Rate" />
                                    <span className="absolute right-3 top-3 text-gray-500">SAR</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Daily Rate<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                    <input type="number" className="w-full mt-1 p-2 border rounded-lg text-gray-700 pr-6" placeholder="Enter Daily Rate" />
                                    <span className="absolute right-3 top-3 text-gray-500">SAR</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                                <label className="block text-sm font-medium text-gray-700">Reporting To<span className="text-red-500">*</span></label>
                                <select className="w-full mt-1 p-2 border rounded-lg text-gray-700">
                                    <option>Select Reporting To</option>
                                </select>
                            </div>

                            <div className="mt-3">
                                <label className="block text-sm font-medium text-gray-700">Images</label>
                                <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer bg-blue-50 rounded-lg relative">
                                    {image ? (
                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                    <label className="text-center text-blue-500 text-sm cursor-pointer">
                                        <input type="file" className="hidden" onChange={handleImageUpload} />
                                        <span className="block">⬆ Upload Image</span>
                                    </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 pl-4 border-l">
                            <label className="block text-sm font-medium text-gray-700">Search Users Name <span className="text-red-500">*</span></label>
                            <input
                            type="text"
                            placeholder="Search Users Name"
                            className="w-full mt-1 p-2 border rounded-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />

                            <div className="mt-4 h-[400px] overflow-y-auto">
                            {users
                                .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
                                .map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-2 border-b">
                                    {/* Avatar */}
                                    <div className="flex items-center space-x-3">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-semibold text-white">
                                        {user.initials}
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm font-medium">{user.name}</p>
                                        <p className="text-xs text-gray-500">{user.phone} • {user.email}</p>
                                    </div>
                                    </div>

                                    <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => toggleUserSelection(user.id)}
                                    className="h-5 w-5 cursor-pointer"
                                    />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t flex justify-end space-x-3">
                        <button className="px-4 py-2 border rounded-lg text-gray-700">Cancel</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update</button>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default Resources;
