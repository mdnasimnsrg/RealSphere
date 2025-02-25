import React, { useState } from "react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CustomSelect from "../../ui/CustomSelect";
import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { FiUser } from "react-icons/fi";
import { FcOrganization } from "react-icons/fc";
import { RiParkingLine } from "react-icons/ri";

const ParkingBookingBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Weekly");
  const [activeTab, setActiveTab] = useState("calendar");

  const users = [
    { id: 1, initials: "00:00-04:00" },
    { id: 2, initials: "04:00-08:00" },
    { id: 3, initials: "08:00-12:00" },
    { id: 4, initials: "12:00-16:00" },
    { id: 5, initials: "16:00-20:00" },
    { id: 6, initials: "20:00-24:00" },
  ];
  const bookings = [
    {
      id: "RES-01",
      status: "Available",
      type: "Tanant",
      date: "25-02-2025",
      available: 1,
    },
    {
      id: "VS-01",
      status: "Reserved",
      type: "Visitors",
      date: "25-02-2025",
      available: 1,
    },
    {
      id: "BK-01",
      status: "Booked",
      type: "Tanant",
      date: "25-02-2025",
      available: 104,
    },
    {
      id: "AV-01",
      status: "Visitors",
      type: "Visitors",
      date: "25-02-2025",
      available: 200,
    },
    {
      id: "AV-01",
      status: "Available",
      type: "Tanant",
      date: "25-02-2025",
      available: 142,
    },
  ];
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };

  const getMonthDates = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return Array.from(
      { length: lastDay.getDate() },
      (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1)
    );
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "Weekly") newDate.setDate(currentDate.getDate() - 7);
    else if (viewMode === "Monthly")
      newDate.setMonth(currentDate.getMonth() - 1);
    else newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === "Weekly") newDate.setDate(currentDate.getDate() + 7);
    else if (viewMode === "Monthly")
      newDate.setMonth(currentDate.getMonth() + 1);
    else newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const dates =
    viewMode === "Weekly"
      ? getWeekDates(currentDate)
      : viewMode === "Monthly"
      ? getMonthDates(currentDate)
      : [currentDate];

  const renderCalendarLayout = () => {
    if (viewMode === "Daily") {
      return (
        <div className="border rounded-md overflow-hidden">
          {/* Header */}
          <div className="flex bg-gray-100 border-b">
            <div className="p-3 text-center font-bold w-32">
              <AccessTimeOutlinedIcon />
            </div>
            <div className="p-3 text-center font-bold">
              {dates[0].toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
              })}
            </div>
          </div>

          {/* Time Slots */}
          {users.map((user) => (
            <div key={user.id} className="flex border-b">
              <div className="flex items-center p-3 w-32 flex-none">
                {user.initials}
              </div>

              {(() => {
                return (
                  <div className="border-l p-3 h-16 hover:bg-gray-200 cursor-pointer relative"></div>
                );
              })()}
            </div>
          ))}
        </div>
      );
    }

    if (viewMode === "Weekly") {
      return (
        <div className="border rounded-md overflow-hidden">
          <div
            className={`grid grid-cols-[120px_repeat(${dates.length},_1fr)] bg-gray-100 border-b`}
          >
            <div className="p-3 text-center font-bold">
              <AccessTimeOutlinedIcon />
            </div>
            {dates.map((date, index) => (
              <div key={index} className="p-3 text-center font-bold">
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "2-digit",
                })}
              </div>
            ))}
          </div>

          {users.map((user) => (
            <div
              key={user.id}
              className={`grid grid-cols-[120px_repeat(${dates.length},_1fr)] border-b`}
            >
              <div className="flex items-center p-3">{user.initials}</div>
              {dates.map((date, index) => {
                return (
                  <div
                    key={index}
                    className="border-l p-2 h-16 hover:bg-gray-200 cursor-pointer relative"
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      );
    }

    if (viewMode === "Monthly") {
      return (
        <div className="border rounded-md">
          <div className="grid grid-cols-7 bg-gray-100 border-b">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-3 text-center font-bold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {dates.map((date, index) => {
              return (
                <div
                  key={index}
                  className="border p-3 h-28 flex flex-col justify-between items-center hover:bg-gray-200 cursor-pointer text-center"
                >
                  <span className="font-bold"> {date.getDate()}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const BookingList = () => {
    return (
      <div className="">
        {/* Search Bar */}
        <div className="mb-4 flex items-center max-w-md">
          <TextField
            label="Search By Slot No."
            variant="outlined"
            className="flex-grow"
            InputProps={{
              startAdornment: <SearchIcon className="mr-2 text-gray-500" />,
            }}
          />
        </div>
        <div className="p-2 md:p-4 border">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <p className="text-sm text-gray-600">
                Availeble Slots : <span className="font-bold">4</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <p className="text-sm text-gray-600">
                Booked Slots : <span className="font-bold">4</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-purple-500"></div>
              <p className="text-sm text-gray-600">
                Reserved for Tenants : <span className="font-bold">4</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
              <p className="text-sm text-gray-600">
                Reserved for Visitors : <span className="font-bold">4</span>
              </p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 border p-2 lg:p-4 gap-y-2">
            {bookings.map((booking) => {
              return (
                <div
                  key={booking.id}
                  className="border-r border-dashed p-2 md:p-4"
                >
                  <div className="bg-green-500/20 h-72 w-full rounded-t flex flex-col justify-center items-center">
                    <p className="text-green-500">
                      {booking.status == "Reserved"
                        ? "RES -"
                        : booking.status == "Visitors"
                        ? "VS- "
                        : ""}{" "}
                      <span>{booking.available}</span>
                    </p>
                    <p className="text-green-500">Available</p>
                  </div>
                  <p
                    className={`text-black text-center py-1 ${
                      booking.status == "Reserved"
                        ? "bg-purple-500/20"
                        : booking.status == "Booked"
                        ? "bg-blue-500/20"
                        : booking.status == "Visitors"
                        ? "bg-yellow-500/20"
                        : "bg-green-500/20"
                    }`}
                  >
                    {booking.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Booking Bookings</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <CustomSelect options={["Business Development"]} icon={<FiUser />} />
          <CustomSelect
            options={[
              "Retal Real Estate",
              "Mohanadiah",
              "Bluewater",
              "Leo Apartment",
            ]}
            selectedOption={"Mohanadiah"}
            icon={<FcOrganization />}
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-4 flex-wrap-reverse gap-4">
          <div>
            <CustomSelect
              options={["n3"]}
              icon={
                <div className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-100">
                  #1
                </div>
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronLeft size={24} />
            </button>

            <span className="font-semibold">
              {dates[0].toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}{" "}
              -{" "}
              {dates[dates.length - 1].toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            </span>

            <button
              onClick={handleNext}
              variant="outlined"
              className="h-10 w-10 rounded-full bg-white border flex justify-center items-center hover:bg-gray-400"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
          <div className="flex gap-2 self-end">
            <CustomSelect
              options={["Daily", "Weekly", "Monthly"]}
              selectedOption={viewMode}
              handleChange={(e) => setViewMode(e.target.value)}
            />
            <div className="flex border-b bg-gray-200 rounded py-1 px-2 place-self-start">
              <button
                className={`p-2 text-sm  font-semibold rounded ${
                  activeTab === "calendar"
                    ? "bg-themeBlue text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("calendar")}
              >
                <FaCalendar className="text-lg " />
              </button>
              <button
                className={`p-2 text-sm font-semibold rounded ${
                  activeTab === "activityList"
                    ? "bg-themeBlue text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("activityList")}
              >
                <RiParkingLine />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          {activeTab === "calendar" ? renderCalendarLayout() : BookingList()}
        </div>
      </div>
    </div>
  );
};

export default ParkingBookingBoard;
