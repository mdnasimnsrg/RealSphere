import React, {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FaBuilding, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisteredWorkersDetails = () => {

    const handleBack = () => {
        window.history.back();
    };

    const tabs = [
        { id: 1, name: "Contact Details", icon: <FaBuilding /> },
        { id: 2, name: "KYC Details", icon: <FaFileAlt /> },
    ];

    const [activeTab, setActiveTab] = useState(1);

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
            <span>Registered Workers</span>
          </h1>
          <div className="flex justify-end gap-2 mt-4">
                <Link to='/edit-registered-workers' className="px-4 py-2 rounded-md bg-blue-600 text-white">Edit</Link>
            </div>
        </div>

        <div className="flex border-b">
            {tabs.map((tab) => (
            <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                activeTab === tab.id ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-500"
                }`}
            >
                {tab.icon}
                {tab.name}
            </div>
            ))}
            
        </div>

        <div className="p-4">
            {activeTab === 1 && 
                <p>
                    <div className="bg-white shadow-md rounded-md p-4 m-3">
                        <div>
                            {/* Profile Section */}
                            <div className="flex items-start gap-6 border-b pb-4">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-gray-500 text-4xl">🖼️</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1 w-full">
                                    <div className="w-full text-sm font-semibold">Profile Details</div>

                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Company name</p>
                                        <p className="text-sm font-semibold">Business Development</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Property name</p>
                                        <p className="text-sm font-semibold">Mohanadiah</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Name</p>
                                        <p className="text-sm font-semibold">Iqbal</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Gender</p>
                                        <p className="text-sm font-semibold">Male</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Nationality</p>
                                        <p className="text-sm font-semibold">Oman</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Profession</p>
                                        <p className="text-sm font-semibold">Doctor</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Barred</p>
                                        <p className="text-sm font-semibold">No</p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500"></p>
                                        <p className="text-sm font-semibold"></p>
                                    </div>
                                    <div className="w-[20%]">
                                        <p className="text-gray-500">Business Description</p>
                                        <p className="text-sm font-semibold">-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="p-3">
                        <div className="flex flex-col md:flex-row gap-3">
                            {/* Address Section */}
                            <div className="bg-white rounded-md shadow-md p-4 border border-gray-200 flex-1">
                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                    <svg
                                    className="w-5 h-5 text-gray-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
                                    </svg>
                                    Address
                                </div>
                                <p className="mt-4 font-medium text-sm">21, River View Residency 2nd Street, IAS colony, Kancheepuram, Tamil Nadu, India, 600097</p>
                                <p className="font-normal">
                                Latitude : <span className="font-medium text-sm">12.9182643</span>
                                </p>
                                <p className="font-normal">
                                Longitude : <span className="font-medium text-sm">80.2272528</span>
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div className="bg-white rounded-md shadow-md p-4 border border-gray-200 flex-1">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                <svg
                                className="w-5 h-5 text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                >
                                <path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.64-.35c.91.31 1.9.48 2.95.48.82 0 1.5.68 1.5 1.5v3c0 .82-.68 1.5-1.5 1.5C9.94 22 2 14.06 2 4.5 2 3.68 2.68 3 3.5 3h3c.82 0 1.5.68 1.5 1.5 0 1.05.17 2.04.48 2.95.15.51.05 1.09-.35 1.64l-2.2 2.2Z" />
                                </svg>
                                Contact & Other Information
                            </div>
                            <div className="mt-4 text-gray-700">
                                <p className="font-medium text-sm">
                                Primary Mobile: <span className="font-normal">+91 987654321</span>
                                </p>
                                <p className="font-medium text-sm mt-2">
                                Primary Telephone: <span className="font-normal">+91 987654321</span>
                                </p>
                                <p className="font-medium text-sm mt-2">
                                Email Address: <span className="text-blue-600">Admin@Sample.Com.Sa</span>
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </p>
            }
            {activeTab === 2 && 
                <p>
                    <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200">
                        <h2 className="text-sm font-semibold text-black mb-4">KYC Details</h2>
                        <div className="flex flex-wrap gap-2 text-gray-700">
                            <div className="w-full">
                                <p className="text-sm font-medium text-center">No data Found</p>
                            </div>
                        </div>
                    </div>
                </p>
            }
        </div>

    </div>
  );
};

export default RegisteredWorkersDetails;
