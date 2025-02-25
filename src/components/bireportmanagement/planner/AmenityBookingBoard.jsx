import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CustomSelect from "../../ui/CustomSelect";
import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import { Search as SearchIcon} from "@mui/icons-material";
import { FiUser } from "react-icons/fi";
import { FcOrganization } from "react-icons/fc";


const AmenityBookingBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Weekly");
  const [activeTab, setActiveTab] = useState("calendar");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const users = [
    { id: 1, initials: "00:00-04:00" },
    { id: 2, initials: "04:00-08:00" },
    { id: 3, initials: "08:00-12:00" },
    { id: 4, initials: "12:00-16:00" },
    { id: 5, initials: "16:00-20:00" },
    { id: 6, initials: "20:00-24:00" },
  ];
const bookings = [{
  bookingId:"",amenity:"",bookingForm:"",bookingTo:"",source:"",duration:"",bookedBy:"",status:"",slotStatus:""
}]
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
                  <div className="border-l p-3 h-16 hover:bg-gray-200 cursor-pointer relative">

                  </div>
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
                  >

                  </div>
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
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(1);
    };

    return (
      <div className="">
        {/* Search Bar */}
        <div className="mb-4 flex items-center max-w-md">
          <TextField
            label="Search Bookings"
            variant="outlined"
            className="flex-grow"
            InputProps={{
              startAdornment: <SearchIcon className="mr-2 text-gray-500" />,
            }}
          />
        </div>

        {/* Table */}
        <TableContainer component={Paper} className="shadow-md">
          <Table aria-label="booking table">
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell className="text-nowrap">Booking Id</TableCell>
                <TableCell className="text-nowrap">Amenity</TableCell>
                <TableCell className="text-nowrap">Booking Form</TableCell>
                <TableCell className="text-nowrap">Booking To</TableCell>
                <TableCell className="text-nowrap">Source</TableCell>
                <TableCell className="text-nowrap">Duration</TableCell>
                <TableCell className="text-nowrap">Booked By</TableCell>
                <TableCell className="text-nowrap">Status</TableCell>
                <TableCell className="text-nowrap">Slot Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {booking.bookingId}
                    </TableCell>
                    <TableCell>{booking.amenity}</TableCell>
                    <TableCell>{booking.bookingForm}</TableCell>
                    <TableCell>{booking.bookingTo}</TableCell>
                    <TableCell>{booking.source}</TableCell>
                    <TableCell>{booking.duration}</TableCell>
                    <TableCell>{booking.bookedBy}</TableCell>
                    <TableCell>{booking.status}</TableCell>
                    <TableCell>{booking.slotStatus}</TableCell>

                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination and Rows Per Page */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">Rows per page</span>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="outlined"
              size="small"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </div>
          <Pagination
            count={Math.ceil(bookings.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-white flex flex-col md:flex-row gap-2 items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Amenity Board</div>
        <div className="flex flex-col sm:flex-row gap-2">
        <CustomSelect options={["Business Development"]} icon={<FiUser/>}/>
        <CustomSelect options={["Retal Real Estate"]} icon={<FcOrganization/>}/>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <CustomSelectOption icon={<FiUser />} options={["-"]} />
          <CustomSelectOption icon={<FiUser />} options={["-"]} />
          <CustomSelectOption icon={<FiUser />} options={["-"]} />
        </div>
        <div className="flex justify-between items-center mb-4 flex-wrap-reverse gap-4">
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
                <MdMenu className="text-lg " />
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

export default AmenityBookingBoard;
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
