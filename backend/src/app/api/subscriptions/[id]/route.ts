import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"
import { Category, Cycle } from "@prisma/client"

type Params = {
  params: { id: string }
}

// MENAMPILKAN SATU DATA SUBSCRIPTION MENURUT ID //
export async function GET(_: Request, { params }: Params) {
  try {
    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(params.id) },
    })

    if (!subscription) {
      return apiResponse.notFound("Subscription tidak ditemukan")
    }

    return apiResponse.ok(subscription)
  } catch (error) {
    console.error("GET /subscriptions/[id] error:", error)
    return apiResponse.serverError()
  }
}

// UPDATE SUBSCRIPTION //
export async function PUT(req: Request, { params }: Params) {
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
      name?: string
      price?: number
      category?: Category
      cycle?: Cycle
      nextPayment?: string
      notes?: string
    }

    const subscription = await prisma.subscription.update({
      where: { id: Number(params.id) },
      data: {
        name,
        price,
        category,
        cycle,
        nextPayment: nextPayment ? new Date(nextPayment) : undefined,
        notes,
      },
    })

    return apiResponse.ok(subscription)
  } catch (error) {
    console.error("PUT /subscriptions/[id] error:", error)
    return apiResponse.serverError()
  }
}

// DELETE SUBSCRIPTION //
export async function DELETE(_: Request, { params }: Params) {
  try {
    await prisma.subscription.delete({
      where: { id: Number(params.id) },
    })

    return apiResponse.ok({
      message: "Subscription berhasil dihapus",
    })
  } catch (error) {
    console.error(error)
    return apiResponse.serverError()
  }
}
