import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import dayjs from "dayjs";
import { Avatar } from "@mui/material";
import { CheckCircle, Search } from "lucide-react";
import { MdChevronLeft,MdChevronRight} from "react-icons/md";

const MMDutyRoasterBoard = () => {
    const [currentDate, setCurrentDate] = useState(dayjs());

    const goToPreviousMonth = () => {
        setCurrentDate(currentDate.subtract(1, "month"));
    };

    const goToNextMonth = () => {
        setCurrentDate(currentDate.add(1, "month"));
    };

    const generateDays = () => {

        const startOfMonth = currentDate.startOf("month");
        const endOfMonth = currentDate.endOf("month");
        const daysInMonth = endOfMonth.date();
        const firstDayOfWeek = startOfMonth.day();

        const days = [];

        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} className="p-4"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDate = currentDate.date(day);
            const isToday = dayDate.isSame(dayjs(), "day");

            days.push(
                <div key={day} className="p-4 border rounded relative text-center">
                    <span className={`font-semibold ${isToday ? "text-blue-500" : "text-gray-700"}`}>
                        {day}
                    </span>
                </div>
            );
        }

        return days;
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const [resource] = useState({
        name: "Tobias",
        id: "CUST250110-506",
        avatar: "https://via.placeholder.com/40",
    });
    const [selected, setSelected] = useState(1);

    const employees = [
        { id: 1, name: "Tobias", role: "Security guard", avatar: "👮‍♂️" },
        { id: 2, name: "Braylon", role: "Inspector", avatar: "🕵️‍♂️" },
        { id: 3, name: "Janah Adil Eishiger", role: "Inspector", avatar: "JA" },
        { id: 4, name: "Maverick", role: "Inspector", avatar: "🕵️" },
    ];

  return (
    <div>
        <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
            <div className="text-xl font-semibold">On Duty Allocation</div>
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border rounded-md p-2 shadow-sm bg-gray-50">
                    <FiUser className="text-gray-500 mr-2" />
                    <select className="focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer">
                    <option value="businessDev">Business Development</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="p-4 bg-gray-100 flex space-x-4">

            <div className="w-full bg-white p-4 rounded-lg shadow">

                <div className="flex justify-center md:justify-between flex-col md:flex-row gap-2 items-center mb-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-gray-100 p-2 rounded-lg min-w-80 justify-between">
                            <div className="flex gap-2">

                            <Avatar src={resource.avatar} alt={resource.name}/>
                            <div className="">
                                <p className="font-semibold">{resource.name}</p>
                                <p className="text-xs text-gray-500">{resource.id}</p>
                            </div>
                            </div>
                            <button onClick={toggleModal} className="text-blue-500 ml-2 text-sm">Change</button>
                        </div>
                    </div>


                    <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousMonth}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronLeft size={24} />
            </button>

            <span className="font-semibold">
            {currentDate.format("MMMM YYYY")}
            </span>

            <button
              onClick={goToNextMonth}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 text-center font-semibold mt-4">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
                    <div key={index} className="p-2">{day}</div>
                ))}
                </div>

                <div className="grid grid-cols-7 text-center mt-2">{generateDays()}</div>
            </div>
        </div>

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white w-[500px] rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Change Employee</h2>
                        <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={toggleModal}
                        >
                            ✕
                        </button>
                    </div>
                    <hr className="border-gray-300 mb-4" />

                    <div className="">
                        {/* Search Input */}
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                            type="text"
                            placeholder="Search Employee"
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Employee List */}
                        <div className="space-y-2">
                            {employees.map((employee) => (
                            <div
                                key={employee.id}
                                className={`flex items-center p-3 rounded-lg cursor-pointer ${
                                selected === employee.id ? "bg-blue-100 border border-blue-300" : "border"
                                }`}
                                onClick={() => setSelected(employee.id)}
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-lg">
                                {typeof employee.avatar === "string" && employee.avatar.length > 2 ? (
                                    <span className="text-gray-700 font-bold">{employee.avatar}</span>
                                ) : (
                                    <span>{employee.avatar}</span>
                                )}
                                </div>

                                {/* Employee Details */}
                                <div className="ml-3 flex-1">
                                <p className="font-semibold text-gray-900">{employee.name}</p>
                                <p className="text-sm text-gray-500">{employee.role}</p>
                                </div>

                                {/* Checkmark for Selected */}
                                {selected === employee.id && (
                                <CheckCircle className="text-blue-500" size={20} />
                                )}
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        )}

    </div>
  );
};

export default MMDutyRoasterBoard;
