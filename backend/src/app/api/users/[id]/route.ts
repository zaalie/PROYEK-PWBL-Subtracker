import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// MENAMPILKAN SATU DATA USER MENURUT ID //
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)

    // VALIDASI ID
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
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

// UPDATE USER //
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)
    const { name, email } = await req.json()

    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      )
    }

    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return NextResponse.json(
      { success: true, data: user },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Gagal update user" },
      { status: 500 }
    )
  }
}

// DELETE USER //
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)

    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      )
    }

    await prisma.user.delete({
      where: { id },
    })

    return NextResponse.json(
      { success: true, message: "User berhasil dihapus" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: "Gagal menghapus user" },
      { status: 500 }
    )
  }
}
