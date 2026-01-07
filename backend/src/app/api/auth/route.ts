import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// AUTH (REGISTER & LOGIN) //
export async function POST(req: Request) {
  try {
    const { action, name, email, password } = await req.json()

// VALIDASI UMUM //
    if (!action || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Data wajib belum lengkap" },
        { status: 400 }
      )
    }

// REGISTER //
if (action === "register") {
      if (!name) {
        return NextResponse.json(
          { success: false, message: "Nama wajib diisi" },
          { status: 400 }
        )
      }

const exists = await prisma.user.findUnique({ where: { email } })
      if (exists) {
        return NextResponse.json(
          { success: false, message: "Email sudah terdaftar" },
          { status: 409 }
        )
      }

const user = await prisma.user.create({
        data: {
          name,
          email,
          password: await bcrypt.hash(password, 12),
        },
        select: { id: true, name: true, email: true },
      })

      return NextResponse.json({ success: true, data: user }, { status: 201 })
    }

// LOGIN //
if (action === "login") {
      const user = await prisma.user.findUnique({ where: { email } })
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json(
          { success: false, message: "Email atau password salah" },
          { status: 401 }
        )
      }

return NextResponse.json(
        {
          success: true,
          data: { id: user.id, name: user.name, email: user.email },
        },
        { status: 200 }
      )
    }

return NextResponse.json(
      { success: false, message: "Action tidak valid" },
      { status: 400 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}