import React from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import {
  FaBolt,
  FaWater,
  FaBuilding,
  FaPlug,
  FaBan,
  FaClipboardCheck,
} from "react-icons/fa";
import Chart from "react-apexcharts";
const UtilityManager = () => {
  const utilitiesData = [
    {
      id: 1,
      title: "Total Unit Utilities",
      value: 90,
      icon: <FaBolt color="#F96D6F" size={24} />,
    },
    {
      id: 2,
      title: "Utilities-External",
      value: 16,
      icon: <FaWater color="#F29339" size={24} />,
    },
    {
      id: 3,
      title: "Units with utilities",
      value: 71,
      icon: <FaBuilding color="#99C14E" size={24} />,
    },
    {
      id: 4,
      title: "Utilities-Internal",
      value: 74,
      icon: <FaPlug color="#4E9EC1" size={24} />,
    },
    {
      id: 5,
      title: "Units with zero utilities",
      value: 116,
      icon: <FaBan color="#C14E99" size={24} />,
    },
    {
      id: 6,
      title: "Readings Taken",
      value: 4,
      icon: <FaClipboardCheck color="#4EC1A6" size={24} />,
    },
  ];
const utilityReadingChartOptions =  {
  chart: {
    type: "bar",
    zoom:false,
    toolbar:{show:false},
  },
  tooltip:{enabled:true},
  plotOptions: {
    bar: {
     horizontal:false
    },
   
  },
  xaxis: {
    
  },
  yaxis :{
    labels: {
      formatter: (value) => value,
    
    },
  },
  colors: ["#FFA500", "#F44336", "#4CAF50", "#00BCD4", "#FF9800", "#FFC107"],
};
  return (
    <div>
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Community & HOA Dashboard</p>
        <div className="flex flex-wrap justify-center gap-y-2">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiCalendar className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
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

          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="p-4 space-y-4">
          <div className="bg-white p-4 shadow">
            <figure className="space-y-7">
              <p className="text-lg font-semibold">Utility Category</p>
              <img
                src="/images/no-data.png"
                alt="No Data"
                height={"100%"}
                width={"100%"}
              />
            </figure>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2">
            {utilitiesData.map((item) => {
              return (
                <div
                  key={item.title}
                  className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
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
        </div>
        <div className="lg:col-span-2 p-4 h-full">
          <div className="bg-white shadow p-4 h-full">
            <p className="text-lg font-semibold">Utility Readings</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

            <select className="focus:outline-none bg-white text-gray-700 font-medium cursor-pointer py-3 border px-2 text-sm">
             
              <option value="Movenpic Jeddah AI Nawaras">Movenpic Jeddah AI Nawaras</option>
              <option value="Atelier La View Center">Atelier La View Center</option>
              <option value="Serenity Tower">Serenity Tower</option>
            </select>
            <select className="focus:outline-none bg-white text-gray-700 font-medium cursor-pointer py-3 border px-2 text-sm">
             
              <option value="Movenpic Jeddah AI Nawaras">Movenpic Jeddah AI Nawaras</option>
            
            </select>
            <select className="focus:outline-none bg-white text-gray-700 font-medium cursor-pointer py-3 border px-2 text-sm">
             
              <option value="Fuse issue">Fuse issue</option>
              
            </select>
            <select className="focus:outline-none bg-white text-gray-700 font-medium cursor-pointer py-3 border px-2 text-sm">
             
              <option value="All Meters">All Meters</option>
              <option value="98765">98765</option>
              <option value="231">231</option>
              <option value="231">472</option>
            </select>
            </div>
            <div className="h-full">

            <Chart type="bar" options={utilityReadingChartOptions} height={"100%"} width={"100%"} series={[{name:"Demo",data:[1]}]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityManager;
