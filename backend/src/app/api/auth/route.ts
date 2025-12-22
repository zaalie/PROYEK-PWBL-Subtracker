import { prisma } from "@/lib/prisma"
import { response } from "@/lib/response"
import { signToken } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return response.badRequest("Email dan password wajib")
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) return response.notFound("User tidak ditemukan")

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) return response.badRequest("Password salah")

    const token = signToken({ userId: user.id })

    return response.ok({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  } catch {
    return response.serverError()
  }
}
