import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img6 from "../images/property/img6.jpeg";
import {
  FiSearch,
  FiEdit,
  FiPlus,
  FiMinus,
  FiTrash,
  FiX,
  FiFilter,
} from "react-icons/fi";
import qr from "../images/QR_Code.png";

const MapUnitDetails = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const data = [
    {
      unitId: "IMP-2289",
      itemId: "ITEM20231114-00041",
      type: "Inventory",
      name: "TV",
      category: "Electrical",
      subCategory: "Appliances",
      manufacturer: "Sony",
      modelNo: "PAG123",
      serialNo: "9876543",
      condition: "New",
      location: "Kitchen",
      costPrice: "SAR 15,000",
      status: "Active",
    },
    {
      unitId: "IMP-2288",
      itemId: "ITEM20240911-225",
      type: "Inventory",
      name: "CCTV Camera",
      category: "Security Appliances",
      subCategory: "Camera",
      manufacturer: "HIK VISION",
      modelNo: "HIK2024",
      serialNo: "987654",
      condition: "New",
      location: "Entrance",
      costPrice: "SAR 2,500",
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
                <li className="py-1 px-3 hover:bg-gray-200 cursor-pointer">
                  Active
                </li>
                <li
                  className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setShow3Filter(true)}
                >
                  View
                </li>
              </ul>
            </div>
          )}
        </div>
      ),
    },
    {
      name: "Unit Item ID",
      selector: (row) => row.unitId,
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
      selector: (row) => row.modelNo,
    },
    {
      name: "Serial Number",
      selector: (row) => row.serialNo,
    },
    {
      name: "Condition",
      selector: (row) => row.condition,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Cost Price",
      selector: (row) => row.costPrice,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];

  const handleBack = () => {
    window.history.back();
  };

  const handleEdit = (e, unitId) => {
    e.stopPropagation();
    if (selectedRowId === unitId) {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(true);
    }
    setSelectedRowId(unitId);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemList] = useState([
    { id: 1, name: "Water Purifier" },
    { id: 2, name: "Washing Machine" },
    { id: 3, name: "CCTV Camera" },
    { id: 4, name: "Fork Lift" },
    { id: 5, name: "Laptop" },
    { id: 6, name: "Printer" },
    { id: 7, name: "Discussion Table" },
    { id: 8, name: "Desk" },
  ]);

  const toggleModal = () => setIsOpen(!isOpen);

  const addItem = (item) => {
    const existingItem = selectedItems.find((i) => i.id === item.id);
    if (!existingItem) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (item, delta) => {
    const updatedItems = selectedItems.map((i) =>
      i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
    );
    setSelectedItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = selectedItems.filter((i) => i.id !== id);
    setSelectedItems(updatedItems);
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  const [activeTab, setActiveTab] = useState("General Inspection Items");

  const [showFilter, setShowFilter] = useState(false);
  const [show3Filter, setShow3Filter] = useState(false);

  const [modelNumber, setModelNumber] = useState("PAG123");
  const [serialNumber, setSerialNumber] = useState("9876543");
  const [purchasePrice, setPurchasePrice] = useState("14000");
  const [costPrice, setCostPrice] = useState("15000");
  const [location, setLocation] = useState("Kitchen");
  const [condition, setCondition] = useState("New");
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white flex justify-between items-center mb-4 p-2">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>Unit-2 (Sale)</span>
        </h1>
      </div>

      <div className="p-4">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center">
              <img
                src={img6}
                alt="Property"
                className="w-20 h-20 rounded-full mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2 flex flex-wrap md:items-center items-start gap-y-2 gap-x-3">
                  Unit Details{" "}
                  <span className="text-white shadow rounded-lg text-sm bg-[#071741] p-2">
                    UNIT25-1186
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Property name</h3>
              <p>Serenity Towers</p>
            </div>
            <div>
              <h3 className="font-semibold">Unit Name</h3>
              <p>Unit -2 (Sale)</p>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>25/12, Mukta Gardens, Chennai, Tamil Nadu, India, 600031</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div className="flex w-full md:w-auto gap-2 flex-1">
              <div className="flex md:w-auto w-full">
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
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
            striped
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 flex-wrap overflow-y-scroll">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-3/4 lg:max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add New Item</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="flex flex-wrap">
              <div className="lg:w-1/2 w-full border-r pr-4">
                <div className="mb-4 border-b border-gray-300">
                  <nav className="flex">
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "General Inspection Items"
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => setActiveTab("General Inspection Items")}
                    >
                      General Inspection Items
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "Template Base Items"
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : "text-gray-600"
                      }`}
                      onClick={() => setActiveTab("Template Base Items")}
                    >
                      Template Base Items
                    </button>
                  </nav>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Search Inspection Items"
                  />
                </div>

                <div>
                  {activeTab === "General Inspection Items" && (
                    <div className="p-4 bg-gray-50 rounded">
                      {itemList.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center mb-4"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                            <p className="font-medium">{item.name}</p>
                          </div>
                          {selectedItems.find((i) => i.id === item.id) ? (
                            <div className="flex items-center">
                              <button
                                onClick={() => updateQuantity(item, -1)}
                                className="text-blue-600"
                              >
                                <FiMinus />
                              </button>
                              <span className="mx-2">
                                {
                                  selectedItems.find((i) => i.id === item.id)
                                    .quantity
                                }
                              </span>
                              <button
                                onClick={() => updateQuantity(item, 1)}
                                className="text-blue-600"
                              >
                                <FiPlus />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addItem(item)}
                              className="text-blue-600 font-medium"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === "Template Base Items" && (
                    <div className="p-4 bg-gray-50 rounded">
                      <h3 className="text-lg font-semibold mb-2">
                        Template Base Items
                      </h3>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-1/2 w-full pl-4">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>
                {selectedItems.length > 0 ? (
                  <>
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center mb-4"
                      >
                        <p className="font-medium">{item.name}</p>
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item, -1)}
                            className="text-blue-600"
                          >
                            <FiMinus />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item, 1)}
                            className="text-blue-600"
                          >
                            <FiPlus />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-4 text-red-500"
                          >
                            <FiTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      className="text-red-500 font-medium"
                      onClick={clearAll}
                    >
                      Delete All
                    </button>
                  </>
                ) : (
                  <p className="text-gray-500">No items selected</p>
                )}
              </div>
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
            <div className="flex justify-between items-center mb-4">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setShow3Filter(false)}
              >
                <FiX size={20} />
              </button>
              <h2 className="absolute top-4 left-4 text-lg font-semibold">
                View Item
              </h2>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="flex justify-between items-start mb-4 p-4  border border-gray-300">
              <div>
                <h3 className="font-semibold text-gray-800">IMP-2289</h3>
                <p className="text-sm text-gray-600">
                  ITEM20231114-00041 · Inventory
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  <strong>Item Name:</strong> TV
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Manufacturer Name:</strong> Sony
                </p>
              </div>
              <div className="text-center">
                <img
                  src={qr}
                  alt="QR Code"
                  className="w-16 h-16 object-cover"
                />
                <button className="mt-1 text-blue-600 text-sm underline">
                  View QR
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 w-32 h-32 flex items-center justify-center text-gray-400">
                Upload Image
              </div>
              <img src="" className="w-32 h-32 object-cover rounded" />
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Model Number
                  </label>
                  <input
                    type="text"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Serial Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Purchase Price
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="block p-2 w-full pl-7 pr-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                      SAR
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Cost Price
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="number"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      className="block p-2 w-full pl-7 pr-12 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                      SAR
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Kitchen</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Condition <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>New</option>
                    <option>Used</option>
                    <option>Damaged</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

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
              <label className="block text-gray-700 font-medium mb-2">
                Active
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Item Type
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Manufacturer
              </label>
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
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
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
    </div>
  );
};

export default MapUnitDetails;
