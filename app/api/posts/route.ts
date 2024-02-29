//url: https://localhost:3000/api/posts
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const body = await request.json();
    const {
      firstName,
      middleName,
      lastName,
      barangay,
      province,
      Country,
      zipCode,
      emailAddress,
      contactNumber,

      employeeType,
      assignmentStatus,
      designationId,
    } = body;

    const newPost = await prisma.employees.create({
      data: {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        barangay: barangay,
        province: province,
        Country: Country,
        zipCode: zipCode,
        emailAddress: emailAddress,
        contactNumber: contactNumber,
        assignment: {
          create: {
            employeeType: employeeType,
            assignmentStatus: assignmentStatus,
            designationId: designationId,
          },
        },
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json(
      { message: "Error creating post", err },
      { status: 500 }
    );
  }
};
