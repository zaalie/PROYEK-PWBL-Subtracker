import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

type Params = {
  params: { id: string }
}

// UPDATE USER BY ID //
export async function PUT(req: Request, { params }: Params) {
  try {
    const { name, email } = await req.json()

    const user = await prisma.user.update({
      where: { id: Number(params.id) },
      data: { name, email },
      select: { id: true, name: true, email: true },
    })

    return NextResponse.json({ success: true, data: user })
  } catch {
    return NextResponse.json(
      { success: false, message: "Gagal update user" },
      { status: 500 }
    )
  }
}

// DELETE USER BY ID //
export async function DELETE(_: Request, { params }: Params) {
  try {
    await prisma.user.delete({
      where: { id: Number(params.id) },
    })

    return NextResponse.json({
      success: true,
      message: "User berhasil dihapus",
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Gagal menghapus user" },
      { status: 500 }
    )
  }
}
