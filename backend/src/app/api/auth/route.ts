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