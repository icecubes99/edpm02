import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        // Fetch all departments that have a signatory
        const departmentsWithSignatories = await prisma.department.findMany({
            where: {
                signatories: {
                    some: {},
                },
            },
        });

        const departmentIds = departmentsWithSignatories.map((department) => department.id);

        // Fetch all employees who are part of a department that has a signatory
        const employees = await prisma.employees.findMany({
            where: {
                assignment: {
                    some: {
                        designation: {
                            department: {
                                id: {
                                    in: departmentIds,
                                },
                            },
                        },
                    },
                },
            },
            include: {
                assignment: {
                    include: {
                        designation: {
                            include: {
                                department: true,
                            },
                        },
                    },
                },
            },
        });

        console.log(employees);
        return NextResponse.json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        return NextResponse.error();
    }
}