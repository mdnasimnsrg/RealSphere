import React, { useState } from "react";
import { FaPhone, FaSync, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaFileInvoice, FaEnvelope, FaCalendar } from "react-icons/fa";
import CustomModal from "../../CustomModal";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelectOption = ({ label, options, value, onChange, error }) => {
    return (
        <FormControl fullWidth error={!!error}>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label}>
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

const ActivityForm = ({ activity, setOpen, setActivity }) => {
    const [formData, setFormData] = useState({
        title: "",
        priority: "High",
        property: "",
        category: "Property",
        dateTime: "",
        notes: "",
        category1: ""
    });

    const [errors, setErrors] = useState({});

    const categories = ["Property", "Lead", "Opportunity"];
    const priorities = ["High", "Urgent", "Medium", "Low"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        let validationErrors = {};
        if (!formData.title) validationErrors.title = "Title is required";
        if (!formData.property) validationErrors.property = "Property is required";
        if (!formData.category) validationErrors.category = "Category is required";
        if (!formData.dateTime) validationErrors.dateTime = "Date & Time is required";
        if (!formData.notes) validationErrors.notes = "Notes are required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // If no errors, proceed with submission
        console.log("Form Submitted:", formData);
        setOpen(false);
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-4">

                <div>
                    <div className="mb-4">
                        <p className="text-gray-600 font-medium mb-2">Selected Category</p>
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, category: category }))}
                                    className={`px-4 py-2 border rounded-md text-sm transition ${formData.category === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <label className="text-gray-600 text-sm font-medium">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.title ? "border-red-500" : ""}`}
                        placeholder="Enter Title"
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}

                    <div className="mt-4">
                        <p className="text-gray-600 font-medium mb-2">Priority</p>
                        <div className="flex gap-2">
                            {priorities.map((level) => (
                                <button
                                    key={level}
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, priority: level }))}
                                    className={`px-4 py-2 border rounded-md text-sm transition ${formData.priority === level ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600 font-semibold">
                            Property <span className="text-red-500">*</span>
                        </label>
                        <CustomSelectOption
                            options={[
                                { label: "Option 1", value: "option1" },
                                { label: "Option 2", value: "option2" },
                                { label: "Option 3", value: "option3" },
                            ]}
                            label="Property"
                            value={formData.property}
                            onChange={(e) => setFormData((prev) => ({ ...prev, property: e.target.value }))}
                            error={errors.property}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 font-semibold">
                            Category
                        </label>
                        <CustomSelectOption
                            options={[
                                { label: "Option 1", value: "option1" },
                                { label: "Option 2", value: "option2" },
                                { label: "Option 3", value: "option3" },
                            ]}
                            label="Category"
                            value={formData.category1}
                            onChange={(e) => setFormData((prev) => ({ ...prev, category1: e.target.value }))}

                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-600 text-sm font-medium">
                            Date & Time <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="datetime-local"
                                name="dateTime"
                                value={formData.dateTime}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md ${errors.dateTime ? "border-red-500" : ""}`}
                            />
                            <FaCalendar className="absolute right-3 top-3 text-gray-400" />
                        </div>
                        {errors.dateTime && <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>}
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label className="text-gray-600 text-sm font-medium">
                    Notes <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.notes ? "border-red-500" : ""}`}
                    placeholder="Enter Notes"
                ></textarea>
                {errors.notes && <p className="text-red-500 text-xs mt-1">{errors.notes}</p>}
            </div>

            <div className="flex justify-end gap-2">
                <button type="button" onClick={() => {
                    setOpen(false)
                    setActivity("")
                }} className="px-4 py-2 text-gray-600 border rounded-md">
                    Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Save
                </button>
            </div>
        </form>
    );
};


const CreateActivity = ({ open, setOpen }) => {
    const [selectedActivity, setSelectedActivity] = useState(null);

    const activities = [
        { name: "Phone Call", icon: <FaPhone className="text-blue-500 text-2xl" />, bg: "bg-blue-100" },
        { name: "Follow Up", icon: <FaSync className="text-green-500 text-2xl" />, bg: "bg-green-100" },
        { name: "Meeting", icon: <FaUsers className="text-purple-500 text-2xl" />, bg: "bg-purple-100" },
        { name: "Appointment", icon: <FaCalendarAlt className="text-red-500 text-2xl" />, bg: "bg-red-100" },
        { name: "Arrange Site Visit", icon: <FaMapMarkerAlt className="text-yellow-500 text-2xl" />, bg: "bg-yellow-100" },
        { name: "Send Quotation", icon: <FaFileInvoice className="text-blue-500 text-2xl" />, bg: "bg-blue-100" },
        { name: "Send Email", icon: <FaEnvelope className="text-blue-400 text-2xl" />, bg: "bg-blue-100" },
    ];

    return (
        <CustomModal isOpen={open} onClose={() => setOpen(false)} size="max" title={selectedActivity ? `Create Activity - ${selectedActivity}` : "Create Activity"}>


            {selectedActivity ? (
                <ActivityForm activity={selectedActivity} setActivity={setSelectedActivity} setOpen={setOpen} />
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedActivity(activity.name)}
                            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all"
                        >
                            <div className={`p-4 rounded-full ${activity.bg}`}>{activity.icon}</div>
                            <span className="mt-2 font-medium text-center">{activity.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </CustomModal>
    );
};


export default CreateActivity;
