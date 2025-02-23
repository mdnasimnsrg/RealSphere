import React, { useState } from "react";
import { FiSearch, FiFilter, FiEdit, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";

const OrganizationHierarchy = () => {
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
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "2",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "3",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "4",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "5",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "6",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "7",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
        },
        {
            id: "8",
            name: "Cleaner",
            notes: "Cleaning",
            status: "Active",
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

    const [isOpen2, setIsOpen2] = useState(false);
    const toggleModal2 = () => setIsOpen2(!isOpen2);

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            // cell: (row) => (
            //     <button
            //       onClick={() => toggleModal1(row.name)}
            //       className="text-blue-500 hover:text-blue-700"
            //     >
            //       {row.name}
            //     </button>
            // ),
        },
        {
            name: "Notes",
            selector: (row) => row.notes,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
        {
            name: "",
            cell: (row) => (
                <div className="relative">
                    <button
                        onClick={(e) => handleEdit(e, row.id)}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <FiEdit />
                    </button>
                    {dropdownVisible && selectedRowId === row.id && (
                        <div className="absolute z-10 bg-white shadow-md rounded-md p-1 mt-2 w-[80px]">
                            <ul className="text-sm text-gray-700">
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => toggleModal2(row.id)}
                                >
                                    Edit
                                </li>
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                >
                                    Inactive
                                </li>
                                <li
                                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                >
                                    Delete
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

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const toggleModal1 = () => setIsOpen1(!isOpen1);

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">My Organization</div>
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
                            placeholder="Search by ID"
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
                        <button onClick={toggleModal} className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add Member
                        </button>
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
                    <label className="block text-gray-700 font-medium mb-2">Role Type</label>
                    <div className="flex flex-wrap gap-2">
                        {["Client", "Company"].map((status, index) => (
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Add Member</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Role Type</label>
                            <div className="flex flex-wrap gap-2">
                                {["Client", "Company"].map((status, index) => (
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
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Contact</label>
                            <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Contact</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Role</label>
                            <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Role</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Start Period</label>
                            
                        </div>
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
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                            Cancel
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )}

        {isOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">View Job</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal1}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Job Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                value={"Cleaner"}
                                className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Responsibilities</label>
                            <input
                                type="text"
                                placeholder="Enter Responsibilities"
                                value={"Cleaning"}
                                className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
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
                    </div>
                </div>
            </div>
        )}

        {isOpen2 && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Edit Job</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal2}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Role Type</label>
                            <div className="flex flex-wrap gap-2">
                                {["Client", "Company"].map((status, index) => (
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
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Contact</label>
                            <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Contact</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Role</label>
                            <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Role</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Start Period</label>
                            
                        </div>
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
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                            Cancel
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 w-[50%] rounded hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default OrganizationHierarchy;
