import React from "react";

const EmployeeTypeSelection = () => {
  return (
    <select
      className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
      name="newEmployeeType"
    >
      <option>Full Time</option>
      <option>Part Time</option>
      <option>Intern</option>
      <option>Contractual</option>
    </select>
  );
};

export default EmployeeTypeSelection;
