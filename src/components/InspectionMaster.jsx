import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiEdit, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const InspectionMaster = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilter, setShowFilter] = useState(false);
    const [show1Filter, setShow1Filter] = useState(false);
    const [show2Filter, setShow2Filter] = useState(false);
    const [show3Filter, setShow3Filter] = useState(false);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };

    const [selectedOption, setSelectedOption] = useState('Active');

    const handleOptionChange = (event) => {
        if (event && event.target && event.target.value) { 
          setSelectedOption(event.target.value); 
        } else {
          console.warn("Invalid event target or missing value attribute."); 
        }
    };

    const [selectedOption1, setSelectedOption1] = useState('Yes');

    const handleOptionChange1 = (event) => {
        if (event && event.target && event.target.value) { 
          setSelectedOption1(event.target.value); 
        }
    };

    const [selectedOption2, setSelectedOption2] = useState('Yes');

    const handleOptionChange2 = (event) => {
        if (event && event.target && event.target.value) { 
          setSelectedOption2(event.target.value); 
        }
    };

    const [selectedOption3, setSelectedOption3] = useState('Yes');

    const handleOptionChange3 = (event) => {
        if (event && event.target && event.target.value) { 
          setSelectedOption3(event.target.value); 
        }
    };

    const handleStatusChange = (e, status) => {
        setSelectedStatuses((prev) =>
          e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
        );
    };      

    const tableData = [
        {
            id: 1,
            itemId: "ITEM20241126-255",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 2,
            itemId: "ITEM20241126-2551",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 3,
            itemId: "ITEM20241126-2552",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 4,
            itemId: "ITEM20241126-2553",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 5,
            itemId: "ITEM20241126-2554",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 6,
            itemId: "ITEM20241126-2555",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 7,
            itemId: "ITEM20241126-2556",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 8,
            itemId: "ITEM20241126-2557",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 9,
            itemId: "ITEM20241126-2558",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 10,
            itemId: "ITEM20241126-2559",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 11,
            itemId: "ITEM20241126-25510",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
        {
            id: 12,
            itemId: "ITEM20241126-25511",
            type: "Inventory",
            name: "Water Purifier",
            category: "Electrical",
            subCategory: "Appliances",
            manufacturer: "Samsung",
            modelNumber: "26112024",
            uom: "Total",
            billing: "Yes",
            taxable: "Yes",
            fixedAsset: "No",
            taxGroup: "India Intrastate 18%",
            costPrice: "12 SAR",
            salePrice: "12 SAR",
            status: "Active",
        },
    ];

    const columns = [
        {
            name: "Action",
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
                                onClick={() => setShow2Filter(true)}
                            >
                                Edit
                            </li>
                            <li
                                className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => setShow3Filter(true)}
                            >
                                View
                            </li>
                            <li
                                className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => alert(`Deleting ${row.name}`)}
                            >
                                Inactive
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            ),
            width: "80px",
        },
        {
            name: "Item ID",
            selector: (row) => row.itemId,
        },
        {
            name: "Type",
            selector: (row) => row.type,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Category",
            selector: (row) => row.category,
        },
        {
            name: "Sub Category",
            selector: (row) => row.subCategory,
        },
        {
            name: "Manufacturer",
            selector: (row) => row.manufacturer,
        },
        {
            name: "Model Number",
            selector: (row) => row.modelNumber,
        },
        {
            name: "UOM",
            selector: (row) => row.uom,
        },
        {
            name: "Billing",
            selector: (row) => row.billing,
        },
        {
            name: "Taxable",
            selector: (row) => row.taxable,
        },
        {
            name: "Fixed Asset",
            selector: (row) => row.fixedAsset,
        },
        {
            name: "Tax Group",
            selector: (row) => row.taxGroup,
        },
        {
            name: "Cost Price",
            selector: (row) => row.costPrice,
        },
        {
            name: "Sale Price",
            selector: (row) => row.salePrice,
        },
        {
            name: "Status",
            selector: (row) => row.status,
        },
    ];

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

    const filteredData = tableData.filter(
        (row) =>
          row.itemId.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedStatuses.length === 0 || selectedStatuses.includes(row.status))
      );

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">Item Master</div>
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
                        <button onClick={() => setShow1Filter(true)} className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add Request
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
                        customStyles={{
                            tableWrapper: {
                            style: {
                                overflowX: "auto",
                            },
                            },
                        }}
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
                    <label className="block text-gray-700 font-medium mb-2">Active</label>
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
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Item Type</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Type</option>
                        <option>Inventory</option>
                        <option>Services</option>
                        <option>Assets</option>
                        <option>Tools</option>
                        <option>Vehicles</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Manufacturer</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Manufacturer</option>
                        <option>Microsoft</option>
                        <option>Boat</option>
                        <option>Rexel</option>
                        <option>Steelcase</option>
                        <option>Siemens</option>
                        <option>Kohler</option>
                        <option>Clorox</option>
                        <option>Steelcase</option>
                        <option>Amenity Services</option>
                        <option>ESPON</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Category</option>
                        <option>Maintenance Supplies</option>
                        <option>Office Use</option>
                        <option>Electronic</option>
                        <option>Charges</option>
                        <option>Projector</option>
                        <option>Washing machine</option>
                        <option>Glass Works</option>
                        <option>General Inspection</option>
                        <option>Home Appliances</option>
                        <option>AC</option>
                        <option>Electronic items</option>
                        <option>Security Appliances</option>
                        <option>Facility Appliances</option>
                    </select>
                </div>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                    Apply
                </button>
                </div>
            </div>
        )}

        {show1Filter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[470px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    show1Filter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShow1Filter(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="absolute top-4 left-4 text-lg font-semibold">Create Item</h2>

                    <div className="overflow-y-auto mt-8">

                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-1">Item Type</label>
                                <select className="border border-gray-300 p-2 rounded-md" required>
                                    <option value="">Select Item Type</option>
                                    <option value="">Inventory</option>
                                    <option value="">Services</option>
                                    <option value="">Assets</option>
                                    <option value="">Tools</option>
                                    <option value="">Vehicles</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Item Category</label>
                                <select className="border border-gray-300 p-2 rounded-md" required>
                                    <option value="">Select Item Category</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <label className="block text-sm mb-1">Item Name</label>
                            <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="border border-gray-300 p-2 rounded-md"
                            required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Manufacturer Name</label>
                            <select className="border border-gray-300 p-2 rounded-md" required>
                                <option value="">Select Manufacturer</option>
                            </select>
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Model Number</label>
                            <input
                                type="text"
                                placeholder="Enter Model Number"
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Parent Item</label>
                            <select className="border border-gray-300 p-2 rounded-md">
                                <option value="">Select Parent Item</option>
                            </select>
                            </div>
                            <div>
                            <label className="block text-sm mb-1">UOM</label>
                            <select className="border border-gray-300 p-2 rounded-md" required>
                                <option value="">Select UOM</option>
                            </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Cost Price</label>
                            <input
                                type="number"
                                placeholder="Enter Cost Price"
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Sale Price</label>
                            <input
                                type="number"
                                placeholder="Enter Sale Price"
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Upload Images</label>
                            <input type="file" className="border border-gray-300 p-2 rounded-md" />
                        </div>

                        <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    color="primary"
                                    />
                                }
                                label="Bill
                                ing"
                            />
                            {checked && (
                                <FormControlLabel
                                    control={
                                        <Switch
                                        checked={checked1}
                                        onChange={handleChange1}
                                        color="primary"
                                        />
                                    }
                                    label="Tax Enabled"
                                />
                            )}
                            
                        </div>

                        {checked1 && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label className="block text-sm mb-1">Tax Group</label>
                                <select className="border border-gray-300 p-2 rounded-md">
                                    <option value="">Select Tax Group</option>
                                </select>
                                </div>
                                <div>
                                <label className="block text-sm mb-1">HSN/SAC Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter HSN/SAC Code"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                                </div>
                            </div>
                        )}
                        <label className="block text-sm mb-1">Status</label>
                        <div className="grid grid-cols-2">
                            <button 
                                value="Active" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Active
                            </button>
                            <button 
                                value="Inactive" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Inactive' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Inactive
                            </button>
                        </div>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                            Create
                        </button>
                    </form>

                    </div>

                </div>
            </div>
        )}

        {show2Filter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[470px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    show2Filter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShow2Filter(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="absolute top-4 left-4 text-lg font-semibold">Edit Item</h2>

                    <div className="overflow-y-auto mt-8">

                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-1">Item Id</label>
                                <input
                                type="text"
                                placeholder="ITEM20241126-255"
                                className="border border-gray-300 p-2 rounded-md"
                                disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Item Type</label>
                                <select className="border border-gray-300 p-2 rounded-md" required>
                                    <option value="">Select Item Type</option>
                                    <option value="">Inventory</option>
                                    <option value="">Services</option>
                                    <option value="">Assets</option>
                                    <option value="">Tools</option>
                                    <option value="">Vehicles</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-1">Item Category</label>
                                <select className="border border-gray-300 p-2 rounded-md" required>
                                    <option value="">Select Item Category</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Item SubCategory</label>
                                <select className="border border-gray-300 p-2 rounded-md" required>
                                    <option value="">Select Item SubCategory</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <label className="block text-sm mb-1">Item Name</label>
                            <input
                            type="text"
                            placeholder="Enter Item Name"
                            value={'Water Purifier'}
                            className="border border-gray-300 p-2 rounded-md"
                            required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Manufacturer Name</label>
                            <select className="border border-gray-300 p-2 rounded-md" required>
                                <option value="">Select Manufacturer</option>
                            </select>
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Model Number</label>
                            <input
                                type="text"
                                placeholder="Enter Model Number"
                                value={'26112024'}
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Parent Item</label>
                            <select className="border border-gray-300 p-2 rounded-md">
                                <option value="">Select Parent Item</option>
                            </select>
                            </div>
                            <div>
                            <label className="block text-sm mb-1">UOM</label>
                            <select className="border border-gray-300 p-2 rounded-md" required>
                                <option value="">Select UOM</option>
                            </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-sm mb-1">Cost Price</label>
                            <input
                                type="number"
                                placeholder="Enter Cost Price"
                                value={'12'}
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Sale Price</label>
                            <input
                                type="number"
                                placeholder="Enter Sale Price"
                                value={'12'}
                                className="border border-gray-300 p-2 rounded-md"
                                required
                            />
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-2">Pantry Billing</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption1 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange1}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption1 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange1}
                                >
                                    No
                                </button>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Consumable</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption2 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange2}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption2 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange2}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1">
                            <div>
                                <label className="block text-sm mb-2">Fixed Asset</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption3 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange3}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption3 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange3}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Upload Images</label>
                            <input type="file" className="border border-gray-300 p-2 rounded-md" />
                        </div>

                        <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    color="primary"
                                    />
                                }
                                label="Bill
                                ing"
                            />
                            {checked && (
                                <FormControlLabel
                                    control={
                                        <Switch
                                        checked={checked1}
                                        onChange={handleChange1}
                                        color="primary"
                                        />
                                    }
                                    label="Tax Enabled"
                                />
                            )}
                            
                        </div>

                        {checked1 && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label className="block text-sm mb-1">Tax Group</label>
                                <select className="border border-gray-300 p-2 rounded-md">
                                    <option value="">Select Tax Group</option>
                                </select>
                                </div>
                                <div>
                                <label className="block text-sm mb-1">HSN/SAC Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter HSN/SAC Code"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                                </div>
                            </div>
                        )}
                        <label className="block text-sm mb-1">Status</label>
                        <div className="grid grid-cols-2">
                            <button 
                                value="Active" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Active
                            </button>
                            <button 
                                value="Inactive" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Inactive' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Inactive
                            </button>
                        </div>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                            Save
                        </button>
                    </form>

                    </div>

                </div>
            </div>
        )}

        {show3Filter && (
            <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
                <div
                className={`bg-white w-[470px] p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
                    show3Filter ? "translate-x-0" : "translate-x-full"
                }`}
                >
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-black"
                        onClick={() => setShow3Filter(false)}
                    >
                        <FiX size={20} />
                    </button>
                    <h2 className="absolute top-4 left-4 text-lg font-semibold">View Item</h2>

                    <div className="overflow-y-auto mt-8">

                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-1">Item Id</label>
                                <input
                                type="text"
                                placeholder="ITEM20241126-255"
                                className="border border-gray-300 p-2 rounded-md"
                                disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Item Type</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select Item Type</option>
                                    <option value="">Inventory</option>
                                    <option value="">Services</option>
                                    <option value="">Assets</option>
                                    <option value="">Tools</option>
                                    <option value="">Vehicles</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-1">Item Category</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select Item Category</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Item SubCategory</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select Item SubCategory</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">Item Name</label>
                                <input
                                type="text"
                                placeholder="Enter Item Name"
                                value={'Water Purifier'}
                                className="border border-gray-300 p-2 rounded-md"
                                disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Manufacturer Name</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select Manufacturer</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">Model Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Model Number"
                                    value={'26112024'}
                                    className="border border-gray-300 p-2 rounded-md"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Parent Item</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select Parent Item</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">UOM</label>
                                <select className="border border-gray-300 p-2 rounded-md" disabled>
                                    <option value="">Select UOM</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Cost Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter Cost Price"
                                    value={'12'}
                                    className="border border-gray-300 p-2 rounded-md"
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4"> 
                            <div>
                                <label className="block text-sm mb-1">Sale Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter Sale Price"
                                    value={'12'}
                                    className="border border-gray-300 p-2 rounded-md"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Pantry Billing</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption1 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange1}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption1 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange1}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div>
                                <label className="block text-sm mb-2">Consumable</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption2 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange2}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption2 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange2}
                                >
                                    No
                                </button>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Fixed Asset</label>
                                <button 
                                    value="Yes" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption3 === 'Yes' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange3}
                                >
                                    Yes
                                </button>
                                <button 
                                    value="No" 
                                    className={`font-medium rounded-lg px-5 py-2.5 
                                        ${selectedOption3 === 'No' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                    onClick={handleOptionChange3}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2">Upload Images</label>
                            <input type="file" className="border border-gray-300 p-2 rounded-md" />
                        </div>

                        <div className="flex items-center justify-between">
                            <FormControlLabel
                                control={
                                    <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    color="primary"
                                    />
                                }
                                label="Bill
                                ing"
                            />
                            {checked && (
                                <FormControlLabel
                                    control={
                                        <Switch
                                        checked={checked1}
                                        onChange={handleChange1}
                                        color="primary"
                                        />
                                    }
                                    label="Tax Enabled"
                                />
                            )}
                            
                        </div>

                        {checked1 && (
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label className="block text-sm mb-1">Tax Group</label>
                                <select className="border border-gray-300 p-2 rounded-md">
                                    <option value="">Select Tax Group</option>
                                </select>
                                </div>
                                <div>
                                <label className="block text-sm mb-1">HSN/SAC Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter HSN/SAC Code"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                                </div>
                            </div>
                        )}
                        <label className="block text-sm mb-1">Status</label>
                        <div className="grid grid-cols-2">
                            <button 
                                value="Active" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Active
                            </button>
                            <button 
                                value="Inactive" 
                                className={`font-medium rounded-lg px-5 py-2.5 
                                    ${selectedOption === 'Inactive' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={handleOptionChange}
                            >
                                Inactive
                            </button>
                        </div>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                            Edit
                        </button>
                    </form>

                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default InspectionMaster;
