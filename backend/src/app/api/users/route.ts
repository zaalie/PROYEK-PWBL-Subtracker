import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return apiResponse.badRequest("Data tidak lengkap");
    }

    const exists = await prisma.user.findUnique({
      where: { email },
    });