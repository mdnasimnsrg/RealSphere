import React, { useState } from "react";
import propertysearch from "../../images/propertySearchBanner.png";
import { Calendar, ChevronDown, Filter, Crosshair } from "lucide-react";
import { FiX } from "react-icons/fi";

const PropertyCRMSearch = () => {
  const [selectedType, setSelectedType] = useState("Residential");
  const [selectedTransaction, setSelectedTransaction] = useState("Lease");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const opportunities = [
    { id: "OPP231109-0097", name: "Arun JK", initials: "AJ" },
    { id: "OPP231109-100", name: "Manoharan Gandhi", initials: "MG" },
    { id: "OPP231103-0094", name: "Pranav", initials: "P" },
    { id: "OPP231103-0093", name: "Garaa", initials: "G" },
    { id: "OPP231109-0098", name: "Ajay Kumar", initials: "AK" },
  ];

  const filteredOpportunities = opportunities.filter(
    (opp) =>
      opp.name.toLowerCase().includes(search.toLowerCase()) ||
      opp.id.includes(search)
  );
  const [isOpen1, setIsOpen1] = useState(false);
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [openSections, setOpenSections] = useState({
    propertyAmenities: false,
    gracePeriod: false,
    unitType: false,
    furnishing: false,
    petsAllowed: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${propertysearch})` }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
        <div className="w-full px-4">
          <h2 className="text-lg text-center font-semibold text-gray-700">
            Property Search
          </h2>
          <h1 className="text-2xl text-center font-bold text-gray-900">
            Find Your Real Estate <span className="text-orange-500">& Get</span>{" "}
            Your Dream Space
          </h1>

          <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4 items-center w-full lg:max-w-3xl mx-auto">
  {/* Property Type Toggle */}
  <div className="flex flex-wrap justify-center gap-2 w-full">
    {["Residential", "Commercial"].map((type) => (
      <button
        key={type}
        className={`px-4 py-2 border rounded-lg ${
          selectedType === type ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => setSelectedType(type)}
      >
        {type}
      </button>
    ))}
    <button className="text-gray-600 underline text-sm">Clear All</button>
  </div>

  {/* Dropdowns & Filters */}
  <div className="flex flex-wrap gap-4 w-full">
    {/* Business Development Dropdown */}
    <div className="relative flex-grow">
      <select className="w-full p-2 border rounded-lg appearance-none">
        <option>Business Development</option>
      </select>
      <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
    </div>

    {/* Filter Icon */}
    <button
      onClick={() => setShowFilter(true)}
      className="p-2 border rounded-lg"
    >
      <Filter size={18} />
    </button>
  </div>

  {/* Search & Location */}
  <div className="flex flex-wrap gap-4 w-full">
    {/* Search Opportunities */}
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full p-3 border rounded-lg bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
      />
      <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="flex items-center p-3 border-b hover:bg-gray-100 cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold mr-3">
                {opp.initials}
              </div>
              <div>
                <div className="font-semibold">{opp.id}</div>
                <div className="text-gray-500 text-sm">{opp.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Location Dropdown */}
    <div className="relative flex-grow">
      <div
        className="w-full p-3 border rounded-lg bg-white shadow-sm text-gray-700 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen1(!isOpen)}
      >
        {selectedLocation || "Select City"}
        <div className="flex gap-2">
          <Crosshair className="text-gray-500 cursor-pointer" size={18} />
          <ChevronDown className="text-gray-500" size={18} />
        </div>
      </div>
      {isOpen1 && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {locations.map((city) => (
            <div
              key={city}
              className="p-3 border-b hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedLocation(city);
                setIsOpen1(false);
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Duration Input */}
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="09 Feb 2025 - 08 Feb 2026"
        className="w-full p-3 border rounded-lg"
      />
      <Calendar className="absolute right-3 top-3 text-gray-500" size={18} />
    </div>
  </div>

  {/* Transaction Type & Additional Filters */}
  <div className="flex flex-wrap gap-4 w-full">
    {/* Transaction Type Toggle */}
    <div className="flex gap-2">
      {["Lease", "Sale"].map((transaction) => (
        <button
          key={transaction}
          className={`px-4 py-2 border rounded-lg ${
            selectedTransaction === transaction ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setSelectedTransaction(transaction)}
        >
          {transaction}
        </button>
      ))}
    </div>

    {/* Property Type */}
    <div className="relative flex-grow">
      <select className="w-full p-3 border rounded-lg appearance-none">
        <option>All</option>
      </select>
      <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
    </div>

    {/* Unit Category */}
    <div className="relative flex-grow">
      <select className="w-full p-3 border rounded-lg appearance-none">
        <option>All</option>
      </select>
      <ChevronDown className="absolute right-3 top-3 text-gray-500" size={18} />
    </div>

    {/* Required Area */}
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="1 - 10000 Sq. Meter"
        className="w-full p-3 border rounded-lg"
      />
    </div>
  </div>

  {/* Search Button */}
  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg w-full sm:w-auto">
    Search
  </button>
</div>

        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            <hr className="border-gray-300 mb-4" />

            <div className="">
              {/* Property Amenities */}
              <div className="border-b pb-2">
                <button
                  className="flex justify-between w-full text-left font-semibold"
                  onClick={() => toggleSection("propertyAmenities")}
                >
                  Property Amenities <ChevronDown size={16} />
                </button>
                {openSections.propertyAmenities && (
                  <select className="border border-gray-300 rounded px-3 py-2 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Search Property Amenities</option>
                    <option>Gym</option>
                    <option>Meeting facilities</option>
                  </select>
                )}
              </div>

              {/* Grace Period */}
              <div className="border-b py-2">
                <button
                  className="flex justify-between w-full text-left font-semibold"
                  onClick={() => toggleSection("gracePeriod")}
                >
                  Grace Period <ChevronDown size={16} />
                </button>
                {openSections.gracePeriod && (
                  <div className="mt-2 flex gap-2">
                    <button className="border px-3 py-1 rounded-md">
                      15 Days
                    </button>
                    <button className="border px-3 py-1 rounded-md">
                      30 Days
                    </button>
                    <button className="border px-3 py-1 rounded-md">
                      Custom
                    </button>
                  </div>
                )}
              </div>

              {/* Unit Type */}
              <div className="border-b py-2">
                <button
                  className="flex justify-between w-full text-left font-semibold"
                  onClick={() => toggleSection("unitType")}
                >
                  Unit Type <ChevronDown size={16} />
                </button>
                {openSections.unitType && (
                  <select className="border border-gray-300 rounded px-3 py-2 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Search Unit Type</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4 BHK</option>
                  </select>
                )}
              </div>

              {/* Furnishing */}
              <div className="border-b py-2">
                <button
                  className="flex justify-between w-full text-left font-semibold"
                  onClick={() => toggleSection("furnishing")}
                >
                  Furnishing <ChevronDown size={16} />
                </button>
                {openSections.furnishing && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "None",
                      "Unfurnished",
                      "Semi-Furnished",
                      "Furnished",
                      "Shell",
                    ].map((item) => (
                      <button
                        key={item}
                        className="border px-3 py-1 rounded-md"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pets Allowed */}
              <div className="border-b py-2">
                <button
                  className="flex justify-between w-full text-left font-semibold"
                  onClick={() => toggleSection("petsAllowed")}
                >
                  Pets Allowed <ChevronDown size={16} />
                </button>
                {openSections.petsAllowed && (
                  <div className="mt-2 flex gap-2">
                    <button className="border px-3 py-1 rounded-md">
                      Allowed
                    </button>
                    <button className="border px-3 py-1 rounded-md">
                      Not Allowed
                    </button>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCRMSearch;
