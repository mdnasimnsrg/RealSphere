import React, { useState } from "react";
import { FiUser, FiSearch, FiFilter, FiX } from "react-icons/fi";
import DataTable from "react-data-table-component";
import CustomModal from "../CustomModal";

const Utilities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
      e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  };

  const columns = [
    {
      name: "Utility Category Name",
      selector: (row) => row.utilityCategoryName,
    },
    { name: "Utility Name", selector: (row) => row.utilityName },
    { name: "Description", selector: (row) => row.description },
    { name: "Provider", selector: (row) => row.provider },
    {
      name: "Service Provider Name",
      selector: (row) => row.serviceProviderName,
    },
    { name: "Price Per UOM", selector: (row) => row.pricePerUOM },
    { name: "Billing", selector: (row) => row.billing },
    { name: "Tax Enabled", selector: (row) => row.taxEnabled },
    { name: "HSN/SAC Code", selector: (row) => row.hsnSacCode },
    { name: "TAX Group Name", selector: (row) => row.taxGroupName },
    { name: "Item Type", selector: (row) => row.itemType },
    { name: "Item Category", selector: (row) => row.itemCategory },
    { name: "Item Master", selector: (row) => row.itemMaster },
    { name: "Status", selector: (row) => row.status },
  ];

  const tableData = [
    {
      id: 1,
      utilityCategoryName: "High Speed Internet",
      utilityName: "Omantel",
      description: "-",
      provider: "External",
      serviceProviderName: "ARAB BANK",
      pricePerUOM: "20 / Monthly",
      billing: "No",
      taxEnabled: "No",
      hsnSacCode: "-",
      taxGroupName: "-",
      itemType: "Services",
      itemCategory: "Generic",
      itemMaster: "Utility Billing",
      status: "Active",
    },
    {
      id: 1,
      utilityCategoryName: "High Speed Internet",
      utilityName: "Omantel",
      description: "-",
      provider: "External",
      serviceProviderName: "ARAB BANK",
      pricePerUOM: "20 / Monthly",
      billing: "No",
      taxEnabled: "No",
      hsnSacCode: "-",
      taxGroupName: "-",
      itemType: "Services",
      itemCategory: "Generic",
      itemMaster: "Utility Billing",
      status: "Active",
    },
    {
      id: 1,
      utilityCategoryName: "High Speed Internet",
      utilityName: "Omantel",
      description: "-",
      provider: "External",
      serviceProviderName: "ARAB BANK",
      pricePerUOM: "20 / Monthly",
      billing: "No",
      taxEnabled: "No",
      hsnSacCode: "-",
      taxGroupName: "-",
      itemType: "Services",
      itemCategory: "Generic",
      itemMaster: "Utility Billing",
      status: "Active",
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(row.status)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [active, setActive] = useState("Active");

  const handleActive = (item) => {
    setActive(item);
  };

  const [provider, setProvider] = useState("External");

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Utility Master</div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="bg-white shadow-md rounded-md p-4 w-full overflow-x-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
            <div className="flex w-full md:w-auto gap-2 flex-1">
              <div className="flex w-auto">
                <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                  <FiSearch className="text-gray-600" />
                </button>
                <input
                  type="text"
                  placeholder="Search Utility Category"
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
                onClick={openModal}
                className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add A Utility Category Master
              </button>
            </div>
          </div>

          <div className="overflow-x-auto w-full">
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
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Unit
              </label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Unit</option>
                <option>Unit A</option>
                <option>Unit B</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Status
              </label>
              <div className="flex flex-wrap gap-2">
                {["Reopened", "Open", "Assigned", "Resolved", "Cancelled"].map(
                  (status, index) => (
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
                  )
                )}
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      )}

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Utility Category Master"
        size="lg"
      >
        <div>
          <ul className="h-96 overflow-scroll">
            <li>
              <label className="text-black block text-sm pb-1">Name*</label>
              <input
                className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full"
                input
                placeholder="Enter Name"
              />
            </li>
            <li className="mt-3">
              <label className="text-black block text-sm pb-1">
                Description
              </label>
              <input
                className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full h-24"
                placeholder="Enter Description"
              />
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">Provider*</label>
              <div className="flex space-x-2">
                <button
                  className={`py-2 text-sm px-3 rounded-md ${
                    provider === "External"
                      ? "bg-primary text-white"
                      : "border border-light-200"
                  }`}
                  onClick={() => setProvider("External")}
                >
                  External
                </button>
                <button
                  className={`py-2 px-4 rounded-md ${
                    provider === "Internal"
                      ? "bg-primary text-white"
                      : "border border-light-200"
                  }`}
                  onClick={() => setProvider("Internal")}
                >
                  Internal
                </button>
              </div>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">
                Service Provider*
              </label>
              <select className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full">
                <option>Select Service Provider</option>
              </select>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">UOM*</label>
              <select className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full">
                <option>Select UOM</option>
              </select>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">
                Price Per UOM*
              </label>
              <div className="flex items-center border border-light-200 rounded-md">
                <input
                  className="text-sm py-2 px-3 w-full"
                  placeholder="Enter Price"
                />
                <span className="px-3">₹</span>
              </div>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">Item Type</label>
              <select className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full">
                <option>Select Item Type</option>
              </select>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">
                Item Category
              </label>
              <select className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full">
                <option>Select Item Category</option>
              </select>
            </li>

            <li className="mt-3">
              <label className="text-black block text-sm pb-1">
                Item Master*
              </label>
              <select className="inline-block text-sm py-2 px-3 border border-light-200 rounded-md w-full">
                <option>Select Item Master</option>
              </select>
            </li>

            <li className="mt-3 flex items-center justify-between">
              <span className="text-black block text-sm">Billing</span>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                <span className="ml-2 text-sm">No</span>
              </label>
            </li>

            <li className="mt-3 flex items-center justify-between">
              <span className="text-black block text-sm">Tax Enabled</span>
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-5 bg-gray-300 rounded-full"></div>
                <span className="ml-2 text-sm">No</span>
              </label>
            </li>
            <li className="mt-3">
              <label className="text-black block text-sm pb-1">Status</label>
              <div className="flex">
                <div
                  onClick={() => handleActive("Active")}
                  className={`${
                    active === "Active" ? "bg-primary text-white" : "text-black"
                  } flex cursor-pointer justify-center items-center border border-light-200 p-3 rounded-md`}
                >
                  <p className="text-sm">Active</p>
                </div>
                <div
                  onClick={() => handleActive("Inactive")}
                  className={`${
                    active === "Inactive"
                      ? "bg-primary text-white"
                      : "text-black"
                  } flex ml-2 cursor-pointer justify-center items-center border border-light-200 p-3 rounded-md`}
                >
                  <p className="text-sm">Inactive</p>
                </div>
              </div>
            </li>

            <li className="mt-8">
              <button className="bg-primary py-2 px-4 rounded-md w-full text-white">
                Create
              </button>
            </li>
          </ul>
        </div>
      </CustomModal>
    </div>
  );
};

export default Utilities;
