import { NextRequest } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

// Helper response agar format konsisten //
const response = (success: boolean, data?: any, message?: string) => {
  return Response.json({ success, data, message })
}

//GET USER Menampilkan seluruh data user (tanpa password) // 
export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  })

  return response(true, users)
}

// REGISTER & LOGIN USER Menggunakan parameter "action" action: register | login // 
export async function POST(req: NextRequest) {
  const { action, name, email, password } = await req.json()

  if (!action) {
    return response(false, null, "Action wajib diisi")
  }

  // REGISTER USER //
  if (action === "register") {
    if (!name || !email || !password) {
      return response(false, null, "Semua field wajib diisi")
    }

    const existUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existUser) {
      return response(false, null, "Email sudah terdaftar")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return response(true, {
      id: user.id,
      name: user.name,
      email: user.email,
    })
  }

  // LOGIN USER //
  if (action === "login") {
    if (!email || !password) {
      return response(false, null, "Email dan password wajib diisi")
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return response(false, null, "Login gagal")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return response(false, null, "Login gagal")
    }

    return response(true, {
      id: user.id,
      name: user.name,
      email: user.email,
    })
  }

  return response(false, null, "Action tidak dikenali")
}

// UPDATE USER Mengubah data user berdasarkan ID //
export async function PUT(req: NextRequest) {
  const { id, name, email } = await req.json()

  const user = await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
    },
  })

  return response(true, user)
}

