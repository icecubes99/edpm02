import React from "react";

const EmployeeStatusSelection = () => {
  return (
    <select
      className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
      name="newAssignmentStatus"
    >
      <option>Active</option>
      <option>Resigned</option>
      <option>AWOL</option>
    </select>
  );
};

export default EmployeeStatusSelection;
