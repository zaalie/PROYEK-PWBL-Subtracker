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