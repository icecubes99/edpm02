// File: pages/api/designations.ts

import { prisma } from "@/utils/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const designations = await prisma.designation.findMany({
    select: {
      id: true,
      designationName: true,
    },
  });

  res.status(200).json(designations);
}
