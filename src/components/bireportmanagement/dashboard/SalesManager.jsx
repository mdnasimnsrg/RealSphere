import React, { useState } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";
import {
  FaRegHandshake,
  FaClipboardList,
  FaFileInvoice,
  FaStore,
  FaBuilding,
  FaMoneyBill,
  FaMobileAlt,
  FaShieldAlt,
  FaTimesCircle,
  FaCheckCircle,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Chart from "react-apexcharts";
import CustomChart from "../../ui/CustomChart";
import { FaHammer, FaHome, FaDollarSign, FaBan } from "react-icons/fa";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SalesManager = () => {
  const [activeTab, setActiveTab] = useState("moveIn");
  const [calenderDialogOpen, setCalenderDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const data = [
    { title: "Open Leads", value: 0, icon: <FaRegHandshake color="#F96D6F" /> },
    {
      title: "Open Opportunities",
      value: { current: 1, total: 3 },
      icon: <FaClipboardList color="#F29339" />,
    },
    {
      title: "Open Quotations",
      value: 1,
      icon: <FaFileInvoice color="#99C14E" />,
    },
    {
      title: "Interested Quotations",
      value: 0,
      icon: <FaFileInvoice color="#4285F4" />,
    },
    {
      title: "Won Quotations",
      value: 2,
      icon: <FaFileInvoice color="#34A853" />,
    },
    {
      title: "Open Reservations",
      value: 0,
      icon: <FaClipboardList color="#FBBC05" />,
    },
    {
      title: "Residential",
      value: 222800,
      icon: <FaBuilding color="#673AB7" />,
    },
    { title: "Commercial", value: 0, icon: <FaStore color="#E91E63" /> },
    { title: "Lease", value: 171300, icon: <FaMoneyBill color="#4CAF50" /> },
    { title: "Sales", value: 51500, icon: <FaMoneyBill color="#FF9800" /> },
  ];
  const opportunityFunelOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
        barHeight: "80%", // Controls funnel height
      },
    },
    colors: ["#FBC02D", "#FFA000", "#FF7043", "#8E24AA"], // Customize colors
    dataLabels: {
      enabled: false,
      formatter: (val, opts) =>
        opts.w.globals.labels[opts.dataPointIndex] + " (" + val + ")",
      style: {
        colors: ["#000"],
      },
    },
    xaxis: {
      show: false,
    },
  };

  const opportunityFunnelSeries = [
    {
      data: [
        { x: "Open Leads", y: 0 },
        { x: "Open Opportunities", y: 0 },
        { x: "Open Quotations", y: 0 },
        { x: "Interested Quotations", y: 0 },
        { x: "Won Quotations", y: 2 },
      ],
    },
  ];
  const kycInformation = [
    {
      title: "Verified KYC",
      value: 37,
      icon: <FaCheckCircle className="text-green-500 text-xl" />,
    },
    {
      title: "Unverified KYC",
      value: 35,
      icon: <FaTimesCircle className="text-red-500 text-xl" />,
    },
    {
      title: "Valid",
      value: 4,
      icon: <FaShieldAlt className="text-blue-500 text-xl" />,
    },
    {
      title: "From App",
      value: 0,
      icon: <FaMobileAlt className="text-gray-500 text-xl" />,
    },
  ];
  const revenueSeries = [
    {
      name: "Closed",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example values
    },
    {
      name: "Open",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example values
    },
    {
      name: "Won",
      data: [223000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example values
    },
  ];

  const unitStatusData = [
    {
      title: "Under Development",
      value: 7,
      icon: <FaHammer className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Sale Ready Units",
      value: 29,
      icon: <FaHome className="text-green-500 text-2xl" />,
    },
    {
      title: "Sold Units",
      value: 4,
      icon: <FaDollarSign className="text-blue-500 text-2xl" />,
    },
    {
      title: "Sale Blocked Units",
      value: 0,
      icon: <FaBan className="text-red-500 text-2xl" />,
    },
  ];
  const unitsData = [
    {
      units: 4,
      name: "Alexandria",
      location: "Sri Sowdeswari Nagar, Kancheepuram",
      color: "#EAE2F8",
    },
    {
      units: 2,
      name: "Emerald",
      location: "T. Nagar, Chennai",
      color: "#E0F2F1",
    },
    {
      units: 3,
      name: "Green Apartment",
      location: "21b, Subramaniam Colony, Chennai",
      color: "#FFF8E1",
    },
    {
      units: 3,
      name: "Leo Apartments",
      location: "Little Mount, Chennai",
      color: "#E3F2FD",
    },
    {
      units: 3,
      name: "Maad Sadayem",
      location: "Jeddah, Riyadh",
      color: "#FFEBEE",
    },
  ];

  return (
    <div>
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Sales Manager Dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
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
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">
                {" "}
                {typeof item.value === "object"
                  ? `${item.value.current} of ${item.value.total}`
                  : item.value}
              </span>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="text-sm font-semibold">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 p-4 gap-4">
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Lead Source</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Opportunity</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="bg-white p-4 shadow  relative flex flex-col gap-4 h-[350px]">
          <p className="text-lg font-semibold z-10">Team Revenue</p>
          <div className="w-full h-20 flex justify-center items-center">
            <p className="text-sm font-bold text-center text-gray-700">
              No data Found
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 p-4 gap-4">
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 ">
          <p className="text-lg font-semibold z-10">Lead Funnel</p>
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="absolute inset-0 object-contain h-full w-full  object-center"
          />
        </div>
        <div className="bg-white p-4 shadow  relative flex flex-col justify-between gap-4 ">
          <p className="text-lg font-semibold z-10">Opportunity Funnel</p>

          <div>
            <Chart
              options={opportunityFunelOptions}
              series={opportunityFunnelSeries}
              type="bar"
              height={400}
            />
          </div>
        </div>
        <div className="bg-white p-4 shadow  relative flex flex-col gap-4 ">
          <CustomChart
            chartType="pie"
            data={[30, 70]}
            toolbar={true}
            title="Quotation"
            labels={["Active", "Won"]}
            colors={["blue", "purple"]}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 p-4 gap-4">
        <div className="lg:col-span-2 p-4 bg-white shadow h-full">
          <CustomChart
            title="Opportunity Revenue"
            data={revenueSeries}
            chartType="area"
            categorie={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            colors={["#008FFB", "#00E396", "#FEB019"]}
            stroke={{ curve: "smooth", width: 2 }}
            fill={{ type: "gradient", gradient: { shadeIntensity: 0.3 } }}
            height={500}
            legend={false}
            yaxisFormatter={(value) => {
              if (value >= 1000) {
                return `${value / 1000}k`;
              }
              return value;
            }}
          />
        </div>
        <div className="p-4 shadow bg-white space-y-2">
          <p className="text-lg font-semibold">KYC Information</p>{" "}
          {kycInformation.map((item) => {
            return (
              <div
                key={item.title}
                className="bg-white p-6 border w-full flex flex-col justify-between rounded"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{item.value}</span>
                  {item.icon}
                </div>
                <div className="text-sm font-semibold">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <div className="p-4 bg-white shadow">
          <CustomChart
            chartType="bar"
            title="Opportunity Status by User"
            data={revenueSeries}
          />
        </div>
        <div className="p-4 bg-white shadow">
          <CustomChart
            chartType="bar"
            title="Quotation Status by User"
            data={revenueSeries}
          />
        </div>
        <div className="p-4 bg-white shadow">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 p-4">
            {unitStatusData.map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {" "}
                    {typeof item.value === "object"
                      ? `${item.value.current} of ${item.value.total}`
                      : item.value}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="text-sm font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 shadow">
          <Box sx={{ maxWidth: 600, mx: "auto" }}>
            <div className="flex justify-between items-center mb-2">
              <ToggleButtonGroup
                value={activeTab}
                exclusive
                onChange={(e, newTab) => setActiveTab(newTab)}
              >
                <ToggleButton
                  value="moveIn"
                  sx={{ color: "#9E9E9E", fontWeight: "bold" }}
                >
                  Move-In Ready
                </ToggleButton>
                <ToggleButton value="offPlan" sx={{ fontWeight: "bold" }}>
                  Off-Plan Ready
                </ToggleButton>
              </ToggleButtonGroup>
              <div>
                {/* Calendar Icon Button */}
                <button onClick={() => setCalenderDialogOpen(true)}>
                  <FaRegCalendarAlt className="text-xl text-gray-700 hover:text-black" />
                </button>

                {/* MUI Dialog for Calendar */}
                <Dialog
                  open={calenderDialogOpen}
                  onClose={() => setCalenderDialogOpen(false)}
                >
                  <DialogTitle>Select a Date</DialogTitle>
                  <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar
                        value={selectedDate}
                        onChange={(newDate) => setSelectedDate(newDate)}
                      />
                    </LocalizationProvider>
                    <div className="flex justify-between items-center">
                      <Dialog
                        open={calenderDialogOpen}
                        onClose={() => setCalenderDialogOpen(false)}
                      >
                        <DialogTitle>Select a Date</DialogTitle>
                        <DialogContent>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                              value={selectedDate}
                              onChange={(newDate) => setSelectedDate(newDate)}
                            />
                          </LocalizationProvider>
                          <div className="flex justify-between items-center">
                            <Button onClick={() => setSelectedDate(null)}>
                              Clear
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setCalenderDialogOpen(false)}
                            >
                              Apply
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {unitsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: item.color,
                  borderRadius: 2,
                  p: 2,
                  mb: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  {item.units} Units
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
                  {item.location}
                </Typography>
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SalesManager;
