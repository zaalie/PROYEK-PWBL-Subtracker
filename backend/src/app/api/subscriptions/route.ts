import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"

export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany({
      orderBy: { createdAt: "desc" },
    })

    return apiResponse.ok(subscriptions)
  } catch (error) {
    return apiResponse.serverError()
  }
}

// CREATE SUBSCRIPTIONS //
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, price, category, cycle, nextPayment, notes } = body

    if (!name || !price || !nextPayment) {
      return apiResponse.badRequest("Data wajib belum lengkap")
    }