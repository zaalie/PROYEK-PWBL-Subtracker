import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"
import { Category, Cycle } from "@prisma/client"

// GET ALL SUBSCRIPTIONS Endpoint //
// untuk menampilkan seluruh data subscription //
export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany({
      orderBy: { createdAt: "desc" },
    })

    return apiResponse.ok(subscriptions)
  } catch (error) {
    console.error(error)
    return apiResponse.serverError()
  }
}


// CREATE SUBSCRIPTION //
// Endpoint untuk menambahkan subscription baru //
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
    }: {
      name: string
      price: number
      category?: Category
      cycle?: Cycle
      nextPayment: string
      notes?: string
    } = body

    // Validasi data wajib //
    if (!name || !price || !nextPayment) {
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
      },
    })

    return apiResponse.created(subscription)
  } catch (error) {
    console.error(error)
    return apiResponse.serverError()
  }
}
