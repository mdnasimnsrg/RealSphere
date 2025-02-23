import React from "react";
import "react-phone-number-input/style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function CreateGeneralRequest() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="relative p-4">
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Go back"
          >
            <ArrowBackIosIcon />
          </button>
          Create General Request
        </div>
      </div>

      <form className="">
        <div className="">
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
                  Contract
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Contract</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Project
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500">
                  <option>Project</option>
                </select>
              </div>
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
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
            </div>

            <div className="w-full md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Problem Description
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                  placeholder="Problem Description"
                />
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
          </div>
        </div>

        <div className="flex items-center justify-between p-4 mt-4 fixed bottom-0  z-10 gap-6 w-full lg:w-fit right-4">
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

export default CreateGeneralRequest;
