import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

const DeliveryOrderCollections = () => {
  const [activeTab, setActiveTab] = useState("Yet To Receive");
  const tabs = ["Yet To Receive", "Received At Gate", "Collected"];

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Delivery Collection</div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="">Mohanadiah</option>
              <option value="">Retal Real Estate</option>
              <option value="">Bluewater</option>
              <option value="">Leo Apartments</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-medium text-nowrap ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search By Reference ID"
                className="lg:w-[20%] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-center text-gray-500">
              <p>No data found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOrderCollections;
