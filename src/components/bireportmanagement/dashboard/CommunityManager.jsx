import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import {
  FaBuilding,
  FaUserFriends,
  FaUserTie,
  FaUsers,
  FaHome,
  FaClipboardList,
  FaCity,
  FaColumns,
  FaDoorOpen,
  FaPhoneAlt,
  FaUserShield,
  FaTools,
  FaRegCalendarAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FiCalendar, FiHome, FiMenu, FiUser } from "react-icons/fi";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DataTable from "react-data-table-component";
import CustomMenu from "../../ui/CustomMenu";
import Chart from "react-apexcharts";

const CommunityManager = () => {
  const [calenderDialogOpen, setCalenderDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const stats = [
    {
      label: "Properties",
      value: 53,
      icon: <FaBuilding className="text-2xl text-blue-500" />,
    },
    {
      label: "Total Units",
      value: 187,
      icon: <FaCity className="text-2xl text-green-500" />,
    },
    {
      label: "Blocks",
      value: 23,
      icon: <FaColumns className="text-2xl text-purple-500" />,
    },
    {
      label: "Vacant Units",
      value: 139,
      icon: <FaDoorOpen className="text-2xl text-red-500" />,
    },
    {
      label: "Floors",
      value: 33,
      icon: <FaClipboardList className="text-2xl text-orange-500" />,
    },
    {
      label: "Occupied Units",
      value: 44,
      icon: <FaHome className="text-2xl text-yellow-500" />,
    },
    {
      label: "Residents",
      value: 34,
      icon: <FaUserFriends className="text-2xl text-blue-400" />,
    },
    {
      label: "Owners",
      value: 18,
      icon: <FaUserTie className="text-2xl text-green-400" />,
    },
    {
      label: "Occupants",
      value: 2,
      icon: <FaUsers className="text-2xl text-purple-400" />,
    },
    {
      label: "Public Contacts",
      value: 53,
      icon: <FaPhoneAlt className="text-2xl text-red-400" />,
    },
    {
      label: "Committee Members",
      value: 2,
      icon: <FaUserShield className="text-2xl text-orange-400" />,
    },
    {
      label: "Registered Workers",
      value: 12,
      icon: <FaTools className="text-2xl text-yellow-400" />,
    },
  ];
  const ResidentAndTenantInformationColumn = [
    {
      field: "picture",
      headerName: "Picture",
      width: 100,
      renderCell: (params) =>
        params.value ? (
          <Avatar src={params.value} alt="Profile" />
        ) : (
          <Avatar>{params.row.name[0]}</Avatar>
        ),
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "unitName", headerName: "Unit Name", width: 250 },
    { field: "mobileNumber", headerName: "Mobile Number", width: 180 },
    { field: "occupants", headerName: "Occupants", width: 120, type: "number" },
    { field: "lastLogin", headerName: "Last Login", width: 150 },
  ];

  const ResidentAndTenantInformationRows = [
    {
      id: 1,
      picture: "https://via.placeholder.com/40",
      name: "Aziel",
      unitName: "UNIT25-1185 - Unit -1 (Lease)",
      mobileNumber: "+9198765434511",
      occupants: 0,
      lastLogin: "15 Jan 2025",
    },
    {
      id: 2,
      picture: "https://via.placeholder.com/40",
      name: "Waylen",
      unitName: "UNIT24-988 - Falcon_WS_2",
      mobileNumber: "+919512587454",
      occupants: 0,
      lastLogin: "06 Nov 2024",
    },
    {
      id: 3,
      picture: "https://via.placeholder.com/40",
      name: "Waylen",
      unitName: "UNIT24-944 - Unit 6",
      mobileNumber: "+919512587454",
      occupants: 0,
      lastLogin: "06 Nov 2024",
    },
    {
      id: 4,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
    {
      id: 5,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
    {
      id: 6,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
    {
      id: 7,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
    {
      id: 8,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
    {
      id: 9,
      picture: "",
      name: "Ellen",
      unitName: "UNIT24-821 - Earwig 1",
      mobileNumber: "+919087654312",
      occupants: 1,
      lastLogin: "25 Sep 2024",
    },
  ];
  const activeDiscussionColumns = [
    {
      name: "Discussion",
      selector: (row) => row.Discussion,
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: "Unit Name",
      selector: (row) => row.unitName,
      sortable: true,
    },
    {
      name: "No. of Threads",
      selector: (row) => row.threads,
      sortable: true,
    },
  ];

  const activeDiscussionRows = [
    {
      id: 1,
      Discussion: "Maintenance Issue",
      createdBy: "John Doe",
      unitName: "UNIT24-101",
      threads: 5,
    },
    {
      id: 2,
      Discussion: "Security Concern",
      createdBy: "Jane Smith",
      unitName: "UNIT25-202",
      threads: 3,
    },
    {
      id: 3,
      Discussion: "Event Planning",
      createdBy: "David Lee",
      unitName: "UNIT26-303",
      threads: 8,
    },
    {
      id: 4,
      Discussion: "Pet Policy",
      createdBy: "Emily Brown",
      unitName: "UNIT27-404",
      threads: 2,
    },
    {
      id: 5,
      Discussion: "Parking Issue",
      createdBy: "Michael Johnson",
      unitName: "UNIT28-505",
      threads: 4,
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

  const CorrespondenceChartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Letters acknowledged", "Letters Replied", "Letters sent"],
    colors: ["#1DBF73", "#FEC107", "#007BFF"], // Colors matching the image
    dataLabels: {
      enabled: true, // Hide default inside labels
    },
    legend: { show: false }, // Hide default legend
    tooltip: { enabled: true },
    stroke: { show: true, colors: ["#fff"], width: 2 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        customScale: 1, // Keeps chart size normal
      },
    },
  };
  const WorkerRequestChartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Pending", "Approved", "Rejected"],
    colors: ["#FEC107", "#28A745", "#DC3545"], // Colors matching the image
    dataLabels: {
      enabled: true, // Hide default inside labels
    },
    legend: { show: false }, // Hide default legend
    tooltip: { enabled: true },
    stroke: { show: true, colors: ["#fff"], width: 2 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        customScale: 1, // Keeps chart size normal
      },
    },
  };
  const LoginAccessChartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Approved"],
    colors: ["#278ecf"], // Colors matching the image
    dataLabels: {
      enabled: true, // Hide default inside labels
    },
    legend: { show: false }, // Hide default legend
    tooltip: { enabled: true },
    stroke: { show: true, colors: ["#fff"], width: 2 },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
      donut: {
        labels: {
          show: true,
        },
      },
    },
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

          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <FiHome className="text-gray-500 mr-2" />
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="allProperties">All Properties</option>
              <option value="commercial">Commercial</option>
              <option value="alReem">Al Reem</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-full lg:col-span-1 grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 lg:grid-cols-2 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow w-full min-h-32 flex flex-col justify-between rounded"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{item.value}</span>
                {item.icon}
              </div>
              <div className="text-sm font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="col-span-full lg:col-span-3 space-y-4">
          <div className="bg-white p-4 shadow space-y-2">
            <p className="text-lg font-semibold">
              Resident and Tenant Information{" "}
              <span className="font-bold">{`(${ResidentAndTenantInformationRows.length})`}</span>
            </p>
            <DataGrid
              rows={ResidentAndTenantInformationRows}
              columns={ResidentAndTenantInformationColumn}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              sx={{
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              }}
              className="sc-fkSzgi max-h-96 overflow-y-auto"
            />
          </div>
          <div className="bg-white p-4 shadow space-y-2">
            <p className="text-lg font-semibold">
              Owner Information{" "}
              <span className="font-bold">{`(${ResidentAndTenantInformationRows.length})`}</span>
            </p>
            <DataGrid
              rows={ResidentAndTenantInformationRows}
              columns={ResidentAndTenantInformationColumn}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              sx={{
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              }}
              className="sc-fkSzgi max-h-96 overflow-y-auto"
            />
          </div>
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-2 gap-4">
        <div className="p-3 bg-white shadow space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Active Discussions</p>
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
          <div className="w-full overflow-auto">
            <div className="w-[85vw] sm:w-full">
              <DataTable
                columns={activeDiscussionColumns}
                data={activeDiscussionRows}
                noDataComponent={
                  <p className="text-gray-500 py-4">No Discussion Found</p>
                }
                customStyles={{
                  headRow: {
                    style: {
                      backgroundColor: "#f1f5f9", // bg-slate-100
                      fontWeight: "bold",
                      fontSize: "14px",
                    },
                  },
                  headCells: {
                    style: {
                      color: "#374151", // Tailwind slate-700
                    },
                  },
                  cells: {
                    style: {
                      fontSize: "14px",
                    },
                  },
                }}
                highlightOnHover
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 w-full bg-white shadow space-y-2">
            <p className="text-lg font-semibold">KYC Information</p>
            <div className="grid gap-2">
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
          <div className="p-3 w-full bg-white shadow space-y-2">
            <div className="flex justify-between items-start relative">
              <p className="text-lg font-semibold">
                Correspondence & Letter Management
              </p>
              <CustomMenu
                trigger={
                  <button>
                    <FiMenu className="text-xl" />
                  </button>
                }
                options={[
                  {
                    label: "View in full screen",
                    onClick: () => alert("Full screen clicked"),
                  },
                  {
                    label: "Print chart",
                    onClick: () => alert("Print clicked"),
                  },
                  "divider",
                  {
                    label: "Download PNG image",
                    onClick: () => alert("Download PNG"),
                  },
                  {
                    label: "Download JPEG image",
                    onClick: () => alert("Download JPEG"),
                  },
                  {
                    label: "Download PDF document",
                    onClick: () => alert("Download PDF"),
                  },
                  {
                    label: "Download SVG vector image",
                    onClick: () => alert("Download SVG"),
                  },
                ]}
              />
            </div>
            <div className="relative flex justify-center items-center">
              {/* Pie Chart */}
              <Chart
                options={CorrespondenceChartOptions}
                series={[50, 20, 30]}
                type="pie"
                width={"100%"}
                height={200}
              />
            </div>
          </div>
          <div className="p-2 w-full bg-white shadow space-y-2">
            <div className="flex justify-between items-start relative ">
              <p className="text-lg font-semibold">Worker Request</p>
              <CustomMenu
                trigger={
                  <button>
                    <FiMenu className="text-xl" />
                  </button>
                }
                options={[
                  {
                    label: "View in full screen",
                    onClick: () => alert("Full screen clicked"),
                  },
                  {
                    label: "Print chart",
                    onClick: () => alert("Print clicked"),
                  },
                  "divider",
                  {
                    label: "Download PNG image",
                    onClick: () => alert("Download PNG"),
                  },
                  {
                    label: "Download JPEG image",
                    onClick: () => alert("Download JPEG"),
                  },
                  {
                    label: "Download PDF document",
                    onClick: () => alert("Download PDF"),
                  },
                  {
                    label: "Download SVG vector image",
                    onClick: () => alert("Download SVG"),
                  },
                ]}
              />
            </div>
            <div className="relative">
              {/* Pie Chart */}
              <Chart
                options={WorkerRequestChartOptions}
                series={[50, 20, 30]}
                type="pie"
                width={"100%"}
                height={200}
              />
            </div>
          </div>
          <div className="p-2 w-full bg-white shadow">
            <div className="flex justify-between items-start relative ">
              <p className="text-lg font-semibold">Login Access Request</p>
              <CustomMenu
                trigger={
                  <button>
                    <FiMenu className="text-xl" />
                  </button>
                }
                options={[
                  {
                    label: "View in full screen",
                    onClick: () => alert("Full screen clicked"),
                  },
                  {
                    label: "Print chart",
                    onClick: () => alert("Print clicked"),
                  },
                  "divider",
                  {
                    label: "Download PNG image",
                    onClick: () => alert("Download PNG"),
                  },
                  {
                    label: "Download JPEG image",
                    onClick: () => alert("Download JPEG"),
                  },
                  {
                    label: "Download PDF document",
                    onClick: () => alert("Download PDF"),
                  },
                  {
                    label: "Download SVG vector image",
                    onClick: () => alert("Download SVG"),
                  },
                ]}
              />
            </div>
            <div className="relative">
              {/* Pie Chart */}
              <Chart
                options={LoginAccessChartOptions}
                series={[100]}
                type="donut"
                width={"100%"}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityManager;
