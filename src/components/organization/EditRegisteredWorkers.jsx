import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FaBuilding, FaFileAlt, FaTrash } from "react-icons/fa";

const EditRegisteredWorkers = () => {
  const tabs = [
    { id: 1, name: "Contact Details", icon: <FaBuilding /> },
    { id: 2, name: "KYC Details", icon: <FaFileAlt /> },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const [accountType2, setAccountType2] = useState("Yes");
  const handleAccountTypeChange2 = (type) => setAccountType2(type);

  const handleBack = () => {
    window.history.back();
  };

  const [proofs, setProofs] = useState([
    {
      id: 1,
      name: "Compaany",
      idNumber: "ehiedeqigi",
      validFrom: "08 Oct 20",
      validTo: "14 Oct 37",
      country: "India",
      mandatoryVerify: true,
      document: null,
    },
  ]);

  const handleFileUpload = (e, proofId) => {
    const file = e.target.files[0];
    setProofs((prevProofs) =>
      prevProofs.map((proof) =>
        proof.id === proofId ? { ...proof, document: file } : proof
      )
    );
  };

  const toggleMandatory = (proofId) => {
    setProofs((prevProofs) =>
      prevProofs.map((proof) =>
        proof.id === proofId
          ? { ...proof, mandatoryVerify: !proof.mandatoryVerify }
          : proof
      )
    );
  };

  const addProofItem = () => {
    setProofs([
      ...proofs,
      {
        id: proofs.length + 1,
        name: "",
        idNumber: "",
        validFrom: "",
        validTo: "",
        country: "",
        mandatoryVerify: false,
        document: null,
      },
    ]);
  };

  const deleteProofItem = (proofId) => {
    setProofs(proofs.filter((proof) => proof.id !== proofId));
  };

  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-4 p-2 flex-wrap">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>Registered workers Add / Edit</span>
        </h1>
        <div className="flex justify-end w-full lg:w-fit gap-2 mt-4 px-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === tabs.length
                ? "bg-blue-600 text-white"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={() =>
              setActiveTab((next) => Math.min(next - 1, tabs.length))
            }
          >
            Prev
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === tabs.length
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
            onClick={() =>
              setActiveTab((prev) => Math.min(prev + 1, tabs.length))
            }
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex border-b w-full overflow-x-auto scrollbar-hide px-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex text-nowrap items-center gap-2 px-4 py-2 cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.icon}
            <div>
              <p>{tab.name}</p>
              <p className="text-xs">{tab.description}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-2 mt-4 lg:ml-auto ml-8">
          <button className="px-4 py-2 border border-gray-400 rounded-md">
            Cancel
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-md">
            Submit
          </button>
        </div>
      </div>

      <div className="p-4">
        {activeTab === 1 && (
          <p>
            <div className="p-2 m-1">
              <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                <div className="bg-white rounded-xl w-full lg:w-80 p-2">
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold mb-8">
                      Profile Picture
                    </h3>
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden mb-4">
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v11a4 4 0 004 4h10a4 4 0 004-4V7M3 7l9-5 9 5M3 7l9 5 9-5M9 21V9m6 12V9"
                          />
                        </svg>
                      )}
                    </div>
                    <input
                      type="file"
                      id="imageUpload"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <label
                      htmlFor="imageUpload"
                      className="mt-4 bg-blue-500 text-white py-2 px-2 rounded-lg cursor-pointer"
                    >
                      Upload Image
                    </label>
                  </div>
                </div>

                <div className="bg-white rounded-xl w-full p-2">
                  <h2 className="text-sm font-semibold mb-4">
                    Profile Details
                  </h2>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Company"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        PROPERTY <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter PROPERTY"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Nationality <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Select Nationality</option>
                        <option>Afghanistan</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Profession <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Select Profession</option>
                        <option>Security Guard</option>
                        <option>Guard</option>
                        <option>Inspector</option>
                        <option>Water Supplier</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Barred <span className="text-red-500">*</span>
                      </label>
                      <button
                        className={`py-2 px-2 text-sm font-medium rounded-l-lg ${
                          accountType2 === "Yes"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => handleAccountTypeChange2("Yes")}
                      >
                        Yes
                      </button>
                      <button
                        className={` py-2 px-2 text-sm font-medium rounded-r-lg ${
                          accountType2 === "No"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => handleAccountTypeChange2("No")}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      className="w-full border border-gray-300 p-3 rounded-lg h-20"
                      placeholder="Description"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-wrap shadow-md rounded-md p-4 m-3">
              <div className="bg-white rounded-xl w-full p-2">
                <h2 className="text-sm text-black font-semibold mb-2">
                  Address
                </h2>
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Door Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Door Number"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Address Line 1"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Address Line 2"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Landmark
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Landmark"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">Area</label>
                    <input
                      type="text"
                      placeholder="Enter Area"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-sm text-gray-500 mb-1">State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-sm text-gray-500 mb-1">
                      Country
                    </label>
                    <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>Select Country</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-sm text-gray-500 mb-1">
                      Pin code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 m-3">
              <h2 className="text-sm text-black font-semibold mb-4">
                Contact & Other Information
              </h2>
              <div className="flex flex-wrap justify-between mt-4 gap-4">
                <div className="flex flex-col w-full lg:w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Primary Telephone*
                  </label>
                  <input
                    type="number"
                    placeholder="Primary Telephone"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Primary Mobile*
                  </label>
                  <input
                    type="number"
                    placeholder="Primary Mobile"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Primary Email Address*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>
          </p>
        )}
        {activeTab === 2 && (
          <p>
            <div className="w-full bg-white shadow-lg rounded-lg p-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">PROOF DETAILS</h2>
                <button
                  onClick={addProofItem}
                  className="text-blue-500 hover:underline"
                >
                  Add New Proof Item
                </button>
              </div>

              {proofs.map((proof) => (
                <div
                  key={proof.id}
                  className="p-4 border rounded-lg bg-gray-50 mb-4"
                >
                  <h3 className="text-md font-semibold mb-2">
                    Company Aadhaar
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 items-center">
                    {/* Name */}
                    <div>
                      <label className="text-sm font-medium">
                        Name As In Proof*
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded-md"
                        value={proof.name}
                        onChange={(e) =>
                          setProofs((prev) =>
                            prev.map((p) =>
                              p.id === proof.id
                                ? { ...p, name: e.target.value }
                                : p
                            )
                          )
                        }
                      />
                    </div>

                    {/* ID Proof Number */}
                    <div>
                      <label className="text-sm font-medium">
                        ID Proof Number*
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded-md"
                        value={proof.idNumber}
                        onChange={(e) =>
                          setProofs((prev) =>
                            prev.map((p) =>
                              p.id === proof.id
                                ? { ...p, idNumber: e.target.value }
                                : p
                            )
                          )
                        }
                      />
                    </div>

                    {/* Valid From */}
                    <div>
                      <label className="text-sm font-medium">Valid From*</label>
                      <input
                        type="date"
                        className="border p-2 w-full rounded-md"
                        value={proof.validFrom}
                        onChange={(e) =>
                          setProofs((prev) =>
                            prev.map((p) =>
                              p.id === proof.id
                                ? { ...p, validFrom: e.target.value }
                                : p
                            )
                          )
                        }
                      />
                    </div>

                    {/* Valid To */}
                    <div>
                      <label className="text-sm font-medium">Valid To*</label>
                      <input
                        type="date"
                        className="border p-2 w-full rounded-md"
                        value={proof.validTo}
                        onChange={(e) =>
                          setProofs((prev) =>
                            prev.map((p) =>
                              p.id === proof.id
                                ? { ...p, validTo: e.target.value }
                                : p
                            )
                          )
                        }
                      />
                    </div>

                    {/* Issuing Country */}
                    <div>
                      <label className="text-sm font-medium">
                        Issuing Country*
                      </label>
                      <select
                        className="border p-2 w-full rounded-md"
                        value={proof.country}
                        onChange={(e) =>
                          setProofs((prev) =>
                            prev.map((p) =>
                              p.id === proof.id
                                ? { ...p, country: e.target.value }
                                : p
                            )
                          )
                        }
                      >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                      </select>
                    </div>

                    {/* Mandatory Verify */}
                    <div>
                      <label className="text-sm font-medium">
                        Mandatory Verify*
                      </label>
                      <div className="flex space-x-2">
                        <button
                          className={`px-4 py-2 rounded-md ${
                            proof.mandatoryVerify
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={() => toggleMandatory(proof.id)}
                        >
                          Yes
                        </button>
                        <button
                          className={`px-4 py-2 rounded-md ${
                            !proof.mandatoryVerify
                              ? "bg-blue-500 text-white"
                              : "bg-gray-300"
                          }`}
                          onClick={() => toggleMandatory(proof.id)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Documents Upload */}
                  <div className="mt-4 flex space-x-4 items-center">
                    <div className="w-fit px-4 h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, proof.id)}
                        />
                        {proof.document ? (
                          <img
                            src={URL.createObjectURL(proof.document)}
                            alt="Document"
                            className="h-full w-full object-cover rounded-md"
                          />
                        ) : (
                          <span className="text-gray-500">
                            Upload Documents Here
                          </span>
                        )}
                      </label>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteProofItem(proof.id)}
                      className="text-gray-600 hover:text-red-500"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </p>
        )}
      </div>
    </div>
  );
};

export default EditRegisteredWorkers;
