import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { FiUser, FiX } from "react-icons/fi";

const ContactProspects = () => {
  const contacts = [
    { id: "Created At: 09 Jan 2025", name: "Marcellus" },
    { id: "Created At: 10 Jan 2025", name: "Aziel" },
    { id: "Created At: 31 Dec 2024", name: "Mathan" },
    { id: "Created At: 30 Dec 2024", name: "Haiken" },
    { id: "Created At: 27 Dec 2024", name: "Sabari" },
    { id: "Created At: 30 Aug 2024", name: "Saajid" },
    { id: "Created At: 06 Aug 2024", name: "Mist" },
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

  const data = [
    {
      opportunityNo: 'OPP250109-751',
      date: '09 Jan 2025',
      description: '09-01-2025 18:46 Marcellus...',
      purpose: 'Residential',
      source: 'Direct Sales',
      priority: 'Medium',
      owner: '-',
      status: 'Won',
    },
  ];
  
  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 border-b">
            <div className="text-xl font-semibold">Prospect Contacts</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                        <option value="">Business Development</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="bg-white md:flex items-center justify-between pt-2 pb-2 pl-4 pr-4 mb-2">
            <div className="p-2 border rounded-md shadow-sm bg-gray-50 w-[480px]">
                <input placeholder="Search Contacts" icon={<Search size={16} />} />
            </div>
            <div className="flex flex-wrap items-center">
                <div className="flex items-center border rounded-md p-3 shadow-sm bg-gray-50 hover:bg-gray-200">
                    <button
                        className=""
                        onClick={() => setShowFilter(true)}
                    >
                        <Filter size={16} />
                    </button>
                </div>
            </div>
        </div>

        <div className="flex h-screen p-4 bg-gray-100">
            
            <div className="w-1/4 bg-white shadow rounded-lg overflow-hidden">
                <div className="text-xl font-semibold border-b p-4">Contacts Lists</div>
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
                        className={`p-2 ${activeTab === "opportunities" ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab("opportunities")}
                        >Opportunities</button>
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
                                                <p className="text-gray-500">Name</p>
                                                <p className="text-sm font-semibold">{selectedContact.name || "-"}</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Number of Opportunities</p>
                                                <p className="text-sm font-semibold">1</p>
                                            </div>
                                            <div className="w-width24%">
                                                <p className="text-gray-500">Created At</p>
                                                <p className="text-sm font-semibold">09 Jan 2025</p>
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
                                    <div className="mt-4 p-2 h-28 border border-gray-300 rounded-lg">
                                        <p className="text-sm font-semibold">Address Not Available</p>
                                        <p className="text-gray-500">Latitude :-</p>
                                        <p className="text-gray-500">Longitude :-</p>
                                    </div>
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
                                                <p className="text-gray-500">Mobile Number :</p>
                                                <p className="text-sm font-semibold">+91-99172856511</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Alternate Number :</p>
                                                <p className="text-sm font-semibold">-</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Email Address :</p>
                                                <p className="text-sm font-semibold">marcellus@yopmail.com</p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Facebook :</p>
                                                <p className="text-sm font-semibold"></p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Twitter :</p>
                                                <p className="text-sm font-semibold"></p>
                                            </div>
                                            <div className="w-[49%]">
                                                <p className="text-gray-500">Linkedin :</p>
                                                <p className="text-sm font-semibold"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                    
                    {activeTab === "opportunities" && (
                        <div className="mt-4 text-gray-600">
                            <div className="container">
                                <table className="table-auto w-full border-collapse border border-gray-300">
                                    <thead>
                                    <tr className="bg-gray-100"> {/* Light gray background for header */}
                                        <th className="border border-gray-300 px-4 py-2">Opportunity No</th>
                                        <th className="border border-gray-300 px-4 py-2">Date</th>
                                        <th className="border border-gray-300 px-4 py-2">Description</th>
                                        <th className="border border-gray-300 px-4 py-2">Purpose</th>
                                        <th className="border border-gray-300 px-4 py-2">Source</th>
                                        <th className="border border-gray-300 px-4 py-2">Priority</th>
                                        <th className="border border-gray-300 px-4 py-2">Owner</th>
                                        <th className="border border-gray-300 px-4 py-2">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}> {/* Alternate row colors */}
                                        <td className="border border-gray-300 px-4 py-2">{row.opportunityNo}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.date}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.description}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.purpose}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.source}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.priority}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.owner}</td>
                                        <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

export default ContactProspects;
