import React, { useState } from "react";

const Kyc = () => {
  const [proofItems, setProofItems] = useState([]);
  const [currentProofType, setCurrentProofType] = useState("");

  const proofTypes = [
    "Aadhaar",
    "Passport",
    "Driving License",
    "Voter ID",
    "Other",
  ];

  const handleAddProofItem = () => {
    setProofItems([...proofItems, { type: currentProofType, file: null }]);
    setCurrentProofType("");
  };

  const handleDeleteProofItem = (index) => {
    setProofItems(proofItems.filter((_, i) => i !== index));
  };

  const handleFileChange = (index, file) => {
    const updatedProofItems = [...proofItems];
    updatedProofItems[index].file = file;
    setProofItems(updatedProofItems);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-3">
      <h2 className="text-md text-black font-semibold pb-4">Proof Details</h2>
      {proofItems.map((item, index) => (
        <div
          key={index}
          className="mb-4 flex flex-col md:flex-row md:items-center gap-4"
        >
          <div className="flex-1">
            <p className="text-sm font-semibold text-black mb-2">{item.type} Details</p>
            <div className="flex flex-wrap gap-3">
              <div className="w-width32%">
              <label className="inline-block text-sm text-gray-500 mb-1">Name As In Proof*</label>
              <input
                type="text"
                placeholder="Name As In Proof"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              </div>
             <div className="w-width32%">
             <label className="inline-block text-sm text-gray-500 mb-1">ID Proof Number*</label>
             <input
                type="text"
                placeholder="Enter ID Proof Number"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
             </div>
              <div className="w-width32%">
              <label className="inline-block text-sm text-gray-500 mb-1">Valid From*</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Valid From"
              />
              </div>
              <div className="w-width32%">
              <label className="inline-block text-sm text-gray-500 mb-1">Valid To*</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Valid To"
              />
              </div>
              <div className="w-width32%">
              <label className="inline-block text-sm text-gray-500 mb-1">Issuing Country*</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Select Issuing Country"
              >
                <option>Select Issuing Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              </div>
              <div className="w-width32%  gap-4">
                <p className="block text-sm text-gray-500 mb-1">Mandatory Verify*</p>
                <label className="inline-block h-12 border border-gray-300 rounded-lg p-2">
                  <input type="radio" name={`verify-${index}`} /> Yes
                </label>
                <label className="inline-block h-12 ml-5 border border-gray-300 rounded-lg p-2">
                  <input type="radio" name={`verify-${index}`} /> No
                </label>
              </div>
              <div className="w-width32%">
                <label className="inline-block text-sm text-gray-500 mb-1">Upload Document</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>
                    handleFileChange(index, e.target.files[0])
                  }
                />
                {item.file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Uploaded File: <span className="font-medium">{item.file.name}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDeleteProofItem(index)}
          >
            🗑️ Delete
          </button>
        </div>
      ))}

      <div className="flex items-center gap-4">
        <select
          className="border rounded-lg p-2 w-full md:w-1/2"
          value={currentProofType}
          onChange={(e) => setCurrentProofType(e.target.value)}
        >
          <option value="">Select Proof Type</option>
          {proofTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddProofItem}
          className={`px-4 py-2 rounded-lg ${
            currentProofType
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!currentProofType}
        >
          Add New Proof Item
        </button>
      </div>
    </div>
  );
};

export default Kyc;
