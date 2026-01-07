import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// AUTH (REGISTER & LOGIN)
export async function POST(req: Request) {
  try {
    const { action, name, email, password } = await req.json()