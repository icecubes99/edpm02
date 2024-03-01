import Sidebar from "@/components/shared/Sidebar";
import UnivHeader from "@/components/shared/UnivHeader";
import Image from "next/image";
import { prisma } from "@/utils/prisma";
import React from "react";

async function getData() {
  const data = await prisma.employees.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      assignment: {
        select: {
          assignmentStatus: true,
          employeeType: true,
          designation: {
            select: {
              designationName: true,
            },
          },
        },
      },
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
      <UnivHeader />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col pt-2 pl-1 text-center">
          <h1 className="pt-10 text-3xl font-bold">EMPLOYEE MANAGEMENT</h1>
          <h1 className="mb-16 pt-5 text-xl">View Employee Details Table</h1>
          <table className="border-stone-500 w-full border ">
            <thead>
              <tr className="text-black font-semibold text-lg ">
                <th className="border px-10 py-2  bg-indigo-50">FIRST NAME</th>
                <th className="border px-10 py-2  bg-indigo-50">LAST NAME</th>
                <th className="border px-10 py-2  bg-indigo-50">DESIGNATION</th>
                <th className="border px-10 py-2 bg-indigo-50">
                  EMPLOYEE TYPE
                </th>
                <th className="border px-10 py-2 bg-indigo-50">STATUS</th>
                <th className="border px-10 py-2 bg-indigo-50">EDIT</th>
                <th className="border px-10 py-2 bg-indigo-50">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, id) => (
                <tr key={id}>
                  <td className="border px-10 py-2 text-center">
                    {employee.firstName}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    {employee.lastName}
                  </td>
                  {employee.assignment.map((assignment, index) => (
                    <React.Fragment key={index}>
                      <td className="border px-10 py-2 text-center">
                        {assignment.designation.designationName}
                      </td>
                      <td className="border px-10 py-2 text-center">
                        {assignment.employeeType}
                      </td>
                      <td className="border px-10 py-2 text-center">
                        {assignment.assignmentStatus}
                      </td>
                      <td className="border px-10 py-2  items-center ">
                        <img
                          src="./edit.svg"
                          alt=""
                          className="max-w-full max-h-full"
                        />
                      </td>
                      <td className="border px-10 py-2 flex justify-center items-center">
                        <img src="./delete.svg" alt="" />
                      </td>
                    </React.Fragment>
                  ))}
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
