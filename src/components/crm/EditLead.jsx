import React from 'react';
import 'react-phone-number-input/style.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FiUser } from "react-icons/fi";

function EditLead() {

    const handleBack = () => {
        window.history.back(); 
    };

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <h1 className="text-xl font-semibold">
                <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                aria-label="Go back"
                >
                <ArrowBackIosIcon />
                </button>
                <span>Edit Lead</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select
                        className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                    >
                        <option value="businessDev">Business Development</option>
                    </select>
                </div>
            </div>
        </div>
                
        <form className="">

            <div className="p-4">

                <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6">
                    <h5 className="text-[0.8rem] font-semibold">Contact Information</h5>
                
                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Contact Name</label>
                            <input
                                type="text"
                                value="Testing123"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Contact Name"
                                disabled
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Job Title</label>
                            <input
                                type="text"
                                value="Manager"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Job Title"
                                disabled
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Company</label>
                            <input
                                type="text"
                                value="ABC Testing 123"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Company"
                                disabled
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Business Mobile</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Business Mobile"
                            />
                        </div>
                    </div>

                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Mobile Phone</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Mobile Phone"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="text"
                                value="testing123@gmail.com"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Address 1</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Address 1"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Address 2</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Address 2"
                            />
                        </div>
                    </div>

                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Country</label>
                            <input
                                type="text"
                                value="Malaysia"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Country"
                                disabled
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Website</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                                placeholder="Website"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Preferred Contact</label>
                            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                                <option>Any</option>
                                <option>Mail</option>
                                <option>Email</option>
                                <option>Phone</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6 mt-4">
                    <h5 className="text-[0.8rem] font-semibold">Referral and Showcase</h5>
                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Referrer Name</label>
                            <input type="text" placeholder="Referrer Name" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Referrer Company</label>
                            <input type="text" placeholder="Referrer Company" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <label>Showcase</label>
                                <input type="checkbox" className="toggle" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Last Showcase Date</label>
                            <input type="date" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6 mt-4">
                    <h5 className="text-[0.8rem] font-semibold">Lead Information</h5>
                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Purpose</label>
                            <input type="text" placeholder="Commercial" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Type</label>
                            <input type="text" placeholder="Manage" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">From Date</label>
                            <input type="date" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Duration</label>
                            <div className="flex">
                                <input type="number" placeholder="12" className="border p-2 rounded-md" />
                                <select className="border p-2 rounded-md">
                                    <option>Monthly</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <input type="text" placeholder="CRM,PropGOTO" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Property Name</label>
                            <input type="text" placeholder="Riverbend Towers" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Unit Type</label>
                            <input type="text" placeholder="Unit Type" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6 mt-4">
                    <h5 className="text-[0.8rem] font-semibold">Purchase and Budget Information</h5>
                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <label>Existing Customer</label>
                                <input type="checkbox" className="toggle" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Lead External Source</label>
                            <input type="text" placeholder="Lead External Source" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Lead Internal Source</label>
                            <input type="text" placeholder="Exhibition" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Budget</label>
                            <div className="flex">
                                <select className="border p-2 rounded-md">
                                    <option>May Buy</option>
                                    <option>Can Buy</option>
                                    <option>Will Buy</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Budget Amount</label>
                            <input type="number" placeholder="Budget Amount" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2">
                                <label>Confirm Interest</label>
                                <input type="checkbox" className="toggle" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Expected Close Period</label>
                            <input type="text" placeholder="Expected Close Period" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Monthly/Total Budget</label>
                            <input type="number" placeholder="Monthly/Total Budget" className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500" />
                        </div>
                    </div>
                </div>
            
            </div>

            <div className="flex items-center justify-between bg-white p-4 mt-4">
                <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                >
                    Cancel
                </button>
                <div className="flex justify-end flex-grow">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Save
                    </button>
                </div>
            </div>

        </form>

    </div>

  );
}

export default EditLead;
