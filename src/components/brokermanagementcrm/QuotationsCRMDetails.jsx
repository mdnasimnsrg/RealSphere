import React, { useState } from "react";
import img2 from "../../images/img2.jpeg";
import u1 from "../../images/u1.webp";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const QuotationsCRMDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">
          <button onClick={handleBack} className="" aria-label="Go back">
            <ArrowBackIosIcon />
          </button>
          Dubai- surin (OPP241107-691)
        </div>
      </div>

      <div className="max-w-8xl m-2 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Quotation Details</h3>
            {/* Quotation Details */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <span className="">QUOT241107-707</span>
              <br />
              <span className="text-sm">Generated on 07 Nov 2024</span>
              <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full float-right">
                In Active
              </span>
            </div>
            <hr className="border-gray-300 mb-1 mt-4" />
            <div className="flex flex-wrap gap-y-3 gap-x-10 w-full p-4">
              <div className="">
                <p className="text-gray-500">LEASE START DATE</p>
                <p className="text-sm font-semibold">07 Nov 2024</p>
              </div>
              <div className="">
                <p className="text-gray-500">LEASE END DATE</p>
                <p className="text-sm font-semibold">06 Nov 2025</p>
              </div>
              <div className="">
                <p className="text-gray-500">Billing Start Date</p>
                <p className="text-sm font-semibold">07 Nov 2024</p>
              </div>
            </div>
            <hr className="border-gray-300 mb-1 mt-4" />
            <div className="">
              <h3 className="text-md font-semibold">Contact Details</h3>
              <div className="p-2 border rounded-lg shadow mt-2">
                <p className="mt-2 font-semibold">Dubai- surin</p>
                <p className="text-gray-600 text-sm">+91 98765432</p>
                <p className="text-gray-600 text-sm">surin.sing@yopmail.com</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-semibold">Salesman</h3>
              <div className="p-2 border rounded-lg shadow mt-2">
                <p className="mt-2 font-semibold">Farooq Abdullah</p>
                <p className="text-gray-600 text-sm">+966 756543433</p>
                <p className="text-gray-600 text-sm">pg2.demo2@propgoto.com</p>
              </div>
              <div className="mt-2">
                <button className="w-[48%] bg-blue-600 text-white py-2 rounded-lg">
                  Resend Quotation
                </button>
                <button className="w-[48%] bg-blue-600 text-white py-2 rounded-lg ml-2">
                  View Quotation
                </button>
              </div>
            </div>
          </div>

          {/* Unit Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold float-left">Unit Details</h3>
            <button className="text-blue-600 border-blue-600 px-3 py-1 border rounded-lg shadow float-right mb-4">
              <Link to={`/quotation-crmdetail`}>Customize</Link>
            </button>
            <img
              className="w-full h-40 object-cover rounded-lg mt-2"
              src={img2}
              alt="Building"
            />
            <h4 className="mt-2 font-semibold">B201</h4>
            <p className="text-gray-600">SAR 118700.00</p>
            <p className="text-gray-500 text-sm">UNIT23-363 . 500 Sq. Meter</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg"
            >
              View Details
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Quotation Summary */}
            <div className="bg-gray-50 p-4 rounded-lg shadow col-span-2">
              <h3 className="text-lg font-semibold">Quotation Summary</h3>
              <div className="mt-2">
                <div className="flex justify-between text-gray-700">
                  <span>Description</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>Primary</span>
                  <span>SAR 19200.00</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>Secondary</span>
                  <span>SAR 18000.00</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>One Time Charges</span>
                  <span>SAR 500.00</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>Refundables</span>
                  <span>SAR 75000.00</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>Parking Slot</span>
                  <span>SAR 6000.00</span>
                </div>
                <div className="flex justify-between text-black-700">
                  <span>Total Tax</span>
                  <span>SAR 0.00</span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>Discount</span>
                  <span>- SAR0.00</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>SAR 118700.00</span>
                </div>
              </div>
              <div className="mt-2">
                <button className="w-[48%] bg-blue-600 text-white py-2 rounded-lg">
                  Reservation / Booking
                </button>
                <button className="w-[48%] bg-blue-600 text-white py-2 rounded-lg ml-2">
                  Mark As Won
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Unit View</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600"
              >
                ✖
              </button>
            </div>
            <div className="mt-4">
              <img
                className="col-span-3 w-full h-40 object-cover rounded-lg"
                src={u1}
                alt="Unit"
              />
              <h4 className="mt-2 font-semibold">
                B201{" "}
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  UNIT23-363
                </span>
              </h4>
              <p className="text-gray-600">BlackSky, Block B, Second Floor</p>
              <p className="text-gray-500 text-sm">1 1 1 BHK 500 Sq. Meter</p>
              <div className="mt-4 border-t pt-4">
                <h5 className="text-sm font-semibold">Pricing Summary</h5>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span>Rent</span>
                  <span>SAR 19200</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Maintenance Charges</span>
                  <span>SAR 12000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Security Deposit</span>
                  <span>SAR 75000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Agreement Charges</span>
                  <span>SAR 500</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Fridge</span>
                  <span>SAR 6000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Parking</span>
                  <span>SAR 6000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>SAR 0</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>SAR 118700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationsCRMDetails;
