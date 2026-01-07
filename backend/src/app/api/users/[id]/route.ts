import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, message: "ID tidak valid" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, email } = body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
      },
    });

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal update user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "User berhasil dihapus",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal delete user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
