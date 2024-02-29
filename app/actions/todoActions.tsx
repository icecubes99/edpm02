"use server";

import React from "react";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import {
  Assign_Designation,
  Assignment_Status,
  Employee_Type,
} from "@prisma/client";

export async function create(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const middleName = formData.get("middleName") as string;
  const lastName = formData.get("lastName") as string;
  const barangay = formData.get("barangay") as string;
  const province = formData.get("province") as string;
  const country = formData.get("Country") as string;
  const zipCode = Number(formData.get("zipCode"));
  const emailAddress = formData.get("emailAddress") as string;
  const contactNumber = formData.get("contactNumber") as string;
  const employeeType = formData.get("employeeType") as Employee_Type;
  const assignmentStatus = formData.get(
    "assignmentStatus"
  ) as Assignment_Status;
  const designationId = formData.get("designationId") as string;

  try {
    await prisma.employees.create({
      data: {
        firstName: firstName,
        emailAddress: emailAddress,
        middleName: middleName,
        contactNumber: contactNumber,
        lastName: lastName,
        assignment: {
          create: {
            employeeType: employeeType,
            designationId: designationId,
            assignmentStatus: assignmentStatus,
          },
        },
        barangay: barangay,
        province: province,
        Country: country,
        zipCode: zipCode,
      },
    });

    revalidatePath("/");
    return true; // Return true if the operation was successful
  } catch (error) {
    console.error(error);
    return Promise.resolve(false);
  }
}
