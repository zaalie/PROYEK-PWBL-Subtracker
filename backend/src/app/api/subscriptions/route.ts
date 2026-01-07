import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"
import { Category, Cycle } from "@prisma/client"

// MENAMPILKAN DATA SUBSCRIPTION //
export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return apiResponse.ok(subscriptions)
  } catch (error) {
    console.error("GET /subscriptions error:", error)
    return apiResponse.serverError()
  }
}

// MENAMBAHKAN SUBSCRIPTION BARU//
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      price,
      category,
      cycle,
      nextPayment,
      notes,
    } = body as {
      name: string
      price: number
      category?: Category
      cycle?: Cycle
      nextPayment: string
      notes?: string
    }
