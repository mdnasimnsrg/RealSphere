import React, { useState } from "react";
import { Search } from "lucide-react";
import { FiUser } from "react-icons/fi";

const ContactBrokerAgents = () => {
  const [activeTab, setActiveTab] = useState("agentDetails");

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 border-b">
            <div className="text-xl font-semibold">Sales Agent</div>
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
                <div className="text-xl font-semibold border-b p-4">Agent Lists</div>
            </div>
            
            <div className="flex-1 bg-white shadow rounded-lg ml-4 p-6">
                <div className="">
                    <div className="flex space-x-4 border-b">
                        <button 
                        className={`p-2 ${activeTab === "agentDetails" ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab("agentDetails")}
                        >Agent Details</button>
                        <button 
                        className={`p-2 ${activeTab === "kycDetails" ? "border-b-2 border-blue-500" : ""}`}
                        onClick={() => setActiveTab("kycDetails")}
                        >KYC Details</button>
                    </div>
                    
                    {activeTab === "agentDetails" && (
                        <div className="mt-4 max-h-[32rem] overflow-y-auto">No data found</div>
                    )}
                    
                    {activeTab === "kycDetails" && (
                        <div className="mt-4 text-gray-600">No data found</div>
                    )}
                </div>
            </div>
        </div>

    </div>
  );
};

export default ContactBrokerAgents;
