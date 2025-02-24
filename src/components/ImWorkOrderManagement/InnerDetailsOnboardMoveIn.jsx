import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img1 from "../../images/11.jpeg";
import img2 from "../../images/22.jpeg";
import img3 from "../../images/33.jpeg";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InnerDetailsOnboardMoveIn = () => {

    const handleBack = () => {
        window.history.back();
    };

    const Card = ({ icon, title, content, subContent }) => {
        return (
          <div className="bg-white shadow-md rounded-lg p-4 w-full flex items-center space-x-4">
            <div className="text-gray-500 text-2xl">{icon}</div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{title}</p>
              <p className="text-lg font-semibold text-gray-800">{content}</p>
              {subContent && <p className="text-gray-500 text-sm">{subContent}</p>}
            </div>
          </div>
        );
    };

    const cards = [
        {
          icon: "🚛",
          title: "Gate Pass",
          mainText: "Truck Gate-Pass",
          subText: "Last Link sent on 09 Jan 25",
          action: "Send Link",
        },
        {
          icon: "⏳",
          title: "Billing Hours",
          mainText: "Billing Hours",
          action: "View",
        },
        {
          icon: "🔑",
          title: "Tenant Login",
          mainText: "Tenant Login Link",
        },
    ];

    const inspections = [
        {
          image: img1,
          title: "Unit -1 (Lease)",
          subtitle: "UNIT25-1185",
          action: "click1",
        },
        {
          image: img2,
          title: "AC",
          subtitle: "Samsung",
          action: "click2",
        },
        {
          image: img3,
          title: "TV",
          subtitle: "Sony",
          action: "click3",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const timelineData = [
        {
          title: "Inspection Completed",
          notes: "Notes : OK",
          time: "09-01-2025 06:44 PM",
          person: "Farooq Abdullah",
          icon: "✅",
        },
        {
          title: "Inspector Assigned",
          notes: "",
          time: "09-01-2025 06:38 PM",
          person: "Farooq Abdullah",
          icon: "🕒",
        },
    ];

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [price, setPrice] = useState("0 SAR");

    const [isSidebarOpen1, setSidebarOpen1] = useState(false);
    const [isSidebarOpen2, setSidebarOpen2] = useState(false);
    const [isSidebarOpen3, setSidebarOpen3] = useState(false);
    const [isSidebarOpen4, setSidebarOpen4] = useState(false);
    const [isSidebarOpen5, setSidebarOpen5] = useState(false);
    const [isSidebarOpen6, setSidebarOpen6] = useState(false);
    const [isSidebarOpen7, setSidebarOpen7] = useState(false);
    const [isSidebarOpen8, setSidebarOpen8] = useState(false);
    const [isSidebarOpen9, setSidebarOpen9] = useState(false);
    const [isSidebarOpen10, setSidebarOpen10] = useState(false);
    const [isSidebarOpen11, setSidebarOpen11] = useState(false);
    const [isSidebarOpen12, setSidebarOpen12] = useState(false);

    const [activeTab, setActiveTab] = useState("checklist");

  return (
    <div>

        <div className="bg-white md:flex items-center justify-between p-4 mb-2">
            <h1 className="text-xl font-semibold">
                <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                aria-label="Go back"
                >
                <ArrowBackIosIcon />
                </button>
                <span>IMJ250109-5771</span>
            </h1>
        </div>

        <div className="flex space-x-4 p-4 overflow-x-auto">
            <Card
                icon={"📋"}
                title="Inspection Order"
                content="IMO250109-2014"
                subContent="Farooq Abdullah | 09 Jan 2025"
            />
            <Card
                icon={"🏢"}
                title="Property And Unit Details"
                content="Serenity Towers"
                subContent="UNIT25-1185 , Unit -1 (Lease)"
            />
            <Card
                icon={"📋"}
                title="Resource Details"
                content="Nirav"
                subContent="+91 987654321"
            />
            <Card
                icon={"📄"}
                title="Completion Details"
                content=""
                subContent="Start Date : 09-01-2025 06:38 PM | End Date : 09-01-2025 06:39 PM"
            />

        </div>

        <div className="flex space-x-4 overflow-x-auto p-4">
            {cards.map((card, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full flex items-center space-x-4">
                {/* Icon Section */}
                <div className="text-3xl">{card.icon}</div>

                {/* Text Section */}
                <div className="flex-grow">
                    <p className="text-gray-500 text-sm font-medium">{card.title}</p>
                    <p className="text-lg font-semibold text-gray-800">{card.mainText}</p>
                    {card.subText && <p className="text-gray-500 text-sm">{card.subText}</p>}
                </div>

                {/* Button Section */}
                {card.action === "View" && (
                    <button
                    onClick={() => setIsOpen(true)}
                    className="text-blue-600 border border-blue-600 px-3 py-1 rounded-md text-sm"
                    >
                    {card.action}
                    </button>
                )}
                {card.action === "Send Link" && (
                    <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-md text-sm">
                    {card.action}
                    </button>
                )}
                </div>
            ))}
        </div>

        <div className="p-4">

            <div className="p-6 bg-white shadow-md rounded-lg">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Inspection Details</h2>
                    <div className="flex space-x-4">
                    <button onClick={() => setIsOpen1(true)} className="text-blue-600 font-medium">View Tracker</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Download Inspection
                    </button>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-3 border-b pb-2 text-gray-500 text-sm font-medium">
                    <p>INSPECTION ITEM</p>
                    <p className="text-center">MOVE IN</p>
                </div>

                {/* Inspection List */}
                <div className="mt-4 space-y-2">
                    {inspections.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                    >
                        {/* Item Details */}
                        <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md" />
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-gray-500 text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-green-500 text-xl">✔️</span>
                        </div>
                        {/* Move-in Status */}
                        <div className="flex items-center space-x-4">
                            {item.action === "click1" && (
                                <button onClick={() => setSidebarOpen(true)} className="text-gray-500 cursor-pointer">▼</button>
                            )}
                            {item.action === "click2" && (
                                <button onClick={() => setSidebarOpen3(true)} className="text-gray-500 cursor-pointer">▼</button>
                            )}
                            {item.action === "click3" && (
                                <button onClick={() => setSidebarOpen8(true)} className="text-gray-500 cursor-pointer">▼</button>
                            )}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
        
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-semibold">View Billing Hours</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                    ✖
                </button>
                </div>

                {/* Modal Content */}
                <div className="text-center mt-4">
                {/* Icon */}
                <div className="flex justify-center">
                    <span className="text-4xl">⏳</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2">Actual work & billing hour</h3>

                {/* Billing Hours Section */}
                <div className="bg-green-100 text-green-700 flex items-center justify-between px-4 py-2 rounded-md mt-4">
                    <span>💵 Billing Hour</span>
                    <span className="font-bold">0 Hrs</span>
                </div>

                {/* Unbillable Hours */}
                <div className="bg-gray-100 text-gray-700 flex items-center justify-between px-4 py-2 rounded-md mt-2">
                    <span>Unbillable hour</span>
                    <span>1</span>
                </div>

                {/* Hours Breakdown */}
                <h4 className="mt-4 text-gray-500 font-semibold">Hours Break Down</h4>
                <div className="bg-white shadow-md rounded-lg p-4 mt-2 text-sm text-left">
                    <div className="flex justify-between">
                    <span>Projected Hours</span>
                    <span>1</span>
                    </div>
                    <div className="flex justify-between mt-1">
                    <span>Actual Hours</span>
                    <span>1</span>
                    </div>
                    <div className="flex justify-between mt-1">
                    <span>Other Hours</span>
                    <span>0</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-1">
                    <span>Total Hours</span>
                    <span>1</span>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    className="bg-gray-300 text-gray-500 px-4 py-2 w-full rounded-md mt-4 cursor-not-allowed"
                    disabled
                >
                    Update & Submit Work Hour
                </button>
                </div>
            </div>
            </div>
        )}

        {isOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-semibold">Track Update</h2>
                <button onClick={() => setIsOpen1(false)} className="text-gray-500 hover:text-gray-800">
                    ✖
                </button>
                </div>

                {/* Modal Content */}
                <div className="text-center mt-4">
                    {timelineData.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 relative pb-4 last:pb-0">
                        {/* Icon */}
                        <div className="relative">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                            <span className="text-xl">{item.icon}</span>
                            </div>
                            {/* Vertical Line */}
                            {index !== timelineData.length - 1 && (
                            <div className="absolute left-1/2 top-full h-8 border-l-2 border-dashed border-blue-400 transform -translate-x-1/2"></div>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            {item.notes && <p className="text-gray-500 text-sm">{item.notes}</p>}
                            <p className="text-gray-400 text-xs">
                            {item.time} | {item.person}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        )}

        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[1000px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <button onClick={() => setSidebarOpen(false)} className="text-xl">✖</button>
                    </div>

                    <div className="flex">
                        {/* Left Panel */}
                        <div className="w-1/3 mt-2">
                            <div className="border-2 p-4 rounded-lg">
                                <img
                                src={img1}
                                alt="Unit"
                                className="w-full h-40 object-cover rounded-md"
                                />
                                <h2 className="text-lg text-center font-semibold mt-4">Unit -1 (Lease)</h2>
                                <div className="mt-2 text-sm text-gray-600">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Property Name:</strong></div>
                                        <div className="">Serenity Towers</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Unit Location:</strong></div>
                                        <div className="">Chennai</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Unit Type:</strong></div>
                                        <div className="">2 BHK</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold mt-2 mb-2">Instructions & Documents</h3>
                            <div className="mt-4 p-3 border-2 rounded-lg">
                                <p className="text-sm">Check List Name:<br />2 BHK</p>
                                <p className="text-xs text-gray-500">Instructions</p>
                            </div>
                        </div>

                        <div className="w-[1px] bg-gray-300 ml-2"></div>

                        {/* Right Panel */}
                        <div className="w-2/3">
                            <h2 className="text-blue-600 font-semibold text-lg my-2 pl-4">Unit Based Checklist</h2>
                            <div className="bg-[#F2F5FA] p-4">
                                <div className="flex justify-between items-center">
                                    <div className="">ITEM AND ASSETS</div>
                                    <div className="">MOVE IN</div>
                                </div>

                                {/* Notes Section */}
                                <div className="mt-4 border p-4 rounded-md bg-white">
                                    <h3 className="font-semibold">Notes</h3>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Manager</div>
                                        <div className="text-sm">-</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Inspector</div>
                                        <div className="text-sm">OK</div>
                                    </div>
                                    <h3 className="font-semibold">Penalty</h3>
                                    <div className="flex justify-between items-center bg-[#f1f7ff] rounded-md p-2">
                                        <div className="text-sm">Penalty Amount</div>
                                        {isEditing ? (
                                            <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                                            <input
                                                type="text"
                                                placeholder="Type Here..."
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="ml-2 bg-blue-500 text-white rounded px-2"
                                            >
                                                ✔️
                                            </button>
                                            </div>
                                        ) : (
                                            <span>
                                            {price}{" "}
                                            <span
                                                className="ml-2 cursor-pointer text-blue-500"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                ✏️
                                            </span>
                                            </span>
                                        )}
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Generate Invoice</button>
                                    </div>
                                </div>

                                {/* Checklist Items */}
                                <div className="mt-4">
                                    {["Check for Walls and Painting", "Check for Interiors"].map((item, index) => (
                                        <div key={index} className="border p-4 rounded-md bg-white mt-2">
                                            <h3 
                                                className="font-semibold text-sm">
                                                    {index + 1}. {item} <span className="text-red-500">*</span> 
                                                    {index === 0 && (
                                                        <button onClick={() => setSidebarOpen1(true)}><InfoOutlinedIcon /></button>
                                                    )}
                                                    {index === 1 && (
                                                        <button onClick={() => setSidebarOpen2(true)}><InfoOutlinedIcon /></button>
                                                    )}
                                            </h3>
                                            <div className="flex justify-between items-center pb-2">
                                                <p className="text-xs text-gray-500">Condition</p>
                                                <div className="mt-2 flex justify-end">
                                                    <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Good</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center pb-2">
                                                <p className="text-xs text-gray-500">Worker Note</p>
                                                <p className="text-xs text-gray-500">-</p>
                                            </div>
                                            <div className="flex justify-between items-center pb-2">
                                                <p className="text-xs text-gray-500">Image</p>
                                                <p className="text-xs text-gray-500">-</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen1 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen1(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen2 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen2(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen3 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[1000px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <button onClick={() => setSidebarOpen3(false)} className="text-xl">✖</button>
                    </div>

                    <div className="flex">
                        {/* Left Panel */}
                        <div className="w-1/3 mt-2">
                            <div className="border-2 p-4 rounded-lg">
                                <img
                                src={img2}
                                alt="Unit"
                                className="w-full h-40 object-cover rounded-md"
                                />
                                <h2 className="text-lg text-center font-semibold mt-4">AC</h2>
                                <div className="mt-2 text-sm text-gray-600">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Manufacturer</strong></div>
                                        <div className="">Samsung</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Serial Number</strong></div>
                                        <div className="">987654</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Model Number</strong></div>
                                        <div className="">PAG123</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Location</strong></div>
                                        <div className="">Bedroom</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Last Service</strong></div>
                                        <div className="">20 Feb 2025</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold mt-2 mb-2">Instructions & Documents</h3>
                            <div className="mt-4 p-3 border-2 rounded-lg">
                                <p className="text-sm">Check List Name:<br />
                                    {activeTab === "checklist" && (
                                        <>
                                        Electrical
                                        </>
                                    )}

                                    {activeTab === "checklist1" && (
                                        <>
                                        Check for AC
                                        </>
                                    )}
                                </p>
                                <p className="text-xs text-gray-500">Instructions</p>
                            </div>
                        </div>

                        <div className="w-[1px] bg-gray-300 ml-2"></div>

                        {/* Right Panel */}
                        <div className="w-2/3">
                            
                            <div className="border-b flex space-x-4 mb-4">
                                <button 
                                    className={`py-2 px-4 border-b-2 ${activeTab === "checklist" ? "text-blue-600 border-blue-600 font-semibold" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("checklist")}
                                >
                                    Common CheckList
                                </button>
                                <button 
                                    className={`py-2 px-4 border-b-2 ${activeTab === "checklist1" ? "text-blue-600 border-blue-600 font-semibold" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("checklist1")}
                                >
                                    Specific CheckList
                                </button>
                            </div>
                            <div className="bg-[#F2F5FA] p-4">
                                <div className="flex justify-between items-center">
                                    <div className="">ITEM AND ASSETS</div>
                                    <div className="">MOVE IN</div>
                                </div>

                                {/* Notes Section */}
                                <div className="mt-4 border p-4 rounded-md bg-white">
                                    <h3 className="font-semibold">Notes</h3>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Manager</div>
                                        <div className="text-sm">-</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Inspector</div>
                                        <div className="text-sm">OK</div>
                                    </div>
                                    <h3 className="font-semibold">Penalty</h3>
                                    <div className="flex justify-between items-center bg-[#f1f7ff] rounded-md p-2">
                                        <div className="text-sm">Penalty Amount</div>
                                        {isEditing ? (
                                            <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                                            <input
                                                type="text"
                                                placeholder="Type Here..."
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="ml-2 bg-blue-500 text-white rounded px-2"
                                            >
                                                ✔️
                                            </button>
                                            </div>
                                        ) : (
                                            <span>
                                            {price}{" "}
                                            <span
                                                className="ml-2 cursor-pointer text-blue-500"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                ✏️
                                            </span>
                                            </span>
                                        )}
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Generate Invoice</button>
                                    </div>
                                </div>
                                
                                {activeTab === "checklist" && (
                                    <div className="mt-4">
                                        {["Working Condition"].map((item, index) => (
                                            <div key={index} className="border p-4 rounded-md bg-white mt-2">
                                                <h3 
                                                    className="font-semibold text-sm">
                                                        {index + 1}. {item} <span className="text-red-500">*</span> 
                                                        {index === 0 && (
                                                            <button onClick={() => setSidebarOpen4(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                </h3>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Condition</p>
                                                    <div className="mt-2 flex justify-end">
                                                        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Working</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Worker Note</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Image</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "checklist1" && (
                                    <div className="mt-4">
                                        {["Item Condition", "Working Condition", "Item Delivery/Count"].map((item, index) => (
                                            <div key={index} className="border p-4 rounded-md bg-white mt-2">
                                                <h3 
                                                    className="font-semibold text-sm">
                                                        {index + 1}. {item} <span className="text-red-500">*</span> 
                                                        {index === 0 && (
                                                            <button onClick={() => setSidebarOpen5(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                        {index === 1 && (
                                                            <button onClick={() => setSidebarOpen6(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                        {index === 2 && (
                                                            <button onClick={() => setSidebarOpen7(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                </h3>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Condition</p>
                                                    <div className="mt-2 flex justify-end">
                                                        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Good</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Worker Note</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Image</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen4 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen4(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen5 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen5(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen6 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen6(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}  

        {isSidebarOpen7 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen7(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen8 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[1000px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Item Details</h2>
                        <button onClick={() => setSidebarOpen8(false)} className="text-xl">✖</button>
                    </div>

                    <div className="flex">
                        {/* Left Panel */}
                        <div className="w-1/3 mt-2">
                            <div className="border-2 p-4 rounded-lg">
                                <img
                                src={img3}
                                alt="Unit"
                                className="w-full h-40 object-cover rounded-md"
                                />
                                <h2 className="text-lg text-center font-semibold mt-4">TV</h2>
                                <div className="mt-2 text-sm text-gray-600">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Manufacturer</strong></div>
                                        <div className="">Sony</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Serial Number</strong></div>
                                        <div className="">87654</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Model Number</strong></div>
                                        <div className="">PAG123</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Location</strong></div>
                                        <div className="">Bedroom</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className=""><strong>Last Service</strong></div>
                                        <div className="">20 Feb 2025</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm font-semibold mt-2 mb-2">Instructions & Documents</h3>
                            <div className="mt-4 p-3 border-2 rounded-lg">
                                <p className="text-sm">Check List Name:<br />
                                    {activeTab === "checklist" && (
                                        <>
                                        Electrical
                                        </>
                                    )}

                                    {activeTab === "checklist1" && (
                                        <>
                                        Check for AC
                                        </>
                                    )}
                                </p>
                                <p className="text-xs text-gray-500">Instructions</p>
                            </div>
                        </div>

                        <div className="w-[1px] bg-gray-300 ml-2"></div>

                        {/* Right Panel */}
                        <div className="w-2/3">
                            
                            <div className="border-b flex space-x-4 mb-4">
                                <button 
                                    className={`py-2 px-4 border-b-2 ${activeTab === "checklist" ? "text-blue-600 border-blue-600 font-semibold" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("checklist")}
                                >
                                    Common CheckList
                                </button>
                                <button 
                                    className={`py-2 px-4 border-b-2 ${activeTab === "checklist1" ? "text-blue-600 border-blue-600 font-semibold" : "text-gray-500"}`}
                                    onClick={() => setActiveTab("checklist1")}
                                >
                                    Specific CheckList
                                </button>
                            </div>
                            <div className="bg-[#F2F5FA] p-4">
                                <div className="flex justify-between items-center">
                                    <div className="">ITEM AND ASSETS</div>
                                    <div className="">MOVE IN</div>
                                </div>

                                {/* Notes Section */}
                                <div className="mt-4 border p-4 rounded-md bg-white">
                                    <h3 className="font-semibold">Notes</h3>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Manager</div>
                                        <div className="text-sm">-</div>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <div className="text-sm">Inspector</div>
                                        <div className="text-sm">OK</div>
                                    </div>
                                    <h3 className="font-semibold">Penalty</h3>
                                    <div className="flex justify-between items-center bg-[#f1f7ff] rounded-md p-2">
                                        <div className="text-sm">Penalty Amount</div>
                                        {isEditing ? (
                                            <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                                            <input
                                                type="text"
                                                placeholder="Type Here..."
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="outline-none text-sm"
                                            />
                                            <button
                                                onClick={() => setIsEditing(false)}
                                                className="ml-2 bg-blue-500 text-white rounded px-2"
                                            >
                                                ✔️
                                            </button>
                                            </div>
                                        ) : (
                                            <span>
                                            {price}{" "}
                                            <span
                                                className="ml-2 cursor-pointer text-blue-500"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                ✏️
                                            </span>
                                            </span>
                                        )}
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Generate Invoice</button>
                                    </div>
                                </div>
                                
                                {activeTab === "checklist" && (
                                    <div className="mt-4">
                                        {["Working Condition"].map((item, index) => (
                                            <div key={index} className="border p-4 rounded-md bg-white mt-2">
                                                <h3 
                                                    className="font-semibold text-sm">
                                                        {index + 1}. {item} <span className="text-red-500">*</span> 
                                                        {index === 0 && (
                                                            <button onClick={() => setSidebarOpen9(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                </h3>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Condition</p>
                                                    <div className="mt-2 flex justify-end">
                                                        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Working</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Worker Note</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Image</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "checklist1" && (
                                    <div className="mt-4">
                                        {["Item Condition", "Working Condition", "Item Delivery/Count"].map((item, index) => (
                                            <div key={index} className="border p-4 rounded-md bg-white mt-2">
                                                <h3 
                                                    className="font-semibold text-sm">
                                                        {index + 1}. {item} <span className="text-red-500">*</span> 
                                                        {index === 0 && (
                                                            <button onClick={() => setSidebarOpen10(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                        {index === 1 && (
                                                            <button onClick={() => setSidebarOpen11(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                        {index === 2 && (
                                                            <button onClick={() => setSidebarOpen12(true)}><InfoOutlinedIcon /></button>
                                                        )}
                                                </h3>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Condition</p>
                                                    <div className="mt-2 flex justify-end">
                                                        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Good</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Worker Note</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <p className="text-xs text-gray-500">Image</p>
                                                    <p className="text-xs text-gray-500">-</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen9 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen9(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen10 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen10(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen11 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen11(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

        {isSidebarOpen12 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                <div className="w-[300px] h-full bg-white shadow-lg p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-lg font-semibold">Instructions & Documents</h2>
                        <button onClick={() => setSidebarOpen12(false)} className="text-xl">✖</button>
                    </div>

                    <div className="border rounded-lg p-2 mt-4">
                        <p className="border-b p-1">Instructions</p>
                        <p className="border-b p-1">Url</p>
                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default InnerDetailsOnboardMoveIn;
