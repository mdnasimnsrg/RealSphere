import React, { useState } from "react";
import { Search } from "lucide-react";
import { FiUser } from "react-icons/fi";

const ContactVendorProfile = () => {
  const contacts = [
    { id: "1", name: "Movenpick Account" },
    { id: "2", name: "Blue Dart" },
    { id: "3", name: "India Builders" },
    { id: "4", name: "BLUE DART" },
    { id: "5", name: "DHL" },
  ];
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  
  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 border-b">
            <div className="text-xl font-semibold">Vendors</div>
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
        </div>

        <div className="flex h-screen p-4 bg-gray-100">
            
            <div className="w-1/4 bg-white shadow rounded-lg overflow-hidden">
                <div className="text-xl font-semibold border-b p-4">Vendor Lists</div>
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
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex-1 bg-white shadow rounded-lg ml-4 p-6">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-lg font-semibold">{selectedContact.name}</h2>
                    <div className="flex flex-wrap items-center">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">Edit</button>
                    </div>
                </div>
                <div className="mt-4">
                    
                    <div className="mt-4 max-h-[32rem] overflow-y-auto">
                        <div className="flex bg-gray-50">
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
                                            <p className="text-gray-500">Vendor's Company</p>
                                            <p className="text-sm font-semibold">Business Development</p>
                                        </div>
                                        <div className="w-width24%">
                                            <p className="text-gray-500">Vendor Code</p>
                                            <p className="text-sm font-semibold">43242435234</p>
                                        </div>
                                        <div className="w-width24%">
                                            <p className="text-gray-500">Vendor Name</p>
                                            <p className="text-sm font-semibold">{selectedContact.name || "-"}</p>
                                        </div>
                                        <div className="w-width24%">
                                            <p className="text-gray-500">Vendor's Country</p>
                                            <p className="text-sm font-semibold">-</p>
                                        </div>
                                        <div className="w-width24%">
                                            <p className="text-gray-500">Vendor Description</p>
                                            <p className="text-sm font-semibold">Movenpick Account</p>
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
                                            <p className="text-gray-500">Primary Telephone</p>
                                            <p className="text-sm font-semibold">+966 576666444</p>
                                        </div>
                                        <div className="w-[49%]">
                                            <p className="text-gray-500">Primary Mobile</p>
                                            <p className="text-sm font-semibold">+966 5566666657</p>
                                        </div>
                                        <div className="w-[49%]">
                                            <p className="text-gray-500">Email Address :</p>
                                            <p className="text-sm font-semibold">admin@sample.com.sa</p>
                                        </div>
                                        <div className="w-[49%]">
                                            <p className="text-gray-500">Website</p>
                                            <p className="text-sm font-semibold">sample.com.sa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 mt-2">
                            <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200 w-full">
                                <h2 className="text-sm font-semibold text-black mb-4">Tax</h2>
                                <div className="flex flex-wrap gap-6 text-gray-700">
                                    <div className="">
                                        <p className="text-sm font-medium">Tax Group</p>
                                        <p>-</p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-medium">Tax Code</p>
                                        <p>-</p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-medium">Tax Registration Number</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 mt-2">
                            <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200 w-full">
                                <h2 className="text-sm font-semibold text-black mb-4">Banking Basic Details</h2>
                                <div className="flex flex-wrap gap-6 text-gray-700">
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Bank Name</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Branch Name</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Currency</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Bank Account Type</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Account Number</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Bank Routing Type</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Bank Routing Code</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Cheque Name</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Address Line 1</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Address Line 2</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">City</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Country</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 mt-2">
                            <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200 w-full">
                                <h2 className="text-sm font-semibold text-black mb-4">Company & Real Estate Registration</h2>
                                <div className="flex flex-wrap gap-6 text-gray-700">
                                    <div className="w-width20%">
                                        <p className="text-sm font-medium">Company Registration Type</p>
                                        <p>-</p>
                                    </div>
                                    <div className="w-width24%">
                                        <p className="text-sm font-medium">Company Registration Number</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
  );
};

export default ContactVendorProfile;
