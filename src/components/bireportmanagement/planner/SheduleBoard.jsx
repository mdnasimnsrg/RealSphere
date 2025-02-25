import {
  Avatar,
  Button,
  Chip,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { SearchIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { FiCalendar, FiFilter, FiUser, FiX } from "react-icons/fi";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import {FcOrganization} from "react-icons/fc"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CustomSelect from "../../ui/CustomSelect";


const BiReportManagementSheduleBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showFilter, setShowFilter] = useState(false);
  const [selectedResource, setSelectedResourese] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  };
  const dates = getWeekDates(currentDate);

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  const times = [
    { id: 1, initials: "00:00-04:00" },
    { id: 2, initials: "04:00-08:00" },
    { id: 3, initials: "08:00-12:00" },
    { id: 4, initials: "12:00-16:00" },
    { id: 5, initials: "16:00-20:00" },
    { id: 6, initials: "20:00-24:00" },
  ];

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="bg-white p-4 w-full flex justify-between items-center flex-col md:flex-row gap-4">
        <p className="font-semibold">Schedule Board</p>
<div>
        <CustomSelect options={["Business Development"]} icon={<FiUser />} />
        <CustomSelect options={["All Properties"]} icon={<FcOrganization />} />
</div>
      </div>
      <div className="p-4">
        <div className="bg-white shadow rounded-lg overflow-x-auto p-4">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <CustomSelect
              options={["Account", "Generic", "Tools", "Vehicles", "Users"]}
              icon={<FiUser />}
            />
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
              <button
                className="bg-gray-100 h-10 w-10 flex justify-center items-center rounded border hover:bg-gray-200"
                onClick={() => setShowFilter(true)}
              >
                <FiFilter className="text-gray-600" />
              </button>

            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 font-semibold text-gray-700 text-sm md:text-base">
            <div className=" border p-2 md:p-4 flex justify-center items-center"><AccessTimeOutlinedIcon/></div>
            {dates.map((date, index) => (
              <div
                key={index}
                className="text-center border flex justify-center items-center p-2 md:p-4"
              >
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "2-digit",
                })}
              </div>
            ))}
          </div>

          <div>
 <div>
        {times.map((time, index) => (
  <div
    key={index}
    className="grid grid-cols-2 md:grid-cols-8 items-center text-sm md:text-base"
  >
    <div className="border p-2 h-full flex justify-center items-center">

   {time.initials}
    </div>
    {dates.map((date, idx) => {


      return <div key={idx} className={`h-14 md:h-20 border`}></div>;
    })}
  </div>
))}

        </div>
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
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-600"
                    >
                      Resourse
                    </label>
                    <CustomSelectOption
                      label="Select Departments"
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                      ]}
                      icon={<SearchIcon />}
                      onChange={(e) =>
                        setSelectedResourese((prev) =>
                          prev.includes(e.target.value)
                            ? prev.filter((item) => item !== e.target.value)
                            : [...prev, e.target.value]
                        )
                      }
                    />
                    <div className="flex gap-3 flex-wrap">
                      {selectedResource.map((resourese) => {
                        return (
                          <Chip
                            key={resourese}
                            label={resourese}
                            className="w-fit "
                            color="primary"
                            onDelete={() =>
                              setSelectedResourese((prev) =>
                                prev.filter((item) => item !== resourese)
                              )
                            }
                          />
                        );
                      })}
                    </div>
                    <hr />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <label
                      htmlFor=""
                      className="text-sm font-semibold text-gray-600"
                    >
                      Job Type
                    </label>
                    <CustomSelectOption
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                      ]}
                      icon={<SearchIcon />}
                      onChange={(e) =>
                        setSelectedJobs((prev) =>
                          prev.includes(e.target.value)
                            ? prev.filter((item) => item !== e.target.value)
                            : [...prev, e.target.value]
                        )
                      }
                    />
                    <div className="flex gap-3 flex-wrap">
                      {selectedJobs.map((category) => {
                        return (
                          <Chip
                            key={category}
                            label={category}
                            className="w-fit "
                            color="primary"
                            onDelete={() =>
                              setSelectedJobs((prev) =>
                                prev.filter((item) => item !== category)
                              )
                            }
                          />
                        );
                      })}
                    </div>
                    <hr />
                  </div>

                </div>
              </div>
              <Button variant="contained" className="w-full" size="large">
                Apply
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiReportManagementSheduleBoard;
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
