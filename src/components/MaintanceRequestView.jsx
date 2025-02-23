import React, { useState } from "react";
import {
  FaClipboardList,
  FaChartBar,
  FaToolbox,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DataTable from "react-data-table-component";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const MaintanceRequestView = () => {
  const [activeTab, setActiveTab] = useState("Requests");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: "Requests", label: "Requests", icon: <FaClipboardList /> },
    { id: "KPI", label: "KPI", icon: <FaChartBar /> },
    { id: "General Job", label: "General Job", icon: <FaToolbox /> },
    { id: "Actual BOM", label: "Actual BOM", icon: <FaCogs /> },
    { id: "Summary", label: "Summary", icon: <FaFileAlt /> },
  ];

  const handleBack = () => {
    window.history.back();
  };

  const [visibility, setVisibility] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleVisibility = (section) => {
    setVisibility((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [items, setItems] = useState([
    {
      id: 1,
      type: "",
      category: "",
      itemName: "",
      price: 0,
      qty: 1,
      amount: 0,
      discount: "",
      taxGroup: "",
      taxAmount: 0,
      lineAmount: 0,
    },
  ]);

  const dropdownOptions = {
    types: ["Inspection", "Inventory", "Services", "Assets", "Tools"],
    categories: ["Type A", "Type B", "Type C"],
    taxGroups: ["Group A", "Group B", "Group C"],
  };

  const handleInputChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const calculateAmounts = (item) => {
    const discountValue = item.discount ? parseFloat(item.discount) : 0;
    const discountedPrice = item.price - (item.price * discountValue) / 100;
    const taxValue = item.taxGroup ? parseFloat(item.taxAmount) : 0;
    const amount = discountedPrice * item.qty;
    const lineAmount = amount + taxValue;
    return { amount, lineAmount };
  };

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: Date.now(),
        type: "",
        category: "",
        itemName: "",
        price: 0,
        qty: 1,
        amount: 0,
        discount: "",
        taxGroup: "",
        taxAmount: 0,
        lineAmount: 0,
      },
    ]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const [deductions, setDeductions] = useState([
    {
      id: 1,
      type: "",
      category: "",
      itemName: "",
      description: "",
      referenceNumber: "",
      amount: 0,
    },
  ]);

  const dropdownOptions1 = {
    types: ["Inspection", "Inventory", "Services", "Assets", "Tools"],
    categories: ["Category A", "Category B", "Category C"],
  };

  const handleInputChange1 = (id, field, value) => {
    setDeductions((prevDeductions) =>
      prevDeductions.map((deduction) =>
        deduction.id === id ? { ...deduction, [field]: value } : deduction
      )
    );
  };

  const addDeduction = () => {
    setDeductions((prevDeductions) => [
      ...prevDeductions,
      {
        id: Date.now(),
        type: "",
        category: "",
        itemName: "",
        description: "",
        referenceNumber: "",
        amount: 0,
      },
    ]);
  };

  const removeDeduction = (id) => {
    setDeductions((prevDeductions) =>
      prevDeductions.filter((deduction) => deduction.id !== id)
    );
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatuses] = useState([]);

  const tableData = [
    {
      id: 1,
      jobId: "IMJ241114-5459",
      jobType: "General",
      resourceName: "Nirav",
      role: "Inspector",
      completedOn: "-",
      projectedHours: "2 Hrs",
      actualHours: "-",
      otherHours: "0",
      kpi: "Ontime",
      perHourRate: "50 SAR",
      billingHours: "-",
      billingAmount: "-",
      jobStatus: "Assigned",
    },
  ];

  const columns = [
    {
      name: "Job Id",
      selector: (row) => row.jobId,
    },
    {
      name: "Job Type",
      selector: (row) => row.jobType,
    },
    {
      name: "Resource Name",
      selector: (row) => row.resourceName,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Completed On",
      selector: (row) => row.completedOn,
    },
    {
      name: "Projected Hours",
      selector: (row) => row.projectedHours,
    },
    {
      name: "Actual Hours",
      selector: (row) => row.actualHours,
    },
    {
      name: "Other Hours",
      selector: (row) => row.otherHours,
    },
    {
      name: "KPI",
      selector: (row) => row.kpi,
    },
    {
      name: "Per Hour Rate",
      selector: (row) => row.perHourRate,
    },
    {
      name: "Billing Hours",
      selector: (row) => row.billingHours,
    },
    {
      name: "Billing Amount",
      selector: (row) => row.billingAmount,
    },
    {
      name: "Job Status",
      //selector: (row) => row.jobStatus,
      selector: (row) => (
        <Link to={`/generalinspectionview`}>{row.jobStatus}</Link>
      ),
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      row.jobId.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatuses.length === 0 ||
        selectedStatuses.includes(row.jobStatus))
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "Requests":
        return (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-2">
            <div className="flex-1 bg-white p-4 rounded-lg shadow">
              <div className="rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-2">electric</h2>
                <div className="flex gap-3 mb-2 flex-wrap">
                  <span className="bg-gray-100 text-black-700 py-1 px-3 rounded-lg text-sm">
                    Electrical
                  </span>
                  <span className="bg-gray-100 text-black-700 py-1 px-3 rounded-lg text-sm">
                    Electrical Minor Works
                  </span>
                  <span className="bg-yellow-100 text-black-700 py-1 px-3 rounded-lg text-sm">
                    Medium
                  </span>
                </div>
              </div>

              <hr className="border-gray-300 mb-4" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 rounded-lg">
                  <h3 className="mb-2">Contact Details</h3>
                  <div className="border-gray-300 shadow rounded-lg p-5">
                    <p className="text-gray-600">leora</p>
                    <p className="text-gray-600">7965425856</p>
                  </div>
                </div>
                <div className="flex-1 rounded-lg">
                  <h3 className="mb-2">Request Against</h3>
                  <div className="border-gray-300 shadow rounded-lg p-5">
                    <p className="text-gray-600">Majd - Villa A</p>
                    <div className="flex">
                      <p className="text-gray-600 flex-1">UNIT24-977</p>
                      <p className="text-gray-600 flex-1">Kids Room</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-6">
                <div className="flex-1">
                  <h3 className="font-semibold">PROBLEM SINCE</h3>
                  <p className="text-gray-600">12 Nov 2024</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">RAISED ON</h3>
                  <p className="text-gray-600">12 Nov 2024</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">PROPERTY DETAILS</h3>
                  <p className="text-gray-600">Majd Al Narges</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">UNIT DETAILS</h3>
                  <p className="text-gray-600">Majd- Villa A</p>
                </div>
              </div>
              <hr className="border-gray-300 mt-4 mb-4" />
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold">PREFERRED VISIT DATE</h3>
                  <p className="text-gray-600">12 Nov 2024</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">PREFERRED VISIT TIME</h3>
                  <p className="text-gray-600 bg-gray-100 rounded-lg p-2 text-center">
                    Call me to confirm
                  </p>
                </div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg shadow">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Track</h3>
                <ul>
                  <li className="mb-4">
                    <div className="flex justify-between">
                      <span className="text-blue-500 font-medium">
                        Assigned
                      </span>
                      <span className="text-gray-500">14 Nov 24 04:30 pm</span>
                    </div>
                    <p className="text-gray-600">Notes:</p>
                  </li>
                  <li className="mb-4">
                    <div className="flex justify-between">
                      <span className="text-blue-500 font-medium">
                        This request is Non Chargeable
                      </span>
                      <span className="text-gray-500">14 Nov 24 04:30 pm</span>
                    </div>
                    <p className="text-gray-600">Khalid Hussein</p>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span className="text-blue-500 font-medium">Open</span>
                      <span className="text-gray-500">14 Nov 24 04:30 pm</span>
                    </div>
                    <p className="text-gray-600">
                      Notes: Thank you for submitting your service request.
                      We're on it and will ensure a swift resolution. Your
                      comfort and satisfaction are our top priorities.
                    </p>
                  </li>
                </ul>
              </div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                +Add Notes
              </button>
            </div>
          </div>
        );
      case "KPI":
        return (
          <div>
            <div className="flex">
              <div className="w-full p-6">
                <div className="flex gap-8">
                  {/* Request Details Section */}
                  <div className="flex-1 bg-white shadow-lg rounded-lg overflow-y-auto">
                    <div>
                      <h2 className="text-lg font-semibold bg-gray-50 p-4 rounded-lg">
                        Request Details
                      </h2>
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Maintenance Request
                            </td>
                            <td className="py-2 px-4">MR0241112-757</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Channel Source
                            </td>
                            <td className="py-2 px-4">Owner</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Status
                            </td>
                            <td className="py-2 px-4">Assigned</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Property Name
                            </td>
                            <td className="py-2 px-4">Majd Al Narges</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Unit Name
                            </td>
                            <td className="py-2 px-4">Majd - Villa A</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Asset ID
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Ticket Handling
                            </td>
                            <td className="py-2 px-4">Non Chargeable</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Warranty End Date
                            </td>
                            <td className="py-2 px-4">14 Jan 2025</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Approval to start on
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              BOM Approval on
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold bg-gray-50 p-4 rounded-lg">
                        Impact Details
                      </h2>
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Priority
                            </td>
                            <td className="py-2 px-4">
                              <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Priority</option>
                                <option>High</option>
                                <option>Urgent</option>
                                <option>Medium</option>
                                <option>Low</option>
                              </select>
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Urgency
                            </td>
                            <td className="py-2 px-4">
                              <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Urgency</option>
                                <option>High</option>
                                <option>Urgent</option>
                                <option>Medium</option>
                                <option>Low</option>
                              </select>
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Impact
                            </td>
                            <td className="py-2 px-4">
                              <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select Impact</option>
                                <option>High</option>
                                <option>Urgent</option>
                                <option>Medium</option>
                                <option>Low</option>
                              </select>
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Impact Notes
                            </td>
                            <td className="py-2 px-4"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Progress Details Section */}
                  <div className="flex-1 bg-white shadow-lg rounded-lg overflow-y-auto">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <h2 className="text-lg font-semibold">
                        Progress Details - Created On 12 Nov 2024
                      </h2>
                      <span className="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded-md">
                        Open for 63 Days
                      </span>
                    </div>
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Addressing Type
                          </td>
                          <td className="py-2 px-4">
                            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Corrective</option>
                              <option>Proactive</option>
                            </select>
                          </td>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Planning
                          </td>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Start Date
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              01-01-2025
                            </td>
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              End Date
                            </td>
                            <td className="py-2 px-4">31-01-2025</td>
                          </tr>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Actual
                          </td>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Start Date
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              01-01-2025
                            </td>
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              End Date
                            </td>
                            <td className="py-2 px-4">31-01-2025</td>
                          </tr>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Last Visit
                          </td>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Visit Date
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Visited By
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Closure
                          </td>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Closed On
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Closed By
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Agreement Number
                          </td>
                          <td className="py-2 px-4">-</td>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Service Contract ID
                          </td>
                          <td className="py-2 px-4">
                            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Select Service Contract</option>
                              <option>
                                CONTR240502-0030 (03 May 2024 - 02 May 2025)
                              </option>
                              <option>
                                CONTR240502-0031 (30 Apr 2024 - 29 Apr 2025)
                              </option>
                              <option>
                                CONTR240606-0038 (06 Jun 2024 - 05 Jun 2025)
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Project
                          </td>
                          <td className="py-2 px-4">
                            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Select Project</option>
                              <option>
                                maji update - PRO-0024 (29 Sep 2024 - 17 Oct
                                2062)
                              </option>
                              <option>
                                Alexandria - PRO-0013 (31 Dec 2023 - 29 Jan
                                2026)
                              </option>
                              <option>
                                Majd Al Narges - PRO-0006 (03 Mar 2024 - 10 Sep
                                2034)
                              </option>
                              <option>
                                Oceanside Construction - PRO-0005 (31 Aug 2023 -
                                30 Sep 2024)
                              </option>
                              <option>
                                Project 101 - PRO-0002 (31 Aug 2024 - 31 Aug
                                2060)
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr className="border-t border-b border-gray-200">
                          <td className="font-medium py-2 px-4 border-r border-gray-300">
                            Resource Group
                          </td>
                          <td className="py-2 px-4">
                            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option>Select Resource Group</option>
                              <option>Al Khuwair</option>
                              <option>Ruwi</option>
                              <option>Alexandria</option>
                              <option>Technicians</option>
                              <option>Air Condition</option>
                              <option>mestri</option>
                              <option>Oceanside</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <h2 className="text-lg font-semibold bg-gray-50 p-4 rounded-lg">
                        Procurement and Jobs
                      </h2>
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              SLA Service Hours
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Assigned
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Utilized
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Jobs
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Total
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              1
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Open
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              1
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Hours
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billable
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Non-Billable
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Procurement
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Item Requests
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Picking Slips
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold bg-gray-50 p-4 rounded-lg">
                        Inventory and Billing
                      </h2>
                      <table className="w-full border-collapse border border-gray-300">
                        <tbody>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing Account
                            </td>
                            <td className="py-2 px-4">Assigned</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Services
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Inventory
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Assets
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Tools
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              Vehicles
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td
                              rowspan="2"
                              className="py-2 px-4 border-r border-gray-300"
                            >
                              Comparison
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Projected
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Consumed
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              Billing
                            </td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="py-2 px-4 border-r border-gray-300">
                              SAR 0
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              SAR 0
                            </td>
                            <td className="py-2 px-4 border-r border-gray-300">
                              SAR 0
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-6 text-right">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "General Job":
        return (
          <div>
            <div className="flex flex-col md:flex-row gap-6 min-h-screen">
              {/* Left Section */}
              <div className="flex flex-col gap-4 w-full md:w-1/3">
                {/* Detail Card */}
                <div className="bg-white shadow-md rounded-lg p-4">
                  <span className="text-sm mb-2">Detail</span>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-red-100 rounded-full">
                        <svg
                          className="w-6 h-6 text-red-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16h.01M12 16h.01M16 16h.01M9 20h6M6 6h.01M18 6h.01M12 6h.01M12 4.6v1.4M5.5 10h13"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          IMJ241114-5459
                        </h4>
                        <p className="text-gray-500 text-sm">
                          Requested Order On 15 Jan 25 by Farooq A
                        </p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
                      Assigned
                    </span>
                  </div>
                </div>

                {/* Assigned By */}
                <div className="bg-white shadow-md rounded-lg p-4">
                  <span className="text-sm mb-2">Assigned By</span>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="" alt="Assigned By" className="rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Farooq Abdullah</h4>
                      <p className="text-gray-500 text-sm">
                        Generic Department
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assigned To */}
                <div className="bg-white shadow-md rounded-lg p-4">
                  <span className="text-sm mb-2">Assigned To</span>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="" alt="Assigned To" className="rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Nirav</h4>
                      <p className="text-gray-500 text-sm">
                        Inspection Department
                      </p>
                    </div>
                  </div>
                </div>

                {/* Property and Unit Details */}
                <div className="bg-white shadow-md rounded-lg p-4">
                  <span className="text-sm mb-2">
                    Property and Unit Details
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <svg
                        className="w-6 h-6 text-purple-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10l4.29-4.29c.63-.63 1.71-.18 1.71.71V17c0 1.1-.9 2-2 2H4a2 2 0 01-2-2V10z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Majd Al Narges</h4>
                      <p className="text-gray-500 text-sm">Majd - Villa A</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Track</h4>
                <div className="flex flex-col gap-6">
                  {/* Track Item */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8h4m0 0a3 3 0 003-3V5a3 3 0 013-3h4"
                          />
                        </svg>
                      </div>
                      <div className="w-0.5 bg-gray-300 h-12"></div>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold">
                        Inspector Assigned
                      </h5>
                      <p className="text-gray-500 text-xs">
                        14-11-2024 04:31 PM | Farooq Abdullah
                      </p>
                    </div>
                  </div>

                  {/* Track Item */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16h.01M12 16h.01M16 16h.01M9 20h6"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold">
                        Inspection Created
                      </h5>
                      <p className="text-gray-500 text-xs">
                        14-11-2024 04:30 PM | Farooq Abdullah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Actual BOM":
        return (
          <div>
            <div className="flex flex-col justify-between h-screen">
              {/* Top Section */}
              {!visibility.section1 && (
                <div className="p-6">
                  <button
                    onClick={() => toggleVisibility("section1")}
                    className="flex items-center gap-2 text-blue-600 bg-white border border-gray-300 shadow-sm px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Bill of Materials and Costing
                  </button>
                </div>
              )}

              {visibility.section1 && (
                <div className="border p-4 rounded shadow-md bg-white">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-sm">
                      Bill of Materials and Costing
                    </h2>
                    <button
                      onClick={() => toggleVisibility("section2")}
                      className="px-4 py-2 bg-gray-100 text-black rounded-lg shadow-md"
                    >
                      Add Deductions
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
                      Save
                    </button>
                  </div>

                  <div className="space-y-6 mt-4">
                    {items.map((item) => {
                      const calculated = calculateAmounts(item);
                      return (
                        <div
                          key={item.id}
                          className="grid grid-cols-12 gap-4 items-start"
                        >
                          {/* Type & Category */}
                          <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">
                              Item Type
                            </label>
                            <select
                              className="border p-2 rounded w-full"
                              value={item.type}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "type",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Choose Type</option>
                              {dropdownOptions.types.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Item Name */}
                          <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">
                              Item Name
                            </label>
                            <input
                              type="text"
                              placeholder="Select the Item"
                              className="border p-2 rounded w-full"
                              value={item.itemName}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "itemName",
                                  e.target.value
                                )
                              }
                            />
                          </div>

                          {/* Price */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Price
                            </label>
                            <input
                              type="text"
                              placeholder="0 SAR"
                              className="border p-2 rounded w-full"
                              value={item.price}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "price",
                                  parseFloat(e.target.value)
                                )
                              }
                            />
                          </div>

                          {/* Qty */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Qty
                            </label>
                            <input
                              type="number"
                              placeholder="1"
                              className="border p-2 rounded w-full"
                              value={item.qty}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "qty",
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </div>

                          {/* Amount */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Amount
                            </label>
                            <input
                              type="text"
                              placeholder="0 SAR"
                              className="border p-2 rounded w-full"
                              value={item.amount}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "amount",
                                  parseFloat(e.target.value)
                                )
                              }
                            />
                          </div>

                          {/* Discount */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Discount (%)
                            </label>
                            <input
                              type="text"
                              placeholder="%"
                              className="border p-2 rounded w-full"
                              value={item.discount}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "discount",
                                  e.target.value
                                )
                              }
                            />
                          </div>

                          {/* Tax Group */}
                          <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">
                              Tax Group
                            </label>
                            <select
                              className="border p-2 rounded w-full"
                              value={item.taxGroup}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "taxGroup",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Select Tax Group</option>
                              {dropdownOptions.taxGroups.map((group) => (
                                <option key={group} value={group}>
                                  {group}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Tax Amount */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Tax Amount
                            </label>
                            <input
                              type="number"
                              placeholder="0.00"
                              className="border p-2 rounded w-full"
                              value={item.taxAmount}
                              onChange={(e) =>
                                handleInputChange(
                                  item.id,
                                  "taxAmount",
                                  parseFloat(e.target.value)
                                )
                              }
                            />
                          </div>

                          {/* Line Amount */}
                          <div className="col-span-1">
                            <label className="block text-sm font-medium mb-1">
                              Line Amount
                            </label>
                            <input
                              type="text"
                              className="border p-2 rounded w-full"
                              value={calculated.lineAmount.toFixed(2) + " SAR"}
                              readOnly
                            />
                          </div>

                          {/* Remove Button */}
                          <div className="col-span-1 flex items-end">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <button
                      onClick={addItem}
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    >
                      Add New BOM Item
                    </button>
                  </div>

                  {visibility.section2 && (
                    <div className="mt-5">
                      <h2 className="font-bold text-sm mb-4 flex items-center space-x-2">
                        <span>Deductions</span>
                      </h2>
                      <div className="space-y-6">
                        {deductions.map((deduction) => (
                          <div
                            key={deduction.id}
                            className="grid grid-cols-12 gap-4 items-start"
                          >
                            {/* Type & Category */}
                            <div className="col-span-2">
                              <label className="block text-sm font-medium mb-1">
                                Item Type & Category
                              </label>
                              <select
                                className="border p-2 rounded w-full"
                                value={deduction.type}
                                onChange={(e) =>
                                  handleInputChange1(
                                    deduction.id,
                                    "type",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Choose Type & Category</option>
                                {dropdownOptions1.types.map((type) => (
                                  <option key={type} value={type}>
                                    {type}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Item Name */}
                            <div className="col-span-2">
                              <label className="block text-sm font-medium mb-1">
                                Item Name
                              </label>
                              <input
                                type="text"
                                placeholder="Select the Item"
                                className="border p-2 rounded w-full"
                                value={deduction.itemName}
                                onChange={(e) =>
                                  handleInputChange(
                                    deduction.id,
                                    "itemName",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            {/* Description */}
                            <div className="col-span-3">
                              <label className="block text-sm font-medium mb-1">
                                Description
                              </label>
                              <input
                                type="text"
                                placeholder="Description"
                                className="border p-2 rounded w-full"
                                value={deduction.description}
                                onChange={(e) =>
                                  handleInputChange(
                                    deduction.id,
                                    "description",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            {/* Reference Number */}
                            <div className="col-span-3">
                              <label className="block text-sm font-medium mb-1">
                                Reference Number
                              </label>
                              <input
                                type="text"
                                placeholder="Reference Number"
                                className="border p-2 rounded w-full"
                                value={deduction.referenceNumber}
                                onChange={(e) =>
                                  handleInputChange(
                                    deduction.id,
                                    "referenceNumber",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            {/* Amount */}
                            <div className="col-span-1">
                              <label className="block text-sm font-medium mb-1">
                                Amount
                              </label>
                              <input
                                type="number"
                                placeholder="0 ₹"
                                className="border p-2 rounded w-full"
                                value={deduction.amount}
                                onChange={(e) =>
                                  handleInputChange(
                                    deduction.id,
                                    "amount",
                                    parseFloat(e.target.value)
                                  )
                                }
                              />
                            </div>

                            {/* Remove Button */}
                            <div className="col-span-1 flex items-end">
                              <button
                                onClick={() => removeDeduction(deduction.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        ))}

                        <button
                          onClick={addDeduction}
                          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        >
                          Add New Deductions
                        </button>
                      </div>
                    </div>
                  )}

                  {/* <button
                            onClick={() => toggleVisibility("section1")}
                            className="bg-red-500 text-white px-4 py-2 rounded shadow"
                        >
                            Hide Bill of Materials
                        </button> */}
                </div>
              )}

              {/* Bottom Section (Footer) */}
              <div className="bg-white shadow-lg p-4 fixed bottom-0 left-0 w-full ml-[65px]">
                <div className="flex items-center justify-between">
                  {/* Summary Items */}
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01m-6.938 4h13.856C18.507 20 19 19.552 19 19V5c0-.552-.493-1-1.08-1H6.08C5.493 4 5 4.448 5 5v14c0 .552.493 1 1.08 1z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Total Discount</p>
                        <p className="text-gray-900 font-medium text-sm">
                          0.00 INR
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-red-100 rounded-full">
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-4.554a1 1 0 10-1.414-1.414L13.5 7.828l-2.121-2.122a1 1 0 00-1.415 0L4 11.172"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">
                          Total Deductions
                        </p>
                        <p className="text-gray-900 font-medium text-sm">
                          0.00 INR
                        </p>
                      </div>
                    </div>
                    {/* Additional Summary Items */}
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-green-100 rounded-full">
                        <svg
                          className="w-5 h-5 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01m-6.938 4h13.856C18.507 20 19 19.552 19 19V5c0-.552-.493-1-1.08-1H6.08C5.493 4 5 4.448 5 5v14c0 .552.493 1 1.08 1z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">
                          Total After Taxes
                        </p>
                        <p className="text-gray-900 font-medium text-sm">
                          0.00 INR
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Generate Notes Button */}
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mr-[60px]">
                    Generate Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Summary":
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
              <div className="flex w-full md:w-auto gap-2 flex-1">
                <div className="flex w-auto">
                  <button className="bg-gray-100 p-2 rounded-l border border-r-0 hover:bg-gray-200">
                    <FiSearch className="text-gray-600" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search by ID"
                    className="border border-gray-300 rounded-r px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white pl-2 pt-2 pr-2">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">
            <button
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              aria-label="Go back"
            >
              <ArrowBackIosIcon />
            </button>
            <span>MR0241112-757</span>
          </h1>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Close Request
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 w-48 bg-white rounded-lg shadow-lg z-10"
              style={{ marginTop: "120px" }}
            >
              <button
                onClick={() => alert("Resolve Request clicked!")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Resolve Request
              </button>
              <button
                onClick={() => alert("Cancel Request clicked!")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cancel Request
              </button>
            </div>
          )}
        </div>
        <hr className="border-gray-300 mb-4" />
        {/* Tabs */}
        <div className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center text-nowrap space-x-2 pb-2 ${
                activeTab === tab.id
                  ? "text-blue-500 border-b-2 border-blue-500 font-medium"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-3 mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default MaintanceRequestView;
