import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import q1 from "../../images/q1.jpeg";

const QuotationsInnerDetails = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Primary",
      pricing: "Rent",
      value: 1600,
      basis: "Monthly",
      qty: 1,
      discount: 0,
    },
    {
      id: 2,
      type: "Secondary",
      pricing: "Maintenance",
      value: 1000,
      basis: "Monthly",
      qty: 1,
      discount: 0,
    },
    {
      id: 3,
      type: "Refundables",
      pricing: "Security Deposit",
      value: 75000,
      basis: "Total",
      qty: 1,
      discount: 0,
    },
    {
      id: 4,
      type: "One Time Charge",
      pricing: "Agreement Charge",
      value: 500,
      basis: "Total",
      qty: 1,
      discount: 0,
    },
    {
      id: 5,
      type: "Inventory Item",
      pricing: "Fridge",
      value: 500,
      basis: "Monthly",
      qty: 1,
      discount: 0,
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleBack = () => {
    window.history.back();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-white flex flex-wrap gap-3 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">
          <button onClick={handleBack} className="" aria-label="Go back">
            <ArrowBackIosIcon />
          </button>
          Customize Quotation
          <br />
          <div className="flex items-center gap-4 ml-6">
            <p className="text-gray-500 text-sm">
              QUOT241107-707 | 07 Nov 2024 | 06 Nov 2025
            </p>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded justify-self-end ">
          Update / Create
        </button>
      </div>

      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-4">
          <img src={q1} alt="" className="w-16 h-16 rounded" />
          <div>
            <h3 className="font-bold">B201</h3>
            <p className="text-gray-500 text-sm">
              BlackSky | 500 Sq. Meter | 1 BHK
            </p>
          </div>
        </div>
        <div className="lg:float-right lg:mt-[-33px]">118700.00 SAR</div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border rounded-lg text-sm">
            <thead>
              <tr className="bg-gray-200 text-start">
                <th className="p-2 text-start text-nowrap">Component Type</th>
                <th className="p-2 text-start text-nowrap">
                  Pricing Component
                </th>
                <th className="p-2 text-start text-nowrap">Value</th>
                <th className="p-2 text-start text-nowrap">Value Basis</th>
                <th className="p-2 text-start text-nowrap">Qty</th>
                <th className="p-2 text-start text-nowrap">Discount</th>
                <th className="p-2 text-start text-nowrap">Amount</th>
                <th className="p-2 text-start text-nowrap">Tax Group</th>
                <th className="p-2 text-start text-nowrap">Taxes</th>
                <th className="p-2 text-start text-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.pricing}</td>
                  <td className="p-2">₹{item.value}</td>
                  <td className="p-2">{item.basis}</td>
                  <td className="p-2">{item.qty}</td>
                  <td className="p-2">{item.discount}%</td>
                  <td className="p-2">₹{item.value * item.qty}</td>
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                  <td
                    className="p-2 text-red-500 cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="relative inline-block text-left">
          {/* Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 font-medium"
          >
            Add +
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-2 text-sm text-gray-900">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Component
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Item Master
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Wallet Credit
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Wallet Item
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Commission & Payment
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotationsInnerDetails;
