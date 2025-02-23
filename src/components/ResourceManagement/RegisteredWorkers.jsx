import React, { useState } from "react";
import { FiSearch, FiFilter, FiEdit, FiX, FiUser } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const RegisteredWorkers = () => {
    const blankuser = process.env.PUBLIC_URL + '/images/blankuser.png';
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };      

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

    const handleOutsideClick = () => {
        setDropdownVisible(false);
        setSelectedRowId(null);
    };

    React.useEffect(() => {
        const handleClickOutside = () => handleOutsideClick();
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const columns = [
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
                    <div className="z-10 bg-white shadow-md rounded-md p-1 mt-2 w-[80px]">
                        <ul className="text-sm text-gray-700">
                        <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">
                                <Link to="/edit-registered-workers" className="block w-full">
                                 Edit
                                </Link>
                            </li>
                            <li
                                className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => alert(`Inactive ${row.name}`)}
                            >
                                Inactive
                            </li>
                            <li
                                className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => alert(`Deleting ${row.name}`)}
                            >
                                Delete
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            ),
        },
        {
            name: "Image",
            selector: (row) => <div className="flex"><Link to='/registered-workers-details' className="block self-center mr-2"><img  src={row.logo} alt="Profile" style={{ width: 30, height: 30, borderRadius: '50%' }} /></Link></div>,
        },
        { name: "Name", selector: (row) => row.Name },
        { name: "Gender", selector: (row) => row.Gender },
        { name: "Mobile Number", selector: (row) => row.MobileNo },
        { name: "Profession", selector: (row) => row.Profession },
        { name: "Barred", selector: (row) => row.Barred },
        { name: "Status", selector: (row) => row.status },
    ];
    
    const tableData = [
        {
            id: 1,
            logo: blankuser,  // Replace with the actual image URL or path
            Name: "TT001",
            Gender: "Implementation",
            MobileNo: "Kancheepuram",
            Profession: "India",
            Barred: "	₹",
            status: "Active",
        },
    ];
    

    const filteredData = tableData.filter(
        (row) =>
         
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );


  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Registered Workers</div>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="businessDev">Business Development</option>
                </select>
            </div>
            <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                <FiUser className="text-gray-500 mr-2" />
                <select
                    className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                    <option value="">Mohanadiah</option>
                    <option value="">Retal Real Estate</option>
                    <option value="">BlueWater</option>
                    <option value="">Leo Apartments</option>
                </select>
            </div>
        </div>

        <div className="p-2">
            <div className="bg-white shadow-md rounded-md overflow-x-auto p-4">

                <div className="flex flex-wrap gap-4 items-center justify-between mb-4">

                    <div className="flex w-full md:w-auto gap-2 flex-1">
                        <div className="flex w-auto">
                        <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                            <FiSearch className="text-gray-600" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search Account"
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
                        <Link to='/add-registered-workers' className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add Registered Workers
                        </Link>
                        
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
                        {["Active", "InActive"].map((status, index) => (
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
                    <label className="block text-gray-700 font-medium mb-2">Profession</label>
                    <div className="flex flex-wrap gap-2">
                    <select
                        className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="">Select Profession</option>
                        <option value="">Security Guard</option>
                        <option value="">Guard</option>
                        <option value="">Inspector</option>
                    </select>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

       
    </div>
  );
};

export default RegisteredWorkers;
