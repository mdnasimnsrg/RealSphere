import React, { useState } from "react";
import { FiUser, FiX, FiEdit } from "react-icons/fi";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const LeadView = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const handleBack = () => {
    window.history.back();
  };

  const [priority, setPriority] = useState("Medium");
  const priorities = ["Low", "Medium", "High"];
  const [showFilter, setShowFilter] = useState(false);
  const [selectedImage] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleModal1 = () => setIsOpen1(!isOpen1);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="relative">
          <button
            onClick={() => toggleModal1(row.name)}
            className="text-blue-500 hover:text-blue-700"
          >
            {row.name}
          </button>
        </div>
      ),
    },
    { name: "Description", selector: (row) => row.Description },
    {
      name: "Edit",
      cell: (row) => (
        <div className="relative">
          <button
            onClick={() => toggleModal(row.name)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </button>
        </div>
      ),
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "Test123",
      Description: "- need to site visit and meeting",
    },
  ];

  return (
    <div className="">
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>View Lead</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex p-4 bg-gray-100 min-h-screen flex-wrap gap-4 lg:flex-nowrap">
        {/* Left Side Section */}
        <div className="w-full lg:w-80 bg-white p-4 rounded-lg shadow-md">
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Testing123</h2>
              <span className="bg-blue-200 text-blue-800 text-sm font-medium px-2 py-1 rounded-lg">
                LEAD241024-240
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              +60-1233445567 • testing123@gmail.com
            </p>

            <div className="mt-4 border-t pt-4">
              <h3 className="text-gray-500 text-sm font-semibold">
                Description/Requirement
              </h3>
              <p className="text-gray-700 text-sm">CRM, PropGOTO</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 border-t pt-4">
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">
                  Commercial
                </h4>
                <p className="text-gray-700 text-sm">Purpose</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">Manage</h4>
                <p className="text-gray-700 text-sm">Type</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">
                  12 Monthly
                </h4>
                <p className="text-gray-700 text-sm">Lease duration</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">
                  24-10-2024
                </h4>
                <p className="text-gray-700 text-sm">Start Period</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">
                  Lead Source
                </h4>
                <p className="text-gray-700 text-sm"></p>
              </div>
              <div>
                <h4 className="text-gray-500 text-xs font-semibold">
                  Exhibition
                </h4>
                <p className="text-gray-700 text-sm">Internal Lead Source</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-gray-500 text-xs font-semibold">
                  Reference URL
                </h4>
                <p className="text-gray-700 text-sm">-</p>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <h3 className="text-gray-500 text-sm font-semibold">
                ALLOCATED DETAILS
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg mt-2 flex items-center">
                <div className="bg-purple-500 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">
                  KR
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Kartica Rahayu</p>
                  <p className="text-gray-600 text-sm">Agent • +91 987654321</p>
                  <p className="text-gray-600 text-sm">
                    kartica@propertyautomate.com
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-gray-500 text-xs font-semibold">
                    Priority
                  </h4>
                  <select
                    className="bg-yellow-400 text-white py-1 px-3 rounded-lg w-full text-sm"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    {priorities.map((p) => (
                      <option key={p} value={p} className="text-black">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h4 className="text-gray-500 text-xs font-semibold">
                    Classify the Lead
                  </h4>
                  <select className="bg-gray-200 text-black py-1 px-3 rounded-lg w-full text-sm">
                    <option>🔥 Hot</option>
                    <option>❄️ Cold</option>
                    <option>🌡 Warm</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => setShowFilter(true)}
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  ✅ Qualify
                </button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  🔄 Transfer
                </button>
                <button className="flex-1 bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  ❌ Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="w-full overflow-x-auto scrllbar-hide bg-white p-4 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex border-b w-full overflow-x-auto scrollbar-hide">
            {[
              "summary",
              "comments",
              "internal",
              "external",
              "todo",
              "tracker",
              "activity",
            ].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 font-bold"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <Link
              to={`/editleads`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-10"
            >
              Edit
            </Link>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "summary" && (
              <div>
                <div className="min-h-screen">
                  <div className="bg-white shadow-md rounded-lg p-2 space-y-6">
                    {/* Contact Information */}
                    <Section title="Contact Information">
                      <Detail label="Contact Name" value="Testing123" />
                      <Detail label="Job Title" value="Manager" />
                      <Detail label="Company" value="ABC Testing 123" />
                      <Detail label="Business Mobile" value="-" />
                      <Detail label="Mobile Phone" value="+60-1233445567" />
                      <Detail label="Email" value="testing123@gmail.com" />
                      <Detail label="Address 1" value="-" />
                      <Detail label="Address 2" value="-" />
                      <Detail label="City" value="Wangsa Maju" />
                      <Detail label="Country" value="Malaysia" />
                      <Detail label="Website" value="-" />
                      <Detail label="Preferred Contact" value="Any" />
                    </Section>

                    {/* Referral and Showcase */}
                    <Section title="Referral and Showcase">
                      <Detail label="Referrer Name" value="-" />
                      <Detail label="Referrer Company" value="-" />
                      <Detail label="Showcase" value="No" />
                      <Detail label="Last Showcase Date" value="24 Oct 2024" />
                    </Section>

                    {/* Lead Information */}
                    <Section title="Lead Information">
                      <Detail label="Purpose" value="Commercial" />
                      <Detail label="Type" value="Manage" />
                      <Detail label="From Date" value="24 Oct 2024" />
                      <Detail label="Duration" value="12 Monthly" />
                      <Detail label="Property Name" value="Riverbend Towers" />
                      <Detail label="Unit Type" value="2 BHK" />
                    </Section>

                    {/* Purchase and Budget Information */}
                    <Section title="Purchase and Budget Information">
                      <Detail label="Existing Customer" value="No" />
                      <Detail label="Lead External Source" value="-" />
                      <Detail label="Lead Internal Source" value="Exhibition" />
                      <Detail label="Budget" value="-" />
                      <Detail label="Budget Amount" value="-" />
                      <Detail label="Confirm Interest" value="No" />
                      <Detail label="Expected Close Period" value="-" />
                      <Detail label="Monthly/Total Budget" value="-" />
                    </Section>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "comments" && (
              <div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center">
                    <img src="" alt="No Data" className="w-64 h-64 mb-4" />
                    <p className="text-gray-600 text-lg font-semibold">
                      No Data
                    </p>
                  </div>
                  <div className="mt-6 w-full shadow-md rounded-lg p-2">
                    <label htmlFor="comment" className="text-gray-600 text-sm">
                      Type Comments Here
                    </label>
                    <textarea
                      id="comment"
                      className="w-full p-2 mt-2 border rounded-lg focus:ring focus:ring-blue-200"
                      placeholder="Type your comment..."
                    ></textarea>
                    <button
                      className="mt-4 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "todo" && (
              <div>
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
            )}
            {activeTab === "tracker" && (
              <div>
                <div className="p-2 flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                    <img
                      src="/verified-icon.svg"
                      alt="Verified"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Lead Created</h2>
                    <p className="text-gray-600 text-sm">
                      By:{" "}
                      <span className="text-blue-500 font-medium">
                        Kartica Rahayu
                      </span>
                      <span className="text-gray-500">
                        {" "}
                        on 2024-10-24 01:25 PM
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Internal Lead Source:{" "}
                      <span className="font-medium">Exhibition</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "activity" && (
              <div>
                <p>Activity Log</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`overflow-y-auto bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Convert To Opportunity
            </h2>
            <hr className="border-gray-300 mb-4" />

            <div className="mt-4">
              <h3 className="text-gray-700 text-md font-semibold">
                New Prospect Details
              </h3>
              <div className="flex flex-col items-center mt-4">
                <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Profile"
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <span className="text-gray-400">👤</span>
                  )}
                  <label className="absolute bottom-1 right-1 bg-gray-200 p-1 rounded-full cursor-pointer">
                    📷
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mt-6">
              <label className="block text-gray-600 font-medium">Name *</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border p-2 rounded mt-1"
              />

              <label className="block text-gray-600 font-medium mt-4">
                Mobile *
              </label>
              <div className="flex">
                <select className="border p-2 rounded-l bg-gray-100">
                  <option>+60</option>
                  <option>+91</option>
                  <option>+1</option>
                </select>
                <input
                  type="text"
                  placeholder="1233445567"
                  className="w-full border p-2 rounded-r"
                />
              </div>

              <label className="block text-gray-600 font-medium mt-4">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            <div className="mt-6 border rounded-lg p-4 bg-gray-100">
              <div className="flex justify-between">
                <h4 className="text-gray-700 font-semibold">
                  Choose the Billing Account
                </h4>
                <button className="text-red-500 text-sm">Remove</button>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-600">Show only primary account</span>
                <label className="relative inline-flex cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <select className="w-full border p-2 rounded mt-2">
                <option>Choose Billing Account</option>
              </select>

              <p className="text-gray-500 text-sm mt-2">
                No account selected to display
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                Previous
              </button>
              <button className="bg-blue-600 text-white py-2 px-6 rounded">
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">View To Do</h2>
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
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value="Test123"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter Description"
                  value="- need to site visit and meeting"
                ></textarea>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Update
            </button>
          </div>
        </div>
      )}

      {isOpen1 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[400px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">View To Do</h2>
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
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value="Test123"
                  className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter Description"
                  value="- need to site visit and meeting"
                  disabled
                ></textarea>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Mark As Complete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadView;

function Section({ title, children }) {
  return (
    <div className="">
      <h2 className="text-md font-semibold border-b pb-2 mb-4">{title}</h2>
      <div className="gap-y-4 gap-x-8 flex flex-wrap">{children}</div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-gray-600 text-sm">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}
