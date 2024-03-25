import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const employee = await prisma.employees.findUnique({
    where: { id },
    include: {
      assignment: {
        include: {
          designation: true,
        },
      },
    },
  });

  // Check if employee and designation exist
  if (
    !employee ||
    !employee.assignment ||
    !employee.assignment[0].designation
  ) {
    return NextResponse.json({ error: "Employee or designation not found" });
  }

  const designationName = employee.assignment[0].designation.designationName;
  const assignDesignationId = employee.assignment[0].id;
  const designationId = employee.assignment[0].designation.id;

  return NextResponse.json({
    designationName,
    assignDesignationId,
    designationId,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const json = await request.json();

  const updated = await prisma.employees.update({
    where: { id },
    data: {
      ...json,
      assignment: {
        update: {
          where: { employeeId: id },
          data: json.assignment,
        },
      },
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // First, delete the Assign_Designation record
  await prisma.assign_Designation.deleteMany({
    where: { employeeId: id },
  });

  // Then, delete the Employees record
  const deletedEmployee = await prisma.employees.delete({
    where: { id },
  });

  return NextResponse.json(deletedEmployee);
}
