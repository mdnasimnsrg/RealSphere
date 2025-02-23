import React from "react";

const ResourceList = () => {
  const resources = [
    { name: "Naveenraj Murugan", role: "Security Guard" },
    { name: "Prathamesh K", role: "Generic Job" },
    { name: "Suriya", role: "Generic Job" },
    { name: "Mohaan", role: "Security Guard" },
  ];

  return (
    <table className="table-auto w-full bg-white shadow-md rounded">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Image</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Job/Role</th>
        </tr>
      </thead>
      <tbody>
        {resources.map((resource, index) => (
          <tr key={index} className="border-b">
            <td className="p-2">{resource.name.charAt(0)}</td>
            <td className="p-2">{resource.name}</td>
            <td className="p-2">{resource.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResourceList;
