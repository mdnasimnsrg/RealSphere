import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

const FinancialOverview = () => {
  const [activeTab, setActiveTab] = useState("Company Cash");
  const tabs = [
    {
      name: "Company Cash",
      amount: "SAR 9,533.17",
      description: "Default account",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
              <h2 className="text-sm text-gray-600 mb-2">As of: 1/1/2025</h2>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Collect management fees
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Record deposit
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-800 my-4" />
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Company checking
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-green-500 h-4 rounded-md"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 9,533.17</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Company savings
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-blue-500 h-4 rounded-md"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 6,953.29</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">Rent account</span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-orange-500 h-4 rounded-md"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 700.00</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Security deposit
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-purple-500 h-4 rounded-md"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 100.00</span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-white rounded-md">
            <TextField
              select
              label="Filter by Type"
              defaultValue="ActiveAccountsOnly"
              className="md:w-48 w-full"
            >
              <MenuItem value="AllAccounts">All Accounts</MenuItem>
              <MenuItem value="ActiveAccountsOnly">
                Active Accounts Only
              </MenuItem>
              <MenuItem value="InactiveAccountsOnly">
                Inactive Accounts Only
              </MenuItem>
            </TextField>
            <div className="w-full overflow-x-auto">
              <table className="w-full table-auto text-left text-sm border border-gray-300 mt-5">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 border-b border-gray-300">
                    <th className="px-4 py-2 border-r border-gray-300">
                      Account Name
                    </th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      Account Number
                    </th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      Company Cash?
                    </th>
                    <th className="px-4 py-2">Total Balance</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Company checking
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      *2345
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 9,533.17
                    </td>
                    <td className="px-4 py-2">SAR 9,533.17</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Company savings
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      *****6780
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 6,953.29
                    </td>
                    <td className="px-4 py-2">SAR 6,953.29</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Rent account
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300"></td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 700.00
                    </td>
                    <td className="px-4 py-2">SAR 700.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Security deposit escrow
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300"></td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 100.00
                    </td>
                    <td className="px-4 py-2">SAR 100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Unpaid Bills",
      amount: "SAR 7,530.00",
      description: "8 due | 6 overdue",
      content: (
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <h2 className="text-sm text-gray-600 mb-2">Due in:</h2>
              <TextField
                select
                label=""
                defaultValue="AllUnpaid"
                className="md:w-48 w-full"
              >
                <MenuItem value="AllUnpaid">All Unpaid</MenuItem>
                <MenuItem value="Next30Days">Next 30 days</MenuItem>
                <MenuItem value="Next60Days">Next 60 days</MenuItem>
              </TextField>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Record bill
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Pay bills by check
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Pay bills by EFT
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-800 my-4" />
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Company checking
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-green-500 h-4 rounded-md"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 9,533.17</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">Unpaid bills</span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-orange-500 h-4 rounded-md"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 7530.00</span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-white rounded-md">
            <TextField
              select
              label="Add Filter Options"
              defaultValue=""
              className="md:w-48 w-full"
            >
              <MenuItem value="ReferenceNumber">Reference Number</MenuItem>
              <MenuItem value="Vendor">Vendor</MenuItem>
            </TextField>
            <div className="w-full overflow-x-auto">
              <table className="w-full table-auto text-left text-sm border border-gray-300 mt-5">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 border-b border-gray-300">
                    <th className="px-4 py-2 border-r border-gray-300">PAID</th>
                    <th className="px-4 py-2 border-r border-gray-300">DUE</th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      VENDOR
                    </th>
                    <th className="px-4 py-2 border-r border-gray-300">MEMO</th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      REFERENCE NO
                    </th>
                    <th className="px-4 py-2">AMOUNT</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Overdue
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      12/15/2024
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Morris & Hayes, LLC
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Eviction fees / consult
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      DC-7771
                    </td>
                    <td className="px-4 py-2">SAR 800.00</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Overdue
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      12/15/2024
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Morris & Hayes, LLC
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Eviction fees / consult
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      DC-7771
                    </td>
                    <td className="px-4 py-2">SAR 800.00</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Overdue
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      12/15/2024
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Morris & Hayes, LLC
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Eviction fees / consult
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      DC-7771
                    </td>
                    <td className="px-4 py-2">SAR 800.00</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Overdue
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      12/15/2024
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Morris & Hayes, LLC
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Eviction fees / consult
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      DC-7771
                    </td>
                    <td className="px-4 py-2">SAR 800.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Net Income",
      amount: "SAR 0.00",
      description: "Current month",
      content: (
        <div className="w-full">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <h2 className="text-sm text-gray-600 mb-2">As of: 1/1/2025</h2>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Collect management fees
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                  Record deposit
                </button>
              </div>
            </div>
            <hr className="border-t border-gray-800 my-4" />
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Company checking
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-green-500 h-4 rounded-md"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 9,533.17</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Company savings
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-blue-500 h-4 rounded-md"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 6,953.29</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">Rent account</span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-orange-500 h-4 rounded-md"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 700.00</span>
              </div>
              <div className="flex items-center">
                <span className="w-32 text-sm text-gray-700">
                  Security deposit
                </span>
                <div className="w-full bg-gray-200 h-4 rounded-md relative">
                  <div
                    className="bg-purple-500 h-4 rounded-md"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="ml-4 text-sm text-gray-700">SAR 100.00</span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-white rounded-md w-full">
            <TextField
              select
              label="Filter by Type"
              defaultValue="ActiveAccountsOnly"
              className="md:w-48 w-full"
            >
              <MenuItem value="AllAccounts">All Accounts</MenuItem>
              <MenuItem value="ActiveAccountsOnly">
                Active Accounts Only
              </MenuItem>
              <MenuItem value="InactiveAccountsOnly">
                Inactive Accounts Only
              </MenuItem>
            </TextField>
            <div className="w-full overflow-x-auto">
              <table className="w-full table-auto text-left text-sm border border-gray-300 mt-5">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 border-b border-gray-300">
                    <th className="px-4 py-2 border-r border-gray-300">
                      Account Name
                    </th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      Account Number
                    </th>
                    <th className="px-4 py-2 border-r border-gray-300">
                      Company Cash?
                    </th>
                    <th className="px-4 py-2">Total Balance</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Company checking
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      *2345
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 9,533.17
                    </td>
                    <td className="px-4 py-2">SAR 9,533.17</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Company savings
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      *****6780
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 6,953.29
                    </td>
                    <td className="px-4 py-2">SAR 6,953.29</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-4 py-2 border-r border-gray-300">
                      Rent account
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300"></td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 700.00
                    </td>
                    <td className="px-4 py-2">SAR 700.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-r border-gray-300">
                      Security deposit escrow
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300"></td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      SAR 100.00
                    </td>
                    <td className="px-4 py-2">SAR 100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-xl font-semibold text-gray-800">
          Company financials
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
            Company settings
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
            Staff members
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex -mb-px text-sm font-medium text-center overflow-x-auto">
          {tabs.map((tab) => (
            <li key={tab.name} className="mr-2">
              <button
                className={`flex flex-col items-start p-4 ${
                  activeTab === tab.name
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <span className="text-sm">{tab.name}</span>
                <span
                  className={`text-xl font-bold text-nowrap ${
                    tab.name === "Unpaid Bills"
                      ? "text-red-500"
                      : tab.name === "Company Cash"
                      ? "text-green-500"
                      : "text-gray-800"
                  }`}
                >
                  {tab.amount}
                </span>
                <span className="text-xs text-gray-500">{tab.description}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="p-4 bg-white rounded shadow">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default FinancialOverview;
