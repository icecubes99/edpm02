"use client";
import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { create } from "@/app/actions/todoActions";
import { prisma } from "@/utils/prisma";

import DesignationsSelection from "../ui/DesignationsSelection";
import Selection from "../ui/Selection"; // Update this line
import CreateEmployeeWithApi from "@/components/shared/CreateEmployeeWithApi";


const CreateEmployee = async () => {


  return (
    <div className="text-lg font-semibold ">
      <Form action={create} className="flex flex-col">
        <h1 className="text-2xl font-bold ml-10 mt-10">ADD EMPLOYEES</h1>

        <div className="flex gap-x-24 ml-10 mt-10 ">
          <div className="flex gap-y-1 flex-col">
            <h1>FIRST NAME</h1>
            <Input name="firstName" type="text" placeholder="First Name" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>MIDDLE NAME</h1>
            <Input name="middleName" type="text" placeholder="Middle Name" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>LAST NAME</h1>
            <Input name="lastName" type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="flex gap-x-24 ml-10 mt-10">
          <div className="flex flex-col gap-y-1">
            <h1>EMAIL ADDRESS</h1>
            <Input
              name="emailAddress"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>CONTACT NUMBER</h1>
            <Input
              name="contactNumber"
              type="text"
              placeholder="Contact Number"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>EMPLOYEE ID</h1>
            <Input
              name="employeeSpecialId"
              type="text"
              placeholder="ID Number"
            />
          </div>
        </div>

        <div className="flex gap-x-24 ml-10 mt-10">
          <div className="flex flex-col gap-y-1">
            <h1>STREET</h1>
            <Input name="street" type="text" placeholder="Street" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>BARANGAY</h1>
            <Input name="barangay" type="text" placeholder="Barangay" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>CITY</h1>
            <Input name="city" type="text" placeholder="City" />
          </div>
        </div>

        <div className="flex gap-x-24 ml-10 mt-10">
          <div className="flex flex-col gap-y-1">
            <h1>PROVINCE</h1>
            <Input name="province" type="text" placeholder="Province" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>COUNTRY</h1>
            <Input name="Country" type="text" placeholder="Country" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1>ZIP CODE</h1>
            <Input name="zipCode" type="text" placeholder="Zip Code" />
          </div>
        </div>

        <div className="flex gap-x-24 ml-10 mt-10">
          <div className="flex flex-col gap-y-1">
            <h1>EMPLOYEE TYPE</h1>
            <select
              className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
              name="employeeType"
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Intern</option>
              <option>Contractual</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>EMPLOYEE STATUS</h1>
            <select
              className="w-[357px] p-2 border border-gray-200 bg-indigo-50"
              name="assignmentStatus"
            >
              <option>Active</option>
              <option>Resigned</option>
              <option>AWOL</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>DESIGNATION</h1>
            {/* <Selection name="designationId" options={designationOptions} /> */}
            {/* <DesignationsSelection name="designationId" /> */}
          </div>
        </div>

        <div className="flex gap-x-24 ml-10 mt-10">
          <Button
            type="submit"
            className=" p-5 w-[357px] mt-10 bg-indigo-500 text-white rounded-md "
            text="ADD NEW EMPLOYEE"
          />
        </div>
      </Form>
    </div>
  );
};

export default CreateEmployee;
