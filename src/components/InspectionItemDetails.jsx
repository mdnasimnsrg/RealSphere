import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img6 from "../images/property/img6.jpeg";
import { FiSearch, FiEdit, FiPlus, FiMinus, FiTrash } from "react-icons/fi";

const InspectionItemDetails = () => {
  const data = [
    {
      id: "IT20231114-0004",
      templateName: "Assets",
      qty: 3,
    },
  ];

  const columns = [
    {
      name: "Bulk Inspection ID",
      selector: (row) => row.id,
    },
    {
      name: "Template Name",
      selector: (row) => row.templateName,
    },
    {
      name: "QTY",
      selector: (row) => row.qty,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="relative">
          <button
            onClick={toggleModal1}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </button>
        </div>
      ),
      width: "80px",
    },
  ];

  const handleBack = () => {
    window.history.back();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemList] = useState([
    { id: 1, name: "Water Purifier" },
    { id: 2, name: "Washing Machine" },
    { id: 3, name: "Sanyo Fridge" },
    { id: 4, name: "Amenity Billing" },
    { id: 5, name: "CCTV Camera" },
  ]);

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleModal1 = () => setIsOpen1(!isOpen1);
  const toggleModal2 = () => setIsOpen2(!isOpen2);

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
          <span>PROP23-116</span>
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
                <h2 className="text-xl font-semibold mb-2">
                  PROPERTY DETAILS{" "}
                  <span className="text-white shadow rounded-lg text-sm bg-[#071741] p-2">
                    PROP23-116
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Company Name</h3>
              <p>Business Development</p>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>AVADI, 600054, TAMILNADU, India</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
            <div className="flex w-full md:w-auto gap-2">
              <div className="flex w-full">
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
            <button
              onClick={toggleModal}
              className="px-4 w-full md:w-fit py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add New Bulk Template
            </button>
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
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Add New Item Template</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="flex">
              <div className="w-1/2 border-r pr-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Template Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Template Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Search Inspection Items"
                  />
                </div>

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
                          {selectedItems.find((i) => i.id === item.id).quantity}
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

              <div className="w-1/2 pl-4">
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

            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={toggleModal}
              >
                New Bulk Template
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 w-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">
                Inspection Template View
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal1}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="flex">
              <div className="flex gap-1">
                <img
                  src={img6}
                  alt=""
                  className="w-10 h-10 rounded-full mr-6"
                />
                <h3 className="text-lg">
                  Assets <br />
                  <span className="text-sm">3 Items</span>
                </h3>
              </div>
            </div>
            <div className="flex">
              <h3 className="text-lg">Item List</h3>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img
                  src={img6}
                  alt=""
                  className="w-10 h-10 rounded-full mr-6"
                />
                <p className="font-medium">TV</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">1 QTY</p>
              </div>
            </div>
            <hr className="border-gray-300 mt-2 mb-2" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img
                  src={img6}
                  alt=""
                  className="w-10 h-10 rounded-full mr-6"
                />
                <p className="font-medium">AC</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">1 QTY</p>
              </div>
            </div>
            <hr className="border-gray-300 mt-2 mb-2" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img
                  src={img6}
                  alt=""
                  className="w-10 h-10 rounded-full mr-6"
                />
                <p className="font-medium">Fridge</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">1 QTY</p>
              </div>
            </div>
            <hr className="border-gray-300 mt-2 mb-2" />

            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white w-full rounded hover:bg-blue-700"
                onClick={toggleModal2}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Edit</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal2}
              >
                ✕
              </button>
            </div>
            <hr className="border-gray-300 mb-4" />

            <div className="flex">
              <div className="w-1/2 border-r pr-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Template Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value="Assets"
                    onChange={(e) => setTemplateName(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter Template Name"
                  />
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Search Inspection Items"
                  />
                </div>

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
                          {selectedItems.find((i) => i.id === item.id).quantity}
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

              <div className="w-1/2 pl-4">
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

            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={toggleModal2}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspectionItemDetails;
