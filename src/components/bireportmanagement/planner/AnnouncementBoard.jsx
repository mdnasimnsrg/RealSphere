import React, { useState } from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CustomSelect from "../../ui/CustomSelect";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiFilter, FiX } from "react-icons/fi";
import {
  Button,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AnnouncementBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Weekly");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRoles,setSelectedRoles] = useState([])
  const users = [
    { id: 1, initials: "00:00-04:00" },
    { id: 2, initials: "04:00-08:00" },
    { id: 3, initials: "08:00-12:00" },
    { id: 4, initials: "12:00-16:00" },
    { id: 5, initials: "16:00-20:00" },
    { id: 6, initials: "20:00-24:00" },
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

              <div className="border-l p-3 h-16 hover:bg-gray-200 cursor-pointer relative"></div>
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

  return (
    <div>
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Announcement Board</div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4 flex-wrap-reverse gap-4">
          <div></div>
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
          <div className="flex gap-2 items-center">
            <button
              className="bg-gray-100 h-10 w-10 flex justify-center items-center rounded border hover:bg-gray-200"
              onClick={() => setShowFilter(true)}
            >
              <FiFilter className="text-gray-600" />
            </button>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <CustomSelect
              options={["Daily", "Weekly", "Monthly"]}
              selectedOption={viewMode}
              handleChange={(e) => setViewMode(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          {renderCalendarLayout()}
        </div>
      </div>
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div
            className={`bg-white w-96 p-6 h-full shadow-lg relative transform transition-transform duration-300 flex flex-col justify-between ${
              showFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div>

            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setShowFilter(false)}
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            <div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-semibold text-gray-600">Properties</label>
              <CustomSelectOption
                label="Select Properties"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
                icon={<SearchIcon />}
                onChange={(e) =>
                  setSelectedProperties((prev) =>
                    prev.includes(e.target.value)
                ? prev.filter((item) => item !== e.target.value)
                : [...prev, e.target.value]
              )
            }
            />
            <div className="flex gap-3 flex-wrap">
              {selectedProperties.map((property) => {
                return (
                  <Chip
                  key={property}
                  label={property}
                  className="w-fit "
                  color="primary"
                  onDelete={() =>
                    setSelectedProperties((prev) =>
                      prev.filter((item) => item !== property)
                )
              }
              />
            );
          })}
          </div>
          <hr/>
          </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="" className="text-sm font-semibold text-gray-600">Categories</label>
              <CustomSelectOption
                label="Select Categories"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
                icon={<SearchIcon />}
                onChange={(e) =>
                  setSelectedCategories((prev) =>
                    prev.includes(e.target.value)
                ? prev.filter((item) => item !== e.target.value)
                : [...prev, e.target.value]
              )
            }
            />
            <div className="flex gap-3 flex-wrap">
              {selectedCategories.map((category) => {
                return (
                  <Chip
                  key={category}
                  label={category}
                   className="w-fit "
                  color="primary"
                  onDelete={() =>
                    setSelectedCategories((prev) =>
                      prev.filter((item) => item !== category)
                )
              }
              />
            );
          })}
          </div>
          <hr/>
          </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-semibold text-gray-600">Role</label>
              <CustomSelectOption
                label="Select Role"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
                icon={<SearchIcon />}
                onChange={(e) =>
                  setSelectedRoles((prev) =>
                    prev.includes(e.target.value)
                ? prev.filter((item) => item !== e.target.value)
                : [...prev, e.target.value]
              )
            }
            />
            <div className="flex gap-3 flex-wrap">

              {selectedRoles.map((role) => {
                return (
                  <Chip
                  key={role}
                  label={role}
                  className="w-fit "
                  color="primary"
                  onDelete={() =>
                    setSelectedRoles((prev) =>
                      prev.filter((item) => item !== role)
                )
              }
              />
            );
          })}
          </div>
          <hr/>
          </div>
            </div>
      </div>
            <Button variant="contained" className="w-full" size="large">Apply</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementBoard;

export const CustomSelectOption = ({
  label,
  options,
  value,
  onChange,
  error,
  icon,
}) => {
  return (
    <FormControl fullWidth error={!!error}>
      <Select
        value={value}
        onChange={onChange}
        input={
          <OutlinedInput

            startAdornment={
              <InputAdornment position="start">{icon}</InputAdornment>
            }
          />
        }
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </FormControl>
  );
};
