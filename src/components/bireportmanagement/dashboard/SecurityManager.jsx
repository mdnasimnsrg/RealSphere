import React from "react";
import { AiFillBuild } from "react-icons/ai";
import { FiCalendar, FiUser } from "react-icons/fi";
import {
  FaUsers,
  FaHardHat,
  FaTruck,
  FaToolbox,
  FaShieldAlt,
  FaUserShield,
  FaExclamationTriangle,
  FaSignOutAlt,
} from "react-icons/fa";
import {

  AiOutlineUser,
  AiOutlineApartment,
  AiFillSetting,
} from "react-icons/ai";
import { FaParking, FaMotorcycle } from "react-icons/fa";
import { MdDirectionsCar, MdDirectionsBus } from "react-icons/md";
const SecurityManager = () => {
  const securityData = [
    {
      id: 1,
      title: "Visitor Entries",
      value: 0,
      icon: <FaUsers color="#F96D6F" size={24} />,
    },
    {
      id: 2,
      title: "Worker Entries",
      value: 0,
      icon: <FaHardHat color="#F29339" size={24} />,
    },
    {
      id: 3,
      title: "Vendor Entries",
      value: 0,
      icon: <FaTruck color="#99C14E" size={24} />,
    },
    {
      id: 4,
      title: "Service Provider Entries",
      value: 0,
      icon: <FaToolbox color="#4E9EC1" size={24} />,
    },
    {
      id: 5,
      title: "Total Security Staff",
      value: 0,
      icon: <FaShieldAlt color="#C14E99" size={24} />,
    },
    {
      id: 6,
      title: "Security Staff On Duty Today",
      value: 0,
      icon: <FaUserShield color="#4EC1A6" size={24} />,
    },
    {
      id: 7,
      title: "Security Violation Records",
      value: 0,
      icon: <FaExclamationTriangle color="#FFD700" size={24} />,
    },
    {
      id: 8,
      title: "Yet To Checkout",
      value: 0,
      icon: <FaSignOutAlt color="#A52A2A" size={24} />,
    },
  ];
  const parkingData = [
    {
      title: "Reserved Slots",
      value: 0,
      icon: <FaParking className="text-blue-500 text-2xl" />,
    },
    {
      title: "Visitor Slots",
      value: 0,
      icon: <FaParking className="text-green-500 text-2xl" />,
    },
    {
      title: "Parking Levels",
      value: 0,
      icon: <AiOutlineApartment className="text-gray-500 text-2xl" />,
    },
    {
      title: "Parking Areas",
      value: 0,
      icon: <AiFillSetting className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Total Parking Slots",
      value: 0,
      icon: <AiOutlineUser className="text-red-500 text-2xl" />,
    },
    {
      title: "Four Wheelers",
      value: 0,
      icon: <MdDirectionsCar className="text-purple-500 text-2xl" />,
    },
    {
      title: "Other Vehicles",
      value: 0,
      icon: <MdDirectionsBus className="text-orange-500 text-2xl" />,
    },
    {
      title: "Registered Vehicles",
      value: 0,
      icon: <FaMotorcycle className="text-pink-500 text-2xl" />,
    },
  ];

  return (
    <div>
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Community & HOA Dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 w-full">
            <FiCalendar className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer w-full">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="thisQuarter">This Quarter</option>
              <option value="lastQuarter">Last Quarter</option>
              <option value="thisYear">This Year</option>
              <option value="lastYear">Last Year</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 w-full">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer w-full">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50 w-full">
            <AiFillBuild className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer w-full">
              <option value="">Mohandiah</option>
              <option value="">Retal Real estate</option>
              <option value="">Leo Apartments</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-2 p-4 ">
        {securityData.map((item) => {
          return (
            <div
              key={item.title}
              className="bg-white p-6 shadow w-fit h-36 flex flex-col justify-between rounded aspect-square"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                {item.icon}
              </div>
              <div className="text-sm font-semibold">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 ">
        {/* People Visited Section */}
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">People Visited</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>

        {/* Entries with Check-In and Check-Out Section */}
        <div className="bg-white p-4 shadow relative flex flex-col justify-between gap-y-4 h-[350px]">
          <p className="text-lg font-semibold z-10">
            Entries With Check-In And Check-Out
          </p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain  object-center h-full w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Visitor Requests</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="bg-white p-4 shadow relative flex flex-col justify-between gap-y-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Worker Requests</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain  object-center h-full w-full"
          />
        </div>
        <div className="bg-white p-4 shadow relative flex flex-col justify-between gap-y-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Collection Requests</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain  object-center h-full w-full"
          />
        </div>
        <div className="bg-white p-4 shadow relative flex flex-col justify-between gap-y-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Parking Slot Requests</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain  object-center h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-2 p-4 ">
        {parkingData.map((item) => {
          return (
            <div
              key={item.title}
              className="bg-white p-6 shadow w-fit h-32 flex flex-col justify-between rounded aspect-square"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                {item.icon}
              </div>
              <div className="text-sm font-semibold">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-4 p-4 gap-4">
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Reserved Slots</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Visitor Slots</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="lg:col-span-2 p-4 bg-white shadow">
          <p className="text-lg font-semibold z-10">On Duty Information</p>
          <div className="w-full h-20 flex justify-center items-center">
            <p className="text-sm font-bold text-center text-gray-700">
              No data Found
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="w-full p-4 bg-white shadow">
          <div className="flex justify-between items-center gap-2">
            <p className="text-lg font-semibold z-10">Entries by Gates</p>
            <select className="focus:outline-none p-2 border text-gray-700 font-medium cursor-pointer w-60 text-sm bg-transparent">
              <option value="" disabled>
                Select Access gateway
              </option>
            </select>
          </div>
          <div className="w-full h-20 flex justify-center items-center">
            <p className="text-sm font-bold text-center text-gray-700">
              No data Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityManager;
