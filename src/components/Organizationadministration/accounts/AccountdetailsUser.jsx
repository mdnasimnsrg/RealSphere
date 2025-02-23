import React from "react";

const AccountdetailsUser = () => {
  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Business Development</div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
            <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
              <option value="businessDev">Business Development</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <div>
          {/* Profile Section */}
          <div className="flex items-start gap-6 border-b pb-4">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-4xl">🖼️</span>
              </div>
              <span className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs rounded-md px-2 py-1">
                A-337
              </span>
            </div>
            <div className="flex flex-wrap gap-4 w-full">
              <div className="">
                <p className="text-gray-500">Account Type</p>
                <p className="text-sm font-semibold">AP</p>
              </div>
              <div className="">
                <p className="text-gray-500">Company Name</p>
                <p className="text-sm font-semibold">Business Development</p>
              </div>
              <div className="">
                <p className="text-gray-500">Relationship</p>
                <p className="text-sm font-semibold">Service Provider</p>
              </div>
              <div className="">
                <p className="text-gray-500">Service Provider</p>
                <p className="text-sm font-semibold">ISS</p>
              </div>
              <div className="">
                <p className="text-gray-500">Business Description</p>
                <p className="text-sm font-semibold">Movenpick Contract</p>
              </div>
              <div className="">
                <p className="text-gray-500">Business Type</p>
                <p className="text-sm font-semibold">Individual</p>
              </div>
              <div className="">
                <p className="text-gray-500">Vendor Group</p>
                <p className="text-sm font-semibold">Generic</p>
              </div>
              <div className="">
                <p className="text-gray-500">Alternative Account Number</p>
                <p className="text-sm font-semibold">SA36726356256372765372</p>
              </div>
            </div>
          </div>

          {/* Registered Details Section */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-black pb-2">
              Registered Details
            </h3>
            <div className="grid grid-cols-3 gap-y-2 mt-2">
              <div>
                <p className="text-gray-500">Registered Company</p>
                <p className="text-sm font-semibold">Yes</p>
              </div>
              <div>
                <p className="text-gray-500">CR Number</p>
                <p className="text-sm font-semibold">1026534263</p>
              </div>
              <div>
                <p className="text-gray-500">Tax Registered</p>
                <p className="text-sm font-semibold">No</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 m-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Address Section */}
          <div className="bg-white rounded-md shadow-md p-4 border border-gray-200 flex-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <svg
                className="w-5 h-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5Z" />
              </svg>
              Address
            </div>
            <div className="mt-4 h-28 border border-gray-300 rounded-lg"></div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-md shadow-md p-4 border border-gray-200 flex-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <svg
                className="w-5 h-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.64-.35c.91.31 1.9.48 2.95.48.82 0 1.5.68 1.5 1.5v3c0 .82-.68 1.5-1.5 1.5C9.94 22 2 14.06 2 4.5 2 3.68 2.68 3 3.5 3h3c.82 0 1.5.68 1.5 1.5 0 1.05.17 2.04.48 2.95.15.51.05 1.09-.35 1.64l-2.2 2.2Z" />
              </svg>
              Contact & Other Information
            </div>
            <div className="mt-4 text-gray-700">
              <p className="font-medium text-sm">
                Primary Telephone:{" "}
                <span className="font-normal">+966 574444333</span>
              </p>
              <p className="font-medium text-sm mt-2">
                Primary Contact:{" "}
                <span className="font-normal">+966 574444333</span>
              </p>
              <p className="font-medium text-sm mt-2">
                Email Address:{" "}
                <span className="text-blue-600">Admin@Sample.Com.Sa</span>
              </p>
            </div>
          </div>
        </div>

        {/* Banking Details Section */}
        <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200">
          <h2 className="text-sm font-semibold text-black mb-4">
            Banking Basic Details
          </h2>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Bank Account Type</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Account Number</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Bank Name</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Branch Name</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Bank Routing Code</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Bank Routing Type</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">City</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Country</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Currency</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Address Line 1</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Address Line 2</p>
              <p>-</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200">
          <h2 class="text-sm font-semibold text-black mb-4">KYC Details</h2>
          <p className="text-sm text-center">No data found</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 mt-3 border border-gray-200">
          <h2 className="text-sm font-semibold text-black mb-4">ID Details</h2>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">National ID:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">National ID Expiry:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Passport ID:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Passport Expiry:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Resident ID:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Resident ID Expiry:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Visa Number:</p>
              <p>-</p>
            </div>
            <div className="w-full md:w-width24%">
              <p className="text-sm font-medium">Visa Expiry:</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountdetailsUser;
