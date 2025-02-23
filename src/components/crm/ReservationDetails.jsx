import React, { useState } from "react";
import img2 from "../../images/img2.jpeg";
import u1 from "../../images/u1.webp";
import u2 from "../../images/u2.jpeg";
import u3 from "../../images/u3.jpeg";
import u4 from "../../images/u4.jpeg";
import u5 from "../../images/u5.jpeg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ReservationDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [u1, u2, u3, u4, u5];

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
          Sandhiya (OPP240924-552)
        </div>
      </div>

      <div className="max-w-8xl m-2 bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Reservation Details</h3>
            {/* Reservation Details */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full mt-2">
                In Active
              </span>
              <br />
              ---
              <span className="float-right mt-[-20px]">Paid on</span>
            </div>
            <div className="mt-4 flex flex-wrap justify-between gap-2">
              <button className="w-fit bg-red-500 text-white p-2 rounded-lg">
                Cancel Reservation
              </button>
              <button className="w-fit bg-gray-300 text-gray-700 p-2 rounded-lg ">
                Send Payment Link
              </button>
            </div>
            {/* Quotation Details */}
            <div className="mt-4">
              <div className="flex justify-between gap-4 items-start">
                <h3 className="text-lg font-semibold float-left text-balance">
                  Quotation Details (QUOT240924-554)
                </h3>
                <span className="inline-block bg-green-200 text-green-800 text-sm px-3 py-1 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex flex-wrap gap-1 w-full mt-4 p-4 border rounded-lg shadow">
                <div className="w-[30%]">
                  <p className="text-sm font-semibold">Generated on</p>
                  <p className="text-gray-500">24 Sep 2024</p>
                </div>
                <div className="w-[30%]">
                  <p className="text-gray-500">LEASE START DATE</p>
                  <p className="text-sm font-semibold">01 Oct 2024</p>
                </div>
                <div className="w-[30%]">
                  <p className="text-gray-500">LEASE END DATE</p>
                  <p className="text-sm font-semibold">31 Oct 2024</p>
                </div>
                <div className="w-[30%]">
                  <p className="text-gray-500">Lease Start Date</p>
                  <p className="text-sm font-semibold">01 Oct 2024</p>
                </div>
                <div className="w-[30%]">
                  <p className="text-gray-500">Grace Period</p>
                  <p className="text-sm font-semibold">
                    Days(In the Beginning)
                  </p>
                </div>
              </div>
            </div>
            {/* Lead Details */}
            <div className="p-4 border rounded-lg shadow mt-4">
              <h3 className="text-lg font-semibold">Lead Details</h3>
              <p className="mt-2 font-semibold">Sandhiya</p>
              <p className="text-gray-600 text-sm">+91 0099887766</p>
              <p className="text-gray-600 text-sm">sandhiya@yopmail.com</p>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
                View Quotation
              </button>
            </div>
          </div>

          {/* Unit Details */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Unit Details</h3>
            <img
              className="w-full h-40 object-cover rounded-lg mt-2"
              src={img2}
              alt="Building"
            />
            <h4 className="mt-2 font-semibold">Earwig 2</h4>
            <p className="text-gray-600">₹5200.00</p>
            <p className="text-gray-500 text-sm">UNIT24-864 • 550 Sq. Meter</p>
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
                  <span>Total Tax</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>Discount</span>
                  <span>- ₹0.00</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>₹5200.00</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
                Convert Agreement
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-[90vh] overflow-y-scroll scrollbar-hide lg:w-1/2">
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
              <div className="grid grid-cols-5 gap-2">
                <img
                  className="col-span-3 w-full h-60 object-cover rounded-lg"
                  src={images[0]}
                  alt="Unit"
                />
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  {images.slice(1).map((img, index) => (
                    <img
                      key={index}
                      className="w-full h-28 object-cover rounded-lg"
                      src={img}
                      alt={`Thumbnail ${index}`}
                    />
                  ))}
                </div>
              </div>
              <h4 className="mt-2 font-semibold">
                Earwig 2{" "}
                <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  UNIT24-864
                </span>
              </h4>
              <p className="text-gray-600">Earwig Apartments</p>
              <p className="text-gray-500 text-sm">1 BHK • 550 Sq. Meter</p>
              <div className="mt-4 border-t pt-4">
                <h5 className="text-md font-semibold">RENTAL BREAK UP</h5>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span>Reservation Rent</span>
                  <span>₹5000</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Maintenance Charges</span>
                  <span>₹200</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>₹5200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationDetails;
