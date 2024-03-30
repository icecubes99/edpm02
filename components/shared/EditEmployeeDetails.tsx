"use client";
import React, { useEffect, useState } from "react";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { editEmployeeDet } from "@/app/actions/todoActions";
import { prisma } from "@/utils/prisma";
import DesignationsSelection from "../ui/DesignationsSelection";
import EmployeeTypeSelection from "../ui/EmployeeTypeSelection";
import EmployeeStatusSelection from "../ui/EmployeeStatusSelection";

import Selection from "../ui/Selection"; // Update this line

interface EmployeeData {
  id: string;
  employeeSpecialId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  barangay: string;
  street: string;
  city: string;
  province: string;
  Country: string;
  zipCode: number;
  emailAddress: string;
  contactNumber: string;
  createdAt: Date;
}

interface Assign_Designation {
  id: string;
  employeeId: string;
  employeeType: string;
  assignmentStatus: string;
  designationId: string;
}

interface Designation {
  id: string;
  designationName: string;
  assignDesignationId: string;
  designationId: string;
}

const EditEmployeeDetails = ({ employee }: { employee: EmployeeData }) => {
  // const [data, setData] = useState<DesignationData[]>([]);
  const [editEmployee, setEditEmployee] = useState(false);
  const [formValues, setFormValues] = useState(employee);
  const [designationOptions, setDesignationOptions] = useState<
    { id: string; value: string }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setEditEmployee(!editEmployee);
  };

  const handleSubmit = () => {
    setEditEmployee(false);
  };

  return (
    <div>
      <Button
        text="Edit"
        className="text-blue-500 hover:text-violet-600 "
        onClick={handleEdit}
      />

      {editEmployee ? (
        <Form action={editEmployeeDet} onSubmit={handleSubmit}>
          <Input type="hidden" name="id" value={employee.id} />

          <div className="flex gap-x-24  mt-2 ">
            <div className="flex gap-y-1 flex-col">
              <h1>FIRST NAME</h1>
              <Input
                name="newFirstName"
                type="text"
                placeholder={formValues.firstName}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>MIDDLE NAME</h1>
              <Input
                name="newMiddleName"
                type="text"
                placeholder={formValues.middleName}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>LAST NAME</h1>
              <Input
                name="newLastName"
                type="text"
                placeholder={formValues.lastName}
              />
            </div>
          </div>

          <div className="flex gap-x-24 m mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>EMAIL ADDRESS</h1>
              <Input
                name="newEmailAddress"
                type="text"
                placeholder={formValues.emailAddress}
              />
            </div>
          </div>

          <div className="flex gap-x-24 mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>CONTACT NUMBER</h1>
              <Input
                name="newContactNumber"
                type="text"
                placeholder={formValues.contactNumber}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>EMPLOYEE ID</h1>
              <Input
                name="newEmployeeSpecialId"
                type="text"
                placeholder={formValues.employeeSpecialId}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>STREET</h1>
              <Input
                name="newStreet"
                type="text"
                placeholder={formValues.street}
              />
            </div>
          </div>
          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>BARANGAY</h1>
              <Input
                name="newBarangay"
                type="text"
                placeholder={formValues.barangay}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>CITY</h1>
              <Input name="newCity" type="text" placeholder={formValues.city} />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>PROVINCE</h1>
              <Input
                name="newProvince"
                type="text"
                placeholder={formValues.province}
              />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>COUNTRY</h1>
              <Input
                name="newCountry"
                type="text"
                placeholder={formValues.Country}
              />
            </div>
          </div>
          <div className="flex gap-x-24  mt-2 ">
            <div className="flex flex-col gap-y-1">
              <h1>ZIP CODE</h1>
              <Input name="newZipCode" type="text" placeholder="ZipCode" />
            </div>
          </div>

          <div className="flex gap-x-24 mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>DESIGNATION</h1>
              {/* <DesignationsSelection name="newDesignationId" /> */}
            </div>
          </div>

          <div className="flex gap-x-24 mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>EMPLOYEE TYPE</h1>
              <EmployeeTypeSelection />
            </div>
          </div>

          <div className="flex gap-x-24 mt-2">
            <div className="flex flex-col gap-y-1">
              <h1>EMPLOYEE STATUS</h1>
              <EmployeeStatusSelection />
            </div>
          </div>

          <div className="flex gap-x-24  mt-2">
            <Button
              type="submit"
              className=" p-5 w-[357px] mt-10 bg-indigo-500 text-white rounded-md "
              text="SAVE"
            />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditEmployeeDetails;
