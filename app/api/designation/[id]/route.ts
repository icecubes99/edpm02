import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const designation = await prisma.designation.findUnique({
    where: { id },
  });
  return NextResponse.json(designation);
}
