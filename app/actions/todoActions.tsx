"use server";

import React from "react";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const middleName = formData.get("middleName") as string;
  const lastName = formData.get("lastName") as string;
  const barangay = formData.get("barangay") as string;
  const street = formData.get("street") as string;
  const city = formData.get("city") as string;
  const province = formData.get("province") as string;
  const country = formData.get("Country") as string;
  const zipCode = Number(formData.get("zipCode"));
  const emailAddress = formData.get("emailAddress") as string;
  const contactNumber = formData.get("contactNumber") as string;
  const employeeSpecialId = formData.get("employeeSpecialId") as string;
  const employeeType = formData.get("employeeType") as string;
  const assignmentStatus = formData.get("assignmentStatus") as string;
  const designationId = formData.get("designationId") as string;

  try {
    const createdEmployee = await prisma.employees.create({
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
        street: street,
        city: city,
        province: province,
        Country: country,
        zipCode: zipCode,
        employeeSpecialId: employeeSpecialId,
      },
    });
    console.log(createdEmployee);
    revalidatePath("/");
    return true; // Return true if the operation was successful
  } catch (error) {
    console.error(error);
    return Promise.resolve(false);
  }
}

export async function edit(formData: FormData) {
  const firstName = formData.get("newFirstName") as string;
  const middleName = formData.get("newMiddleName") as string;
  const lastName = formData.get("newLastName") as string;
  const barangay = formData.get("newBarangay") as string;
  const street = formData.get("newStreet") as string;
  const city = formData.get("newCity") as string;
  const province = formData.get("newProvince") as string;
  const Country = formData.get("newCountry") as string;
  const zipCode = Number(formData.get("newZipCode"));
  const emailAddress = formData.get("newEmailAddress") as string;
  const contactNumber = formData.get("newContactNumber") as string;
  const employeeSpecialId = formData.get("newEmployeeSpecialId") as string;
  const employeeType = formData.get("newEmployeeType") as string;
  const assignmentStatus = formData.get("newAssignmentStatus") as string;
  const designationId = formData.get("newDesignationId") as string;
  const id = formData.get("id") as string;
  try {
    // Check if the Assign_Designation record exists
    const assignDesignation = await prisma.assign_Designation.findUnique({
      where: { id: designationId },
    });
    if (!assignDesignation) {
      throw new Error("Assign_Designation record not found");
    }
    await prisma.employees.updateMany({
      where: {
        id: id,
      },
      data: {
        firstName: firstName,
        emailAddress: emailAddress,
        middleName: middleName,
        contactNumber: contactNumber,
        lastName: lastName,
        barangay: barangay,
        street: street,
        city: city,
        province: province,
        Country: Country,
        zipCode: zipCode,
        employeeSpecialId: employeeSpecialId,
      },
    });

    // Update the assignment table
    await prisma.assign_Designation.update({
      where: {
        employeeId: id,
      },
      data: {
        employeeType: employeeType,
        designationId: designationId,
        assignmentStatus: assignmentStatus,
      },
    });

    revalidatePath("/");
    return true; // Return true if the operation was successful
  } catch (error) {
    console.error(error);
    return Promise.resolve(false);
  }
}

export async function editEmployeeDet(formData: FormData) {
  const firstName = formData.get("newFirstName") as string;
  const middleName = formData.get("newMiddleName") as string;
  const lastName = formData.get("newLastName") as string;
  const barangay = formData.get("newBarangay") as string;
  const street = formData.get("newStreet") as string;
  const city = formData.get("newCity") as string;
  const province = formData.get("newProvince") as string;
  const Country = formData.get("newCountry") as string;
  const zipCode = Number(formData.get("newZipCode"));
  const emailAddress = formData.get("newEmailAddress") as string;
  const contactNumber = formData.get("newContactNumber") as string;
  const employeeSpecialId = formData.get("newEmployeeSpecialId") as string;

  const employeeType = formData.get("newEmployeeType") as string;
  const assignmentStatus = formData.get("newAssignmentStatus") as string;
  const designationId = formData.get("newDesignationId") as string;

  const id = formData.get("id") as string;
  try {
    const updatedEmployee = await prisma.employees.update({
      where: { id: id },
      data: {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        barangay: barangay,
        street: street,
        city: city,
        province: province,
        Country: Country,
        zipCode: zipCode,
        emailAddress: emailAddress,
        contactNumber: contactNumber,
        employeeSpecialId: employeeSpecialId,
      },
      select: {
        firstName: true,
        middleName: true,
        lastName: true,
        barangay: true,
        street: true,
        city: true,
        province: true,
        Country: true,
        zipCode: true,
        emailAddress: true,
        contactNumber: true,
        employeeSpecialId: true,
      },
    });
    await prisma.assign_Designation.update({
      where: {
        employeeId: id,
      },
      data: {
        employeeType: employeeType,
        designationId: designationId,
        assignmentStatus: assignmentStatus,
      },
    });

    console.log("Data updated successfully", updatedEmployee);
    revalidatePath("/");

    return true;
  } catch (error) {
    console.error("Data update failed", error);
    return Promise.resolve(false);
  } finally {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }
}
