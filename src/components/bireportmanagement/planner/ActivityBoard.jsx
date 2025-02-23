import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CustomSelect from "../../ui/CustomSelect";
import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import CreateActivity from "./CreateActivity";
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
  Popover
} from "@mui/material";
import { Search as SearchIcon, Phone as PhoneIcon } from "@mui/icons-material";


const ActivityChip = ({
  width = 120,
  activityName,
  activityCreatedBy,
  activityStatus,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Paper
      elevation={1}
      sx={{
        p: 0.5,
        display: "flex",
        alignItems: "center",
        backgroundColor: "lightblue",
        opacity: 0.5,
        position: "relative",
        "&:hover": {
          opacity: 1,
        },
        width: width,
        overflowX:"hidden"
      }}
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <IconButton
        size="small"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          mr: 1,
        }}
      >
        <PhoneIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <div className="flex items-center gap-8">
          <p className="text-nowrap text-xs font-semibold">{activityName}</p>
          <p className="text-nowrap text-xs font-semibold">{activityCreatedBy}</p>
          <p className="text-nowrap text-xs font-semibold">{"+966-987654321"}</p>
          <p className="text-nowrap text-xs font-semibold">{"manager@mullak.com.sa"}</p>
        </div>
      </Box>
      <Button variant="contained" color="success">
        {activityStatus}
      </Button>

      {/* Popover Component */}
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "auto" ,width:"100%"}}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            p: 2,
            "&:hover": {
              cursor: "default", // Ensures it doesn't close when hovered
            },
          }}
          onMouseEnter={() => setAnchorEl(anchorEl)} // Keep popover open when hovered
          onMouseLeave={handlePopoverClose} // Close only when cursor leaves popover
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <IconButton size="small" sx={{ backgroundColor: "primary.main", color: "white", mr: 1 }}>
              <PhoneIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {activityName}
            </Typography>
          </Box>
          <Typography variant="body2">22-02-2025 11:00 AM</Typography>
          <Typography variant="body2">Created By: {activityCreatedBy}</Typography>
          <Button variant="text" sx={{ mt: 1, p: 0, justifyContent: "flex-start" }}>
            View more
          </Button>
          <Box
            sx={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid white",
            }}
          />
        </Box>
      </Popover>
    </Paper>
  );
};





const ActivityBoard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Weekly");
  const [open, setOpen] = useState(false);
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
  const activities = [
    {
      activityName: "Phone Call",
      activityInfo: "Frwerersd",
      date: "2025-02-22T00:00",
      createdBy: "Jayden",
      priority: "High",
      status: "Open",
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
                const activityForTimeSlot = activities.find((activity) => {
                  const activityDate = new Date(activity.date);
                  const activityTime = activityDate.getHours();

                  const [startTime, endTime] = user.initials
                    .split("-")
                    .map((time) => parseInt(time));

                  return (
                    activityDate.toDateString() === dates[0].toDateString() &&
                    activityTime >= startTime &&
                    activityTime < endTime
                  );
                });

                return (
                  <div className="border-l p-3 h-16 hover:bg-gray-200 cursor-pointer relative">
                    {activityForTimeSlot && (
                      <ActivityChip
                        activityCreatedBy={activityForTimeSlot.createdBy}
                        activityName={activityForTimeSlot.activityName}
                        activityStatus={activityForTimeSlot.status}
                        width={600}
                      />
                    )}
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
                const activityForDateAndTime = activities.find((activity) => {
                  const activityDate = new Date(activity.date);
                  const activityTime = activityDate.getHours();

                  const [startTime, endTime] = user.initials
                    .split("-")
                    .map((time) => parseInt(time));

                  return (
                    activityDate.toDateString() === date.toDateString() &&
                    activityTime >= startTime &&
                    activityTime < endTime
                  );
                });

                return (
                  <div
                    key={index}
                    className="border-l p-2 h-16 hover:bg-gray-200 cursor-pointer relative"
                  >
                    {activityForDateAndTime && (
                      <ActivityChip
                        activityName={activityForDateAndTime.activityName}
                        activityStatus={activityForDateAndTime.status}
                        activityCreatedBy={activityForDateAndTime.createdBy}
                      />
                    )}
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
                 const activityForDateAndTime = activities.find((activity) => {
                  const activityDate = new Date(activity.date);



                  return (
                    activityDate.toDateString() === date.toDateString()
                  );
                });
            return  <div
                key={index}
                className="border p-3 h-28 flex flex-col justify-between items-center hover:bg-gray-200 cursor-pointer text-center"
              >
               <span className="font-bold"> {date.getDate()}</span>
                {activityForDateAndTime && (
                      <ActivityChip
                        activityName={activityForDateAndTime.activityName}
                        activityStatus={activityForDateAndTime.status}
                        activityCreatedBy={activityForDateAndTime.createdBy}
                        width={120}
                      />
                    )}
              </div>
            })}
          </div>
        </div>
      );
    }
  };

  const ActivityList = () => {
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(1);
    };

    return (
      <div className="p-4">
        {/* Search Bar */}
        <div className="mb-4 flex items-center max-w-md">
          <TextField
            label="Search Activity"
            variant="outlined"
            className="flex-grow"
            InputProps={{
              startAdornment: <SearchIcon className="mr-2 text-gray-500" />,
            }}
          />
        </div>

        {/* Table */}
        <TableContainer component={Paper} className="shadow-md">
          <Table aria-label="activity table">
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>Activity Name</TableCell>
                <TableCell>Activity Info</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Created by</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activities
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center">
                      <PhoneIcon className="mr-2 text-blue-500" />
                      {activity.activityName}
                    </TableCell>
                    <TableCell>{activity.activityInfo}</TableCell>
                    <TableCell>{activity.date}</TableCell>
                    <TableCell>{activity.createdBy}</TableCell>
                    <TableCell>{activity.priority}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="success"
                        className="capitalize"
                      >
                        {activity.status}
                      </Button>
                    </TableCell>
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
            count={Math.ceil(activities.length / rowsPerPage)}
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
      <div className="bg-white md:flex items-center justify-between p-4 mb-2">
        <div className="text-xl font-semibold">Activity Board</div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4 flex-wrap-reverse gap-4">
          <CustomSelect
            options={["Daily", "Weekly", "Monthly"]}
            selectedOption={viewMode}
            handleChange={(e) => setViewMode(e.target.value)}
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
            <Button variant="contained" onClick={() => setOpen(true)}>
              Create Activitys
            </Button>
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
          {activeTab === "calendar" ? renderCalendarLayout() : ActivityList()}
        </div>
      </div>
      <CreateActivity open={open} setOpen={setOpen} />
    </div>
  );
};

export default ActivityBoard;
