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

