import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";
import bcrypt from "bcryptjs"; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return apiResponse.badRequest("Email dan password wajib diisi");
    }

    const user = await prisma.user.findUnique({
      where: { email },
    }); 

    if (!user) {
      return apiResponse.notFound("User tidak ditemukan");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return apiResponse.badRequest("Email atau password salah");
    }

    return apiResponse.ok({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return apiResponse.serverError();
  }
}