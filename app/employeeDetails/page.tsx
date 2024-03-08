import Sidebar from "@/components/shared/Sidebar";
import UnivHeader from "@/components/shared/UnivHeader";
import Image from "next/image";
import { prisma } from "@/utils/prisma";
import React from "react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import TableHeader from "@/components/shared/TableHeader";
import EditEmployeeDetails from "@/components/shared/EditEmployeeDetails";

async function getData() {
  const data = await prisma.employees.findMany({
    select: {
      id: true,
      firstName: true,
      middleName: true,
      barangay: true,
      province: true,
      street: true, // add this
      city: true, // add this
      Country: true,
      zipCode: true,
      emailAddress: true,
      contactNumber: true,
      createdAt: true,
      lastName: true,
      employeeSpecialId: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <main className="">
      {/* <UnivHeader /> */}
      <TableHeader />
      <div className="flex flex-col">
        <div>
          <h1 className="pt-10 text-3xl font-bold mb-10 ml-10">
            EMPLOYEE DETAILS TABLE
          </h1>
          <table className="border-stone-500 w-full border ">
            <thead>
              <tr className="text-black font-semibold text-lg ">
                <th className="border px-10 py-2 bg-indigo-50">EMPLOYEE ID</th>
                <th className="border px-10 py-2 bg-indigo-50">LAST NAME</th>
                <th className="border px-10 py-2 bg-indigo-50">FIRST NAME</th>
                <th className="border px-10 py-2 bg-indigo-50">MIDDLE NAME</th>
                <th className="border px-10 py-2 bg-indigo-50">STREET</th>
                <th className="border px-10 py-2 bg-indigo-50">BARANGAY</th>
                <th className="border px-10 py-2 bg-indigo-50">CITY</th>
                <th className="border px-10 py-2 bg-indigo-50">PROVINCE</th>
                <th className="border px-10 py-2 bg-indigo-50">COUNTRY</th>
                <th className="border px-10 py-2 bg-indigo-50">ZIP CODE</th>
                <th className="border px-10 py-2 bg-indigo-50">
                  EMAIL ADDRESS
                </th>
                <th className="border px-10 py-2 bg-indigo-50">
                  CONTACT NUMBER
                </th>
                <th className="border px-10 py-2 bg-indigo-50">EDIT</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, id) => (
                <tr key={id}>
                  <td className="border px-10 py-2 text-center">
                    {employee.employeeSpecialId}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.lastName}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.firstName}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.middleName}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.street}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.barangay}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.city}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.province}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.Country}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.zipCode}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.emailAddress}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.contactNumber}
                  </td>
                  <td className="border px-10 py-2  items-center ">
                    <EditEmployeeDetails employee={employee} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
