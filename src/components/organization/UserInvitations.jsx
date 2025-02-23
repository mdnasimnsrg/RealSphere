import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

const UserInvitations = () => {
  const [selectedCustomer, setSelectedCustomer] = useState("Ahmed Samy");

  const customers = [
    { name: "Ahmed Samy", email: "ahmed.sami6161@outlook.com" },
    { name: "Rome", email: "rome@yopmail.com" },
    { name: "magizhmathi", email: "magizhmathi@mailinator.com" },
    { name: "Salim", email: "salim@yopmail.com" },
    { name: "Gangadharan", email: "gangadharan@yopmail.com" },
    { name: "Snow drop", email: "snowdrop@yopmail.com" },
    { name: "Pranav", email: "r.pranav@propgoto.com" },
  ];

  return (
    <>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">User Invitations</div>
        <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
          <FiUser className="text-gray-500 mr-2" />
          <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
            <option value="businessDev">Business Development</option>
          </select>
        </div>
      </div>

      <div className="flex w-full  p-4 bg-gray-100 flex-wrap gap-4 lg:flex-nowrap">
        {/* Sidebar */}
        <div className="lg:w-96 w-full bg-white p-4 rounded-lg shadow-md">
          <select className="border rounded w-full p-2 mb-2 focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
            <option value="">Customer</option>
            <option value="">Employee</option>
          </select>
          <hr className="border-gray-300 mb-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 mb-4 border rounded"
          />
          <ul>
            {customers.map((customer) => (
              <li
                key={customer.name}
                className={`p-2 cursor-pointer rounded ${
                  selectedCustomer === customer.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCustomer(customer.name)}
              >
                <span className="font-bold">{customer.name}</span>
                <br />
                <span className="text-sm">{customer.email}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Details */}
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{selectedCustomer}</h2>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-lg text-2xl font-bold">
              {selectedCustomer[0]}
            </div>
            <div className="ml-4">
              <p className="font-semibold">Profile Details</p>
              <p>Name: {selectedCustomer}</p>
              <p>
                Email:{" "}
                {customers.find((c) => c.name === selectedCustomer)?.email}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Invite to Apps</h3>
            <p className="text-sm text-gray-500">
              Send a Mobile App Access Invite
            </p>
            <div className="flex gap-4 mt-2">
              <div className="p-4 border rounded-lg flex items-center md:justify-between w-1/2 flex-wrap gap-2 justify-center">
                <span className="flex items-center">
                  <span className="text-lg">🏡</span>
                  <span className="ml-2">Resident</span>
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Resend
                </button>
              </div>
              <div className="p-4 border rounded-lg flex items-center md:justify-between justify-center gap-2 w-1/2 flex-wrap ">
                <span className="flex items-center">
                  <span className="text-lg">🏡</span>
                  <span className="ml-2">Owner</span>
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Resend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInvitations;
