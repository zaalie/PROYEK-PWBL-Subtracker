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

    if (exists) {
      return apiResponse.badRequest("Email sudah terdaftar");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return apiResponse.created({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch {
    return apiResponse.serverError();
  }
}