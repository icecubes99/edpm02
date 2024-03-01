import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { create } from "@/app/actions/todoActions";
import { prisma } from "@/utils/prisma";
import dynamic from "next/dynamic";
import { Assignment_Status, Employee_Type } from "@prisma/client";
import Selection from "../ui/Selection"; // Update this line

async function getData() {
  const data = await prisma.designation.findMany({
    select: {
      id: true,
      designationName: true,
    },
  });
  return data;
}

const CreateEmployee = async () => {
  const data = await getData();
  const etOptions = Object.entries(Employee_Type).map(([id, value]) => ({
    id,
    value,
  }));

  const esOptions = Object.entries(Assignment_Status).map(([id, value]) => ({
    id,
    value,
  }));

  const designationOptions = data.map((designation) => ({
    id: designation.id,
    value: designation.designationName,
  }));

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
            <Selection name="employeeType" options={etOptions} />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>EMPLOYEE STATUS</h1>
            <Selection name="assignmentStatus" options={esOptions} />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>DESIGNATION</h1>
            <Selection name="designationId" options={designationOptions} />
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
