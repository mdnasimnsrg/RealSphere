import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { FiUser, FiX } from "react-icons/fi";

const AllContacts = () => {
  const contacts = [
    { id: "CUST240722-224", name: "Yeshwanth", company: "Business Development", gender: "Male" },
    { id: "CUST240509-182", name: "Again employee" },
    { id: "CUST240719-222", name: "Inosuke Hashibira" },
    { id: "CUST240606-206", name: "Naina" },
    { id: "CUST240507-179", name: "kola d" },
    { id: "CUST240502-173", name: "Goku" },
    { id: "CUST240719-218", name: "Kiddo" },
  ];
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [activeTab, setActiveTab] = useState("contactDetails");
  const [showFilter, setShowFilter] = useState(false);
  const [setSelectedStatuses] = useState([]);
  
  const handleStatusChange = (e, status) => {
    setSelectedStatuses((prev) =>
    e.target.checked ? [...prev, status] : prev.filter((s) => s !== status)
    );
  }; 

  
  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 border-b">
            <div className="text-xl font-semibold">Contacts</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                        <option value="">Business Development</option>
                        <option value="">All Company</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="bg-white md:flex items-center justify-between pt-2 pb-2 pl-4 pr-4 mb-2">
            <div className="p-2 border rounded-md shadow-sm bg-gray-50 w-[480px]">
                <input placeholder="Search Contacts" icon={<Search size={16} />} />
            </div>
            <div className="flex flex-wrap items-center">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <button
                        className="bg-gray-100 p-2 rounded border hover:bg-gray-200"
                        onClick={() => setShowFilter(true)}
                    >
                        <Filter size={16} />
                    </button>
                </div>
            </div>
        </div>

        <div className="flex h-screen p-4 bg-gray-100">
            
            <div className="w-1/4 bg-white shadow rounded-lg overflow-hidden">
                <div className="text-xl font-semibold border-b p-4">Contacts</div>
                {contacts.map((contact) => (
                    <div
                    key={contact.id}
                    className={`p-4 mt-2 cursor-pointer flex items-center gap-3 border-b ${selectedContact.id === contact.id ? "bg-blue-100" : "hover:bg-gray-100"}`}
                    onClick={() => setSelectedContact(contact)}
                    >
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full">
                            {contact.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="font-medium">{contact.name}</p>
                            <p className="text-xs text-gray-500">{contact.id}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex-1 bg-white shadow rounded-lg ml-4 p-6">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-lg font-semibold">{selectedContact.name}</h2>
                </div>
                <div className="mt-4">
                    <div className="flex space-x-4 border-b">
                        <button 
                        className={`p-2 ${activeTab === "contactDetails" ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab("contactDetails")}
                        >Contact Details</button>
                        <button 
                        className={`p-2 ${activeTab === "kycDetails" ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab("kycDetails")}
                        >KYC Details</button>
                    </div>
                    
                    {activeTab === "contactDetails" && (
                        <div className="mt-4 max-h-[32rem] overflow-y-auto">
                            <div className="flex">
                                {/* Profile Section */}
                                <div className="border-b w-full">
                                    <div className="flex items-start gap-6 pb-4">
                                        <div className="relative">
                                            <div className="w-24 h-24 bg-gray-700 text-white flex items-center justify-center rounded-full text-3xl">
                                                {selectedContact.name.charAt(0).toUpperCase()}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 w-full">
                                            <div className="w-full">
                                                <p className="text-sm font-semibold mb-2">Profile Details</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Company Name</p>
                                                <p className="text-sm font-semibold">{selectedContact.company || "-"}</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Name</p>
                                                <p className="text-sm font-semibold">{selectedContact.name || "-"}</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Job Title</p>
                                                <p className="text-sm font-semibold">-</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Company ID</p>
                                                <p className="text-sm font-semibold">-</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Gender</p>
                                                <p className="text-sm font-semibold">{selectedContact.gender || "-"}</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Relationship</p>
                                                <p className="text-sm font-semibold">Resident</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Department</p>
                                                <p className="text-sm font-semibold">-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 mt-2">
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
                                    <div className="mt-4 h-28 border border-gray-300 rounded-lg">-</div>
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
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
                                        </svg>
                                        Contact & Other Information
                                    </div>
                                    <div className="mt-4 text-gray-700">
                                        <div className="flex flex-wrap gap-2 w-full">
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Telephone:</p>
                                                <p className="text-sm font-semibold">+91-98765432345</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Mobile Number :</p>
                                                <p className="text-sm font-semibold">+91-98765432345</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Contact:</p>
                                                <p className="text-sm font-semibold">-</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Email Address :</p>
                                                <p className="text-sm font-semibold">yes@yopmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-3 mt-2">
                                <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200 w-full">
                                    <h2 className="text-sm font-semibold text-black mb-4">Lead & Opportunity Management</h2>
                                    <div className="flex flex-wrap gap-6 text-gray-700">
                                        <div className="">
                                            <p className="text-sm font-medium">Last Revenue Target :</p>
                                            <p>-</p>
                                        </div>
                                        <div className="">
                                            <p className="text-sm font-medium">Current Revenue Target :</p>
                                            <p>-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-3 mt-2">
                                <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200 w-full">
                                    <h2 className="text-sm font-semibold text-black mb-4">ID Details</h2>
                                    <div className="flex flex-wrap gap-6 text-gray-700">
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">National ID</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">National ID Expiry</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Passport ID</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Passport ID Expiry</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Resident ID</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Resident ID Expiry</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Visa Number</p>
                                            <p>-</p>
                                        </div>
                                        <div className="w-width20%">
                                            <p className="text-sm font-medium">Visa Expiry</p>
                                            <p>-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                    
                    {activeTab === "kycDetails" && (
                        <div className="mt-4 text-gray-600">No data found</div>
                    )}
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
                    <label className="block text-gray-700 font-medium mb-2">Relationship</label>
                    <div className="flex flex-wrap gap-2">
                    <select
                        className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="">Select Relationship</option>
                    </select>
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Status</label>
                    <div className="flex flex-wrap gap-2">
                        {["Active", "InActive"].map((status, index) => (
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

                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 mt-6">
                    Apply
                </button>
                </div>
            </div>
        )}

    </div>
  );
};

export default AllContacts;
