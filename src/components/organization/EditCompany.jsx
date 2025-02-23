import React, { useState, useCallback } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import {
  FaBuilding,
  FaCogs,
  FaFileAlt,
  FaImages,
  FaTrash,
} from "react-icons/fa";

const EditCompany = () => {
  const tabs = [
    {
      id: 1,
      name: "Company Profile",
      description: "Enter Profile, Address & Contact Details",
      icon: <FaBuilding />,
    },
    {
      id: 2,
      name: "Company Settings",
      description: "Enter Company Settings",
      icon: <FaCogs />,
    },
    {
      id: 3,
      name: "KYC Details",
      description: "Enter KYC Details",
      icon: <FaFileAlt />,
    },
    {
      id: 4,
      name: "Attachments",
      description: "Upload Assets Like Image, Videos",
      icon: <FaImages />,
    },
  ];

  const verticaltabs = [
    { id: 1, name: "Basic Settings" },
    { id: 2, name: "Advance Setting" },
    { id: 3, name: "Controls" },
    { id: 4, name: "Gateway Controls" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const [activeTab1, setActiveTab1] = useState(1);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 13.0827,
    lng: 80.2707,
  };

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = useCallback((mapInstance) => setMap(mapInstance), []);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(14);
      }
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [accountType] = useState("AR");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const [accountType2, setAccountType2] = useState("Account Number");
  const handleAccountTypeChange2 = (type) => setAccountType2(type);

  const handleBack = () => {
    window.history.back();
  };

  const [features, setFeatures] = useState({
    reservation: true,
    autoDeposit: false,
    autoReservation: false,
    gracePeriod: true,
    AmenitiesGOTO: true,
    ExploreCards: true,
    PrivateListings: true,
    RealtyGOTO: true,
    Township: true,
    Chat: true,
    Contacts: true,
    FileManager: true,
    Investments: true,
    InvoiceWidget: true,
    KYC: true,
    visitorPass: false,
    unitRequest: false,
  });

  const toggleFeature = (featureName) => {
    setFeatures((prev) => ({
      ...prev,
      [featureName]: !prev[featureName],
    }));
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

  const [files, setFiles] = useState([]);

  const handleFileUpload1 = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="bg-white flex justify-between items-center mb-4 p-2">
        <h1 className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          <span>Edit Companies</span>
        </h1>
        <div className="flex justify-end gap-2 mt-4">
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

      {/* Tab Navigation */}
      <div className="flex border-b w-full overflow-x-auto px-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.icon}
            <div>
              <p className="text-nowrap">{tab.name}</p>
              <p className="text-xs">{tab.description}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-end self-end gap-2 mt-4 ml-8 lg:ml-auto">
          <button className="px-4 py-2 border border-gray-400 rounded-md">
            Cancel
          </button>
          <button className="px-4 py-2 border border-gray-400 rounded-md">
            Submit
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 1 && (
          <p>
            <div className="p-2 m-1">
              <div className="flex gap-4 flex-wrap lg:flex-nowrap w-full">
                {/* Profile Image Section */}
                <div className="bg-white rounded-xl w-full lg:w-80 p-2">
                  <div className="flex flex-col items-center">
                    <h3 className="text-sm font-semibold mb-8">Logo Image</h3>
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

                {/* Profile Details Section */}
                <div className="bg-white rounded-xl w-full lg:w-width90% p-2">
                  <h2 className="text-sm font-semibold mb-4">
                    Profile Details
                  </h2>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Company Code"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Company name"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company Long Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Company Long Name"
                        className="w-full text-md border border-gray-300 p-3 rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Status <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company's Country{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Select Country</option>
                        <option>Afghanistan</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-1">
                        Company Type <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full text-md border text-light-500 border-gray-300 p-3 rounded-lg">
                        <option>Select Company Type</option>
                        <option>Individual</option>
                        <option>Company</option>
                      </select>
                    </div>
                  </div>

                  {/* Business Description */}
                  <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-1">
                      Business Description
                    </label>
                    <textarea
                      className="w-full border border-gray-300 p-3 rounded-lg h-20"
                      placeholder="Business Description"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-wrap shadow-md rounded-md p-4 m-3">
              <div className="bg-white flex rounded-xl w-full lg:w-[50%] p-2">
                <div className="w-full">
                  <h2 className="text-sm text-black font-semibold mb-2">
                    Address
                  </h2>
                  <LoadScript
                    googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                    libraries={["places"]}
                  >
                    <div className="relative w-full mb-2">
                      <Autocomplete
                        onLoad={setAutocomplete}
                        onPlaceChanged={onPlaceChanged}
                      >
                        <input
                          type="text"
                          placeholder="Enter a location"
                          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </Autocomplete>
                    </div>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={12}
                      onLoad={onLoad}
                    />
                  </LoadScript>
                </div>
              </div>

              <div className="bg-white rounded-xl w-full lg:w-[50%] p-2 mt-6">
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
                </div>

                <div className="flex flex-wrap justify-between mt-4">
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
                </div>

                <div className="flex flex-wrap justify-between mt-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">State</label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Country
                    </label>
                    <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>Select Country</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
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

                <div className="flex flex-wrap justify-between mt-4">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Latitude
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Latitude"
                      className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">
                      Longitude
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Longitude"
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

              <div className="flex flex-wrap justify-between mt-4">
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Mobile Phone*
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Mobile Phone"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">Website*</label>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 m-3">
              <h2 className="text-sm text-black font-semibold mb-4">Tax</h2>

              <div className="flex flex-wrap justify-between mt-4">
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Country Taxation System*
                  </label>
                  <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Select Taxation System</option>
                    <option>CGST</option>
                    <option>SGST</option>
                    <option>IGST</option>
                    <option>SST</option>
                    <option>Sales Tax</option>
                  </select>
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Tax Registration Number*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Tax Registration Number"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    Tax Group*
                  </label>
                  <select className="border text-light-500 border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Select Tax Group</option>
                  </select>
                </div>
                <div className="flex flex-col w-width24%">
                  <label className="text-sm text-gray-500 mb-1">
                    CR Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter CR Number"
                    className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 m-3">
              <h2 className="text-sm text-black font-semibold mb-4">
                Banking Basic Details
              </h2>

              {/* Toggle between Account Number and IBAN */}
              <div className="flex w-width40%"></div>

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
                  <div className="w-[19%] mt-4">
                    <label className="block text-sm text-gray-500 mb-3">
                      Account Type
                    </label>
                    <button
                      className={`py-2 px-2 text-sm font-medium rounded-l-lg ${
                        accountType2 === "Account Number"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleAccountTypeChange2("Account Number")}
                    >
                      Account Number
                    </button>
                    <button
                      className={` py-2 px-2 text-sm font-medium rounded-r-lg ${
                        accountType2 === "IBAN Number"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleAccountTypeChange2("IBAN Number")}
                    >
                      IBAN Number
                    </button>
                  </div>

                  <div className="w-[19%] mt-4">
                    <label className="block text-sm text-gray-500 mb-1">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Account Number"
                    />
                  </div>
                  <div className="w-[19%] mt-4">
                    <label className="block text-sm text-gray-500 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Bank Name"
                    />
                  </div>

                  <div className="w-[19%] mt-4">
                    <label className="block text-sm text-gray-500 mb-1">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Branch Name"
                    />
                  </div>

                  <div className="w-[19%] mt-4">
                    <label className="block text-sm text-gray-500 mb-1">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Address Line 1"
                    />
                  </div>

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Address Line 2"
                    />
                  </div>

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter City"
                    />
                  </div>

                  <div className="w-[19%]">
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

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      Bank Routing Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Select Bank Routing Type</option>
                      <option value="SWIFT">SWIFT</option>
                      <option value="ABA">ABA</option>
                    </select>
                  </div>

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      Bank Routing Code
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Bank Routing Code"
                    />
                  </div>

                  <div className="w-[19%]">
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

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      Preferred Cash Collection Office
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Preferred Cash Collection Office"
                    />
                  </div>

                  <div className="w-[19%]">
                    <label className="block text-sm text-gray-500 mb-1">
                      Cheque Payment beneficiary Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 text-light-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter Cheque Payment beneficiary Name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4 m-3">
              <h2 className="text-sm text-black font-semibold mb-4">
                Terms & Conditions
              </h2>
              <div className="mt-4">
                <textarea
                  className="w-full border border-gray-300 p-3 rounded-lg h-20"
                  placeholder="Terms & Conditions"
                />
              </div>
            </div>
          </p>
        )}
        {activeTab === 2 && (
          <p>
            <div className="flex bg-gray-100 p-6 min-h-screen flex-wrap lg:flex-nowrap">
              {/* Sidebar */}
              <div className="lg:w-1/4 w-full bg-white shadow-md rounded-lg p-4">
                {verticaltabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab1(tab.id)}
                    className={`p-3 cursor-pointer rounded-md ${
                      activeTab1 === tab.id
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab.name}
                  </div>
                ))}
              </div>

              {/* Content Section */}
              <div className="lg:w-3/4 w-full bg-white shadow-md rounded-lg p-6 ml-4">
                {activeTab1 === 1 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Basic Settings
                    </h2>
                    <div className="space-y-4">
                      {/* Default Base Currency */}
                      <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                        <span>Default Base Currency</span>
                        <select className="border border-gray-300 p-2 rounded-md">
                          <option>India Rupee</option>
                          <option>USD</option>
                          <option>Euro</option>
                        </select>
                      </div>

                      {/* Default Time Zone */}
                      <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                        <span>Default Time Zone</span>
                        <select className="border border-gray-300 p-2 rounded-md">
                          <option>Asia/Kolkata</option>
                          <option>UTC</option>
                          <option>America/New York</option>
                        </select>
                      </div>

                      {/* Upfront Charges */}
                      <div className="flex justify-between p-3 bg-gray-100 rounded-md">
                        <span>Upfront Charges</span>
                        <select className="border border-gray-300 p-2 rounded-md">
                          <option>Select Item ...</option>
                        </select>
                        <select className="border border-gray-300 p-2 rounded-md">
                          <option>Select Item ...</option>
                        </select>
                        <select className="border border-gray-300 p-2 rounded-md">
                          <option>Select Item ...</option>
                        </select>
                      </div>

                      {/* Invite Mail Trigger */}
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Invite Mail Trigger</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Yes
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            No
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Agreement Renewal</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Yes
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            No
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Allow Extension</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Yes
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            No
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Renewal Day</span>
                        <div className="flex gap-4 mt-2">
                          <input
                            type="number"
                            placeholder="Enter Renewal Day"
                            className="border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Unit Measurement</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Sq. Meter
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Sq. Feet
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Hectare
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Cents
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Sq. Yard
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Sq. Mile
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Acre
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Object
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Seat
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Quotation Validity</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            None
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Billing Payment Period</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Quarterly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Monthly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Weekly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Upfront
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Milestone Based
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Yearly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Half Yearly
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Lease Period</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Yearly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Daily
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Monthly
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Weekly
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Billing Payment Terms</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Net 90
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Net 7
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Net 60
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Net 45
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Net 30
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Immediate
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Billing Cycle Methods</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Post-Paid
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Prepaid
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Billing Generate Date</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Agreement Date
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Custom Date
                          </button>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-md">
                        <span>Default Payment Gateway</span>
                        <div className="flex gap-4 mt-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                            Company
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            None
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md">
                            Solution Provider
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab1 === 2 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Advance Setting
                    </h2>

                    <div className="space-y-4">
                      {/* Enable Reservation Feature */}
                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>Enable Reservation Feature</span>
                        <div className="flex gap-2 items-center">
                          {features.reservation && (
                            <>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                None
                              </button>
                              <input
                                type="text"
                                className="border border-gray-300 p-2 w-16 rounded-md"
                              />
                            </>
                          )}
                          <button
                            className={`w-12 h-6 rounded-full ${
                              features.reservation
                                ? "bg-green-500"
                                : "bg-gray-300"
                            } flex items-center px-1`}
                            onClick={() => toggleFeature("reservation")}
                          >
                            <div
                              className={`h-5 w-5 bg-white rounded-full transition ${
                                features.reservation
                                  ? "translate-x-6"
                                  : "translate-x-0"
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>

                      {/* Enable Auto Deposit Amount Calculation Feature */}
                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>
                          Enable Auto Deposit Amount Calculation Feature
                        </span>
                        <button
                          className={`w-12 h-6 rounded-full ${
                            features.autoDeposit
                              ? "bg-green-500"
                              : "bg-gray-300"
                          } flex items-center px-1`}
                          onClick={() => toggleFeature("autoDeposit")}
                        >
                          <div
                            className={`h-5 w-5 bg-white rounded-full transition ${
                              features.autoDeposit
                                ? "translate-x-6"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </div>

                      {/* Enable Auto Reservation Amount Calculation Feature */}
                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>
                          Enable Auto Reservation Amount Calculation Feature
                        </span>
                        <button
                          className={`w-12 h-6 rounded-full ${
                            features.autoReservation
                              ? "bg-green-500"
                              : "bg-gray-300"
                          } flex items-center px-1`}
                          onClick={() => toggleFeature("autoReservation")}
                        >
                          <div
                            className={`h-5 w-5 bg-white rounded-full transition ${
                              features.autoReservation
                                ? "translate-x-6"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </div>

                      {/* Enable Grace Period */}
                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>Enable Grace Period</span>
                        <div className="flex gap-2 items-center">
                          {features.gracePeriod && (
                            <>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                None
                              </button>
                              <input
                                type="text"
                                className="border border-gray-300 p-2 w-16 rounded-md"
                              />
                            </>
                          )}
                          <button
                            className={`w-12 h-6 rounded-full ${
                              features.gracePeriod
                                ? "bg-green-500"
                                : "bg-gray-300"
                            } flex items-center px-1`}
                            onClick={() => toggleFeature("gracePeriod")}
                          >
                            <div
                              className={`h-5 w-5 bg-white rounded-full transition ${
                                features.gracePeriod
                                  ? "translate-x-6"
                                  : "translate-x-0"
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab1 === 3 && (
                  <div>
                    <div className="bg-white border-b sticky top-0 z-10">
                      <h2 className="text-lg font-semibold">Controls</h2>
                    </div>

                    {/* Scrollable Content */}
                    <div className="max-h-[400px] overflow-y-auto p-4">
                      <div>
                        <h3 className="text-md font-semibold mb-2">Tenant</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            "Amenities",
                            "Amenity Booking",
                            "Bookings",
                            "Change Request",
                            "Chat",
                            "Committee Members",
                            "Contacts",
                            "Delivery & Parcels",
                            "Directory",
                            "Discussion Group",
                            "Emergency Number",
                            "Entry Log",
                            "Feedback",
                            "File Manager",
                            "Guest Parking",
                            "Inventory",
                            "KYC",
                            "Letters",
                            "Member Logins",
                            "Occupants",
                            "Pantry Order",
                            "Parking",
                            "Personal",
                            "Polls",
                            "Registered Worker",
                            "Requests",
                            "Service Reports",
                            "Statement",
                          ].map((feature) => (
                            <div
                              key={feature}
                              className="flex justify-between p-3 bg-gray-100 rounded-md"
                            >
                              <span>{feature}</span>
                              <button
                                className={`w-12 h-6 rounded-full ${
                                  features[feature]
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                } flex items-center px-1`}
                                onClick={() => toggleFeature(feature)}
                              >
                                <div
                                  className={`h-5 w-5 bg-white rounded-full transition ${
                                    features[feature]
                                      ? "translate-x-6"
                                      : "translate-x-0"
                                  }`}
                                ></div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Listings Promotion */}
                      <div>
                        <h3 className="text-md font-semibold mb-2">
                          Listings Promotion
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            "AmenitiesGOTO",
                            "ExploreCards",
                            "PrivateListings",
                            "RealtyGOTO",
                            "Township",
                          ].map((feature) => (
                            <div
                              key={feature}
                              className="flex justify-between p-3 bg-gray-100 rounded-md"
                            >
                              <span>{feature}</span>
                              <button
                                className={`w-12 h-6 rounded-full ${
                                  features[feature]
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                } flex items-center px-1`}
                                onClick={() => toggleFeature(feature)}
                              >
                                <div
                                  className={`h-5 w-5 bg-white rounded-full transition ${
                                    features[feature]
                                      ? "translate-x-6"
                                      : "translate-x-0"
                                  }`}
                                ></div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Owner Section */}
                      <div className="mt-6">
                        <h3 className="text-md font-semibold mb-2">Owner</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            "Chat",
                            "Contacts",
                            "FileManager",
                            "Investments",
                            "InvoiceWidget",
                            "KYC",
                          ].map((feature) => (
                            <div
                              key={feature}
                              className="flex justify-between p-3 bg-gray-100 rounded-md"
                            >
                              <span>{feature}</span>
                              <button
                                className={`w-12 h-6 rounded-full ${
                                  features[feature]
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                } flex items-center px-1`}
                                onClick={() => toggleFeature(feature)}
                              >
                                <div
                                  className={`h-5 w-5 bg-white rounded-full transition ${
                                    features[feature]
                                      ? "translate-x-6"
                                      : "translate-x-0"
                                  }`}
                                ></div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab1 === 4 && (
                  <div>
                    <h2 className="text-lg font-semibold mb-4">
                      Gateway Controls
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>Visitor Pass Auto Approval</span>
                        <button
                          className={`w-12 h-6 rounded-full ${
                            features.visitorPass
                              ? "bg-green-500"
                              : "bg-gray-300"
                          } flex items-center px-1`}
                          onClick={() => toggleFeature("visitorPass")}
                        >
                          <div
                            className={`h-5 w-5 bg-white rounded-full transition ${
                              features.visitorPass
                                ? "translate-x-6"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </div>

                      <div className="flex justify-between p-4 bg-gray-100 rounded-md">
                        <span>Unit Request Access Auto Approval</span>
                        <button
                          className={`w-12 h-6 rounded-full ${
                            features.unitRequest
                              ? "bg-green-500"
                              : "bg-gray-300"
                          } flex items-center px-1`}
                          onClick={() => toggleFeature("unitRequest")}
                        >
                          <div
                            className={`h-5 w-5 bg-white rounded-full transition ${
                              features.unitRequest
                                ? "translate-x-6"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </p>
        )}
        {activeTab === 3 && (
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

                  <div className="grid grid-cols-6 gap-4 items-center">
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
                    <div className="w-40 h-40 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-md">
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
        {activeTab === 4 && (
          <p>
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
                      <span className="truncate max-w-[70%]">{file.name}</span>
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
          </p>
        )}
      </div>
    </div>
  );
};

export default EditCompany;
