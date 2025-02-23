import { useState } from "react";
import { Dialog } from "@headlessui/react";
import img1 from "../../images/1.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Breadcrumb Component
const Breadcrumb = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Edit Prospect" },
    { id: 2, name: "Attachments" },
    { id: 3, name: "Opportunity Details" },
  ];

  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm px-4 py-2">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {index > 0 && <span className="mx-1">{">"}</span>}
          <span
            className={`${
              currentStep === step.id
                ? "text-blue-600 font-semibold"
                : "text-gray-400"
            }`}
          >
            {step.name}
          </span>
        </div>
      ))}
    </nav>
  );
};

const OpportunityCRMDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const [isCustomerAccountOpen, setIsCustomerAccountOpen] = useState(false);
  const [showPrimary, setShowPrimary] = useState(false);
  const [isBrokerAccountOpen, setIsBrokerAccountOpen] = useState(false);
  const [isQuickAccountOpen, setIsQuickAccountOpen] = useState(false);

  const [files, setFiles] = useState([]);

  const handleFileUpload1 = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const update = () => {};
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="bg-white mb-2">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>Edit Opportunity</span>
        </h1>
        <hr className="border-gray-300" />
        <Breadcrumb currentStep={currentStep} />
      </div>

      <div className="p-2 mt-2">
        <div className="p-2">
          {currentStep === 1 && (
            <div>
              <div className="max-w-8xl">
                <div className="grid grid-cols-4 gap-6">
                  {/* Left Panel */}
                  <div className="p-4 col-span-full lg:col-span-1 bg-white rounded-lg shadow-md">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex-none"></div>
                      <div className="w-[80%] flex justify-between items-center flex-wrap">
                        <h3 className="font-semibold">Manpreet</h3>
                        <button className="bg-orange-500 text-white px-3 py-1 rounded float-right">
                          Sale
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">+91 9578423456</p>
                      <p className="text-sm">manpreet@mailinator.com</p>
                    </div>

                    <div className="flex mt-4 justify-between items-center">
                      <label className="block font-semibold">Type</label>
                      <button className="w-[50%] bg-blue-100 text-blue-700 px-3 py-2 rounded mt-1">
                        Residential
                      </button>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                      <label className="block font-semibold">Lead Source</label>
                      <select className="w-[50%] bg-purple-100 text-purple-700 px-3 py-2 rounded mt-1">
                        <option>Direct Sales</option>
                      </select>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                      <label className="block font-semibold">
                        Internal Lead Source
                      </label>
                      <select className="w-[50%] bg-purple-100 text-purple-700 px-3 py-2 rounded mt-1">
                        <option>Internal</option>
                      </select>
                    </div>
                    <div className="mt-4 flex justify-between text-blue-600 text-sm">
                      <button onClick={() => setIsCustomerAccountOpen(true)}>
                        Customer Account +
                      </button>
                      <button onClick={() => setIsBrokerAccountOpen(true)}>
                        Broker Account +
                      </button>
                    </div>

                    <button
                      onClick={() => setIsQuickAccountOpen(true)}
                      className="mt-4 w-full bg-green-100 text-green-600 px-3 py-2 rounded-md flex items-center justify-center"
                    >
                      <span className="mr-2">+</span> Quick Unit Selection
                    </button>
                  </div>
                  {/* Right Panel */}
                  <div className="lg:col-span-3 col-span-full bg-white p-6 rounded-lg shadow-md w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Opportunity Subject*
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                          value="06-02-2025 12:05 Manpreet"
                        />
                      </div>

                      <div className=" w-full">
                        <label className="text-sm font-semibold">
                          Priority*
                        </label>
                        <select className="w-full border rounded-md px-3 py-2 mt-1 bg-yellow-100 text-yellow-700">
                          <option>Medium</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Earliest Occupation Date*
                        </label>
                        <input
                          type="date"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                          value="2025-01-10"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Contract Start Date*
                        </label>
                        <input
                          type="date"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                          value="2025-01-10"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Payment Period*
                        </label>
                        <select className="w-full border rounded-md px-3 py-2 mt-1">
                          <option>On Completion</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Payment Options*
                        </label>
                        <select className="w-full border rounded-md px-3 py-2 mt-1">
                          <option>Online Payment</option>
                        </select>
                      </div>
                      <hr className="border-gray-300 mt-2 mb-2 col-span-full lg:col-span-4" />
                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">City</label>
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">Country</label>
                        <input
                          type="text"
                          placeholder="Country"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Budget Amount
                        </label>
                        <input
                          type="text"
                          placeholder="Budget Amount"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div className="w-full">
                        <label className="text-sm font-semibold">
                          Probability
                        </label>
                        <input
                          type="number"
                          placeholder="Probability"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold">
                          Confirm Interest
                        </label>
                        <div className="flex space-x-4 mt-1">
                          <button className="px-4 py-2 bg-gray-100 rounded-md">
                            Yes
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            No
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-semibold">
                          Expected Close Period
                        </label>
                        <input
                          type="text"
                          placeholder="Expected Close Period"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold">
                          Monthly Salary
                        </label>
                        <input
                          type="text"
                          placeholder="Monthly Salary"
                          className="w-full border rounded-md px-3 py-2 mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div className="p-4">
                {/* Upload Box */}
                <label className="flex items-center justify-center w-full p-6 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileUpload1}
                  />
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-10 h-10 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 15a4 4 0 011.17-2.83M3 9a4 4 0 014-4h1m4-2l4 4m0 0l-4 4m4-4H9m6 6a4 4 0 010 8m0-8a4 4 0 00-4 4m0-4a4 4 0 00-4 4"
                      ></path>
                    </svg>
                    <span className="mt-2 text-blue-600">Upload file</span>
                  </div>
                </label>

                {/* File Previews */}
                {files.length > 0 && (
                  <div className="mt-4">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-white border rounded-lg shadow-sm"
                      >
                        <span className="truncate max-w-[70%]">
                          {file.name}
                        </span>
                        <button
                          onClick={() => handleDelete(index)}
                          className="px-2 py-1 text-red-600 border border-red-500 rounded hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                {/* Header Section */}
                <div className="flex items-start border-b pb-4">
                  <div className="relative">
                    <div className="w-48 h-48">
                      <img
                        src={img1}
                        alt="User"
                        className="w-40 h-40 rounded-md"
                      />
                      <span className="bg-blue-600 text-white float-left px-3 py-1 rounded-md text-sm">
                        Medium
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 w-full">
                    <h3 className="w-full text-md font-semibold mb-6">
                      OPPORTUNITY DETAILS
                    </h3>

                    <div className="w-[16%]">
                      <p className="text-gray-500">Contact Name</p>
                      <p className="text-sm font-semibold">Manpreet</p>
                    </div>
                    <div className="w-[16%]">
                      <p className="text-gray-500">Mobile</p>
                      <p className="text-sm font-semibold">+91 9578423456</p>
                    </div>
                    <div className="w-[16%]">
                      <p className="text-gray-500">Email Id</p>
                      <p className="text-sm font-semibold">
                        manpreet@mailinator.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-4 gap-6 mt-4 text-sm">
                  <div>
                    <p className="font-semibold">Earliest Occupation Date</p>
                    <p>10 Jan 25</p>
                  </div>
                  <div>
                    <p className="font-semibold">Contract Start Date</p>
                    <p>10 Jan 25</p>
                  </div>
                  <div>
                    <p className="font-semibold">Source Type</p>
                    <p className="text-blue-600 font-semibold">Direct Sales</p>
                  </div>
                  <div>
                    <p className="font-semibold">Priority</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Payment Period</p>
                    <p>On Completion</p>
                  </div>
                  <div>
                    <p className="font-semibold">Payment Options</p>
                    <p>Online Payment</p>
                  </div>
                  <div>
                    <p className="font-semibold">Wallet Credits Carry Over</p>
                    <p>No</p>
                  </div>
                  <div>
                    <p className="font-semibold">Company Name</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">City</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Country</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Budget Amount</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Probability</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Confirm Interest</p>
                    <p>No</p>
                  </div>
                  <div>
                    <p className="font-semibold">Expected Close Period</p>
                    <p>-</p>
                  </div>
                  <div>
                    <p className="font-semibold">Monthly Salary</p>
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </button>
        <div className="space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button
            onClick={currentStep === 3 ? update : nextStep}
            disabled={currentStep === 3}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {currentStep === 3 ? "Update" : "Next"}
          </button>
        </div>
      </div>

      <Dialog
        open={isCustomerAccountOpen}
        onClose={() => setIsCustomerAccountOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Customer Account</h2>
            <button
              onClick={() => setIsCustomerAccountOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Toggle for Primary Account */}
          <div className="flex items-center justify-between my-4">
            <label className="text-gray-600 text-sm">
              Show only primary account
            </label>
            <input
              type="checkbox"
              checked={showPrimary}
              onChange={() => setShowPrimary(!showPrimary)}
              className="toggle-checkbox"
            />
          </div>

          {/* Dropdown for Account Selection */}
          <select className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-50">
            <option>Select...</option>
            <option>Account 1</option>
            <option>Account 2</option>
          </select>
        </div>
      </Dialog>

      <Dialog
        open={isBrokerAccountOpen}
        onClose={() => setIsBrokerAccountOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Broker Account</h2>
            <button
              onClick={() => setIsBrokerAccountOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Dropdown for Account Selection */}
          <select className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-50">
            <option>Select...</option>
            <option>Account 1</option>
            <option>Account 2</option>
          </select>
        </div>
      </Dialog>

      <Dialog
        open={isQuickAccountOpen}
        onClose={() => setIsQuickAccountOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">
              Select against property units
            </h2>
            <button
              onClick={() => setIsQuickAccountOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Dropdown for Account Selection */}
          <select className="w-full border rounded-md px-3 py-2 mt-1 bg-gray-50">
            <option>Select Property</option>
            <option>Property 1</option>
            <option>Property 2</option>
          </select>
        </div>
      </Dialog>
    </div>
  );
};

export default OpportunityCRMDetails;
