import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// ================= GET USER BY ID =================
// Endpoint untuk mengambil 1 user berdasarkan ID
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)

    // Validasi ID
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    // Jika user tidak ditemukan
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User tidak ditemukan" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, data: user },
      { status: 200 }
    )
  } catch (error) {
    console.error("GET USER BY ID ERROR:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
