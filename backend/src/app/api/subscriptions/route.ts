import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"
import { Category, Cycle } from "@prisma/client"


// MENAMPILKAN SEMUA DATA SUBSCRIPTION //
export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany({
      orderBy: { createdAt: "desc" },
    })

    return apiResponse.ok(subscriptions)
  } catch (error) {
    console.error("GET /subscriptions error:", error)
    return apiResponse.serverError()
  }
}

// TAMBAH SUBSCRIPTION //
export async function POST(req: Request) {
  try {
    const {
      name,
      price,
      category,
      cycle,
      nextPayment,
      notes,
      userId,
    } = await req.json()

    // VALIDASI WAJIB
    if (!name || !price || !nextPayment || !userId) {
      return apiResponse.badRequest("Data wajib belum lengkap")
    }

    const subscription = await prisma.subscription.create({
      data: {
        name,
        price,
        category: category ?? Category.OTHER,
        cycle: cycle ?? Cycle.MONTHLY,
        nextPayment: new Date(nextPayment),
        notes,
        userId,
      },
    })

    return apiResponse.created(subscription)
  } catch (error) {
    console.error("POST /subscriptions error:", error)
    return apiResponse.serverError()
  }
}
