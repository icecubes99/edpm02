import React from "react";

interface EmployeeTypeSelectProps {
  name: string;
  options: { id: string; value: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const EmployeeTypeSelect = ({
  name,
  options,
  placeholder,
  value,
  onChange,
}: EmployeeTypeSelectProps) => {
  return (
    <select
      className="w-full p-2 border border-gray-200"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default EmployeeTypeSelect;
