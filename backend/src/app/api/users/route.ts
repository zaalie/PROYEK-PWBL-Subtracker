import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Menampilkan semua data user //
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });