import { NextRequest } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

// Helper response agar format konsisten //
const response = (success: boolean, data?: any, message?: string) => {
  return Response.json({ success, data, message })
}

