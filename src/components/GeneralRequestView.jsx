import React, { useState } from "react";
import { FaClipboardList, FaChartBar } from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";

const GeneralRequestView = () => {
  const [activeTab, setActiveTab] = useState("Requests");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: "Requests", label: "Requests", icon: <FaClipboardList /> },
    { id: "KPI", label: "KPI", icon: <FaChartBar /> },
  ];

  const handleBack = () => {
    window.history.back();
  };

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Requests":
        return (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
            <div className="flex-1 bg-white p-4 rounded-lg shadow">
              <div className="rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  pl do the needful
                </h2>
                <div className="flex space-x-2 mb-2">
                  <span className="bg-gray-100 text-black-700 py-1 px-3 rounded-lg text-sm">
                    House Keeping
                  </span>
                  <span className="bg-gray-100 text-black-700 py-1 px-3 rounded-lg text-sm">
                    Driveways
                  </span>
                </div>
              </div>

              <hr className="border-gray-300 mb-4" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 rounded-lg">
                  <h3 className="mb-2">Request Against</h3>
                  <div className="border-gray-300 shadow rounded-lg p-5">
                    <p className="text-gray-600">Unit -2 (Sale)</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-6">
                <div className="flex-1">
                  <h3 className="font-semibold">PROBLEM SINCE</h3>
                  <p className="text-gray-600">13 Jan 2025</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">RAISED ON</h3>
                  <p className="text-gray-600">15 Jan 2025</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">PROPERTY DETAILS</h3>
                  <p className="text-gray-600">Serenity Towers</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">UNIT DETAILS</h3>
                  <p className="text-gray-600">Unit -2 (Sale)</p>
                </div>
              </div>
              <hr className="border-gray-300 mt-4 mb-4" />
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold">PREFERRED VISIT DATE</h3>
                  <p className="text-gray-600">-</p>
                </div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-4">
                {checked ? (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Charging Method
                    </label>
                    <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Warranty & Support</option>
                    </select>
                    <hr className="border-gray-300 mb-4 mt-4" />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={checked1}
                          onChange={handleChange1}
                          color="primary"
                        />
                      }
                      label="1st Response"
                    />
                  </div>
                ) : (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={checked}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Acknowledge"
                  />
                )}
              </div>
              <div className="bg-white p-4 mt-2">
                <h3 className="text-lg font-semibold mb-4">Track</h3>
                <hr className="border-gray-300 mb-4" />
                <ul>
                  <li className="mb-4">
                    <div className="flex justify-between">
                      <span className="text-blue-500 font-medium">Open</span>
                    </div>
                    <p className="text-gray-600">
                      Notes:
                      <br />
                      14 Nov 24 04:30 pm
                    </p>
                  </li>
                </ul>
                <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  +Add Notes
                </button>
              </div>
            </div>
          </div>
        );
      case "KPI":
        return (
          <div>
            <div className="flex">
              <div className="w-full lg:">
                <div className="flex gap-8 flex-col lg:flex-row">
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
                              General Request
                            </td>
                            <td className="py-2 px-4">GR0250115-231</td>
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
                            <td className="py-2 px-4">-</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Property Name
                            </td>
                            <td className="py-2 px-4">Serenity Towers</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Unit Name
                            </td>
                            <td className="py-2 px-4">Unit -2 (Sale)</td>
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
                            <td className="py-2 px-4">Warranty & Support</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              Warranty End Date
                            </td>
                            <td className="py-2 px-4">10 Jan 2027</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              -
                            </td>
                            <td className="py-2 px-4">-</td>
                          </tr>
                          <tr className="border-t border-b border-gray-200">
                            <td className="font-medium py-2 px-4 border-r border-gray-300">
                              BOM Approval on
                            </td>
                            <td className="py-2 px-4">17 Jan 2025</td>
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
                            <td className="py-2 px-4">-</td>
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
                  <div className="flex-1 bg-white shadow-lg rounded-lg overflow-auto sc-fkSzgi">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <h2 className="text-lg font-semibold">
                        Progress Details - Created On 15 Jan 2025
                      </h2>
                      <span className="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded-md">
                        Open for 1 Days
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
                          <td className="py-2 px-4">
                            AGR250109-519 (Contract start Date: 09 Jan 2025 ,
                            Handover Date: 10 Jan 2025)
                          </td>
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
                          <td className="py-2 px-4">-</td>
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
                            <td className="py-2 px-4">A-336 - Marcellus</td>
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
            <span>GR0250115-231</span>
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
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-2 ${
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

export default GeneralRequestView;
