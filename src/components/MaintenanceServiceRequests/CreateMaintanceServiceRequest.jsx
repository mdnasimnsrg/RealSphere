import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Plus } from "lucide-react";

function CreateMaintenanceServiceRequest() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState();

  const handleBack = () => {
    window.history.back(); // Go back to the previous page
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const RequestCard = ({ icon, title, description, bgColor }) => (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md cursor-pointer w-full hover:shadow-lg">
      <div
        className={`p-3 rounded-lg ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <Plus className="text-gray-600" />
    </div>
  );

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          Create Maintenance Request
        </div>
      </div>

      <form className="">
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-6">
            <h5 className="text-[0.8rem] font-semibold">SERVICE DETAILS</h5>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Property*
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Property</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Unit*</label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Unit</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Category*
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Category</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Sub-Category*
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Sub-Category</option>
                </select>
              </div>
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Problem Title*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  placeholder="Problem Title"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Problem Since*
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Contract
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Contract</option>
                </select>
              </div>
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Project
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  placeholder="Project"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Asset Location*
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Select Location</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Preferred Visit Date*
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Preferred Visit Time*
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Priority*
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Status*
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="w-full border border-blue-500 bg-blue-500 text-white rounded-md p-2"
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    Inactive
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Problem Description
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  rows="4"
                  placeholder="Problem Description"
                ></textarea>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Request Against
                </label>
                <div className="">
                  <div className="grid lg:grid-cols-2 gap-4">
                    <RequestCard
                      icon={<span className="text-purple-600 text-xl">🏠</span>}
                      title="Unit Level"
                      description="For non-asset item"
                      bgColor="bg-purple-100"
                    />
                    <RequestCard
                      icon={<span className="text-green-600 text-xl">🛋️</span>}
                      title="Asset / item from unit"
                      description="Eg: AC, TV, Light etc"
                      bgColor="bg-green-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 mt-4 flex flex-wrap gap-6">
            <h5 className="text-[0.8rem] font-semibold">Contact</h5>
            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Contact Name*
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  placeholder="Contact Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Primary Contact*
                </label>
                <PhoneInput
                  id="phone"
                  international
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Primary Contact"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Alternate Contact Number
                </label>
                <PhoneInput
                  id="phone"
                  international
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Alternate Contact Number"
                />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 mt-4 flex flex-wrap gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                UPLOAD IMAGES
              </label>
              <input
                type="file"
                className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                placeholder="Upload image here"
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <img src={file} className="h-[200px]" />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>

        <div className="flex gap-4 z-40 fixed bottom-5 px-4 justify-between w-full lg:w-fit right-0">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
          >
            Cancel
          </button>
          <div className="flex justify-end flex-grow">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateMaintenanceServiceRequest;
