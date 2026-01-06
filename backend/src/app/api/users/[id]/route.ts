import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Mengambil Salah Satu Data User Menurut Id //
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(params.id) },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: user });
  } catch {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}

// UPDATE USER //
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, email } = await req.json();

    const user = await prisma.user.update({
      where: { id: Number(params.id) },
      data: { name, email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json({ success: true, data: user });
  } catch {
    return NextResponse.json(
      { success: false, message: "Gagal update user" },
      { status: 500 }
    );
  }
}

// DELETE USER //
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({
      success: true,
      message: "User berhasil dihapus",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Gagal menghapus user" },
      { status: 500 }
    );
  }
}