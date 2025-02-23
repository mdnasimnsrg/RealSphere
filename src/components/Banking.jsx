import React, { useState } from "react";

const BankingSection = () => {
  const [accounts] = useState([
    {
      name: "Company checking",
      description: "Company operating funds",
      accountNumber: "*2345",
      epayEnabled: false,
      retailCashEnabled: false,
      lastReconciliation: "10/31/2024",
      undepositedFunds: false,
      balance: "SAR 9,533.17",
    },
    {
      name: "Company savings",
      description: "Company savings",
      accountNumber: "*****6780",
      epayEnabled: false,
      retailCashEnabled: false,
      lastReconciliation: "10/31/2024",
      undepositedFunds: false,
      balance: "SAR 6,953.29",
    },
    {
      name: "Lincoln Operating",
      description: "For Lincoln Homeowners Association operating funds",
      accountNumber: "**4324",
      epayEnabled: false,
      retailCashEnabled: false,
      lastReconciliation: "10/31/2024",
      undepositedFunds: true,
      balance: "SAR 23,250.00",
    },
  ]);

  const [statusFilter, setStatusFilter] = useState("Active");

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div className="p-6 bg-white min-h-screen w-full">
      <h2 className="text-2xl font-bold mb-4">Banking</h2>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-y-4">
        <div>
          <label htmlFor="statusFilter" className="text-sm font-medium">
            Status:
          </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={handleFilterChange}
            className="ml-2 p-2 border border-gray-300 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 mr-2">
            Add Bank Account
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
            Print Checks
          </button>
        </div>
      </div>
      <div className="overflow-x-auto sc-fkSzgi">
        <table className="w-full min-w-max bg-white shadow-md rounded border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Account Number</th>
              <th className="p-4 border-b">Last Reconciliation Date</th>
              <th className="p-4 border-b">Undeposited Funds</th>
              <th className="p-4 border-b">Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-4">
                  <div>
                    <span className="font-semibold">{account.name}</span>
                    <div className="text-sm text-gray-500">
                      {account.description}
                    </div>
                  </div>
                </td>
                <td className="p-4">{account.accountNumber}</td>
                <td className="p-4">{account.lastReconciliation}</td>
                <td className="p-4 text-center">
                  {account.undepositedFunds ? (
                    <span className="text-orange-500 font-bold">⚠</span>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-4 text-right">{account.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankingSection;
