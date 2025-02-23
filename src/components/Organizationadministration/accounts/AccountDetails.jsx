import React, { useState } from "react";

const AccountDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [accountType, setAccountType] = useState("AR");

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle account type toggle
  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const [isCompanyRegistered, setIsCompanyRegistered] = useState(true);
  const [isTaxRegistered, setIsTaxRegistered] = useState(true);
  const [crNumber, setCrNumber] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  const [accountType2, setAccountType2] = useState("Account Number");
  const handleAccountTypeChange2 = (type) => setAccountType2(type);

  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h3 className="text-md text-black font-semibold pb-5">
          Account Details
        </h3>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap justify-center">
          {/* Profile Image Section */}
          <div className="bg-white rounded-xl w-width20%">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
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
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer text-nowrap"
              >
                Upload Image
              </label>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="bg-white rounded-xl lg:w-width80% w-full">
            <h2 className="text-sm font-semibold mb-4">Profile Details</h2>

            {/* Account Type Toggle */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium">Account Type</span>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  className={`px-4 py-2 text-sm ${
                    accountType === "AP" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleAccountTypeChange("AP")}
                >
                  AP
                </button>
                <button
                  className={`px-4 py-2 text-sm ${
                    accountType === "AR" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleAccountTypeChange("AR")}
                >
                  AR
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Business Development"
                className="w-full text-md border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter Business Type"
                className="w-full text-md border border-gray-300 p-3 rounded-lg"
              />
              <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                <option>Select Customer Group</option>
                <option>Generic</option>
              </select>
              <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                <option>Select Relationship</option>
                <option>Customer</option>
              </select>
              <input
                type="text"
                placeholder="Enter Account Name"
                className="w-full text-md border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Enter Alternative Account Num"
                className="w-full text-md border border-gray-300 p-3 rounded-lg"
              />
            </div>

            {/* Business Description */}
            <div className="mt-4">
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg h-20"
                placeholder="Business Description"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h2 className="text-sm font-semibold text-black mb-4">
          Registered Detail
        </h2>

        <div className="flex justify-between gap-2 flex-wrap">
          {/* Registered Company */}
          <div>
            <label className="block text-gray-500 mb-2">
              Registered Company
            </label>
            <div className="flex items-center flex-wrap gap-2">
              <button
                className={`px-6 py-2 rounded-lg font-medium ${
                  isCompanyRegistered
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setIsCompanyRegistered(true)}
              >
                Yes
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-medium ${
                  !isCompanyRegistered
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setIsCompanyRegistered(false)}
              >
                No
              </button>
              <input
                type="text"
                placeholder="Enter CR Number"
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none md:w-60 w-full"
                value={crNumber}
                onChange={(e) => setCrNumber(e.target.value)}
                disabled={!isCompanyRegistered}
              />
            </div>
          </div>

          {/* Tax Registered */}
          <div>
            <label className="block text-gray-500 mb-2">Tax Registered</label>
            <div className="flex items-center flex-wrap gap-2">
              <button
                className={`px-6 py-2 rounded-lg font-medium ${
                  isTaxRegistered
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setIsTaxRegistered(true)}
              >
                Yes
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-medium ${
                  !isTaxRegistered
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setIsTaxRegistered(false)}
              >
                No
              </button>
              <input
                type="text"
                placeholder="Enter Tax Number"
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none md:w-60 w-full"
                value={taxNumber}
                onChange={(e) => setTaxNumber(e.target.value)}
                disabled={!isTaxRegistered}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h2 className="text-sm text-black font-semibold mb-4">Address</h2>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Door Number</label>
            <input
              type="text"
              placeholder="Enter Door Number"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Address Line 1</label>
            <input
              type="text"
              placeholder="Enter Address Line 1"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Address Line 2</label>
            <input
              type="text"
              placeholder="Enter Address Line 2"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Landmark</label>
            <input
              type="text"
              placeholder="Enter Landmark"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-4">
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Country</label>
            <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Country</option>
            </select>
          </div>
          <div className="flex flex-col md:w-width24% w-full">
            <label className="text-sm text-gray-500 mb-1">Pin code</label>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h2 className="text-sm text-black font-semibold mb-4">
          Contact & Other Information
        </h2>

        <div className="flex flex-wrap justify-between mt-4">
          <div className="flex flex-col w-full md:w-width24%">
            <label className="text-sm text-gray-500 mb-1">
              Business Phone*
            </label>
            <input
              type="number"
              placeholder="Enter Business Phone"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col w-full md:w-width24%">
            <label className="text-sm text-gray-500 mb-1">Mobile Phone*</label>
            <input
              type="number"
              placeholder="Enter Mobile Phone"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col w-full md:w-width24%">
            <label className="text-sm text-gray-500 mb-1">Email Address*</label>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col w-full md:w-width24%">
            <label className="text-sm text-gray-500 mb-1">Contact</label>
            <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Contact</option>
              <option>Ahmad</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h2 className="text-sm text-black font-semibold mb-4">
          Banking Basic Details
        </h2>

        {/* Toggle between Account Number and IBAN */}
        <div className="flex md:w-width40% w-full">
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-l-lg ${
              accountType2 === "Account Number"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleAccountTypeChange2("Account Number")}
          >
            Account Number
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-r-lg ${
              accountType2 === "IBAN Number"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleAccountTypeChange2("IBAN Number")}
          >
            IBAN Number
          </button>
        </div>

        {/* Form Fields */}
        <div>
          {accountType === "Account Number" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Account Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Account Number"
              />
            </div>
          )}
          {accountType === "IBAN Number" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                IBAN Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter IBAN Number"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <div className="md:w-width24% w-full mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                Account Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Account Number"
              />
            </div>
            <div className="md:w-width24% w-full mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                Bank Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Bank Name"
              />
            </div>

            <div className="md:w-width24% w-full mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                Branch Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Branch Name"
              />
            </div>

            <div className="md:w-width24% w-full mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                Currency
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div className="md:w-width24% w-full">
              <label className="block text-sm text-gray-500 mb-1">
                Bank Routing Type
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Bank Routing Type</option>
                <option value="SWIFT">SWIFT</option>
                <option value="ABA">ABA</option>
              </select>
            </div>

            <div className="md:w-width24% w-full">
              <label className="block text-sm text-gray-500 mb-1">
                Bank Routing Code
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Bank Routing Code"
              />
            </div>

            <div className="md:w-width24% w-full">
              <label className="block text-sm text-gray-500 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Address Line 1"
              />
            </div>

            <div className="md:w-width24% w-full">
              <label className="block text-sm text-gray-500 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Address Line 2"
              />
            </div>

            <div className="md:w-width24% w-full">
              <label className="block text-sm text-gray-500 mb-1">City</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter City"
              />
            </div>

            <div className="md:w-width24% w-full">
              <label className=" block text-sm text-gray-500 mb-1">
                Country
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <h2 className="text-sm text-black font-semibold mb-4">ID Details</h2>
        <div className="flex flex-wrap gap-3">
          {/* National ID */}
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              National ID
            </label>
            <input
              type="text"
              name="nationalID"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter National ID"
            />
          </div>
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              National ID Expiry
            </label>
            <input
              type="date"
              name="nationalIDExpiry"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Passport ID */}
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Passport ID
            </label>
            <input
              type="text"
              name="passportID"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Passport ID"
            />
          </div>
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Passport Expiry
            </label>
            <input
              type="date"
              name="passportExpiry"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Resident ID */}
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Resident ID
            </label>
            <input
              type="text"
              name="residentID"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Resident ID"
            />
          </div>
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Resident ID Expiry
            </label>
            <input
              type="date"
              name="residentIDExpiry"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Visa Number */}
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Visa Number
            </label>
            <input
              type="text"
              name="visaNumber"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Visa Number"
            />
          </div>
          <div className="md:w-width24% w-full">
            <label className="block text-sm text-gray-500 mb-1">
              Visa Expiry
            </label>
            <input
              type="date"
              name="visaExpiry"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
