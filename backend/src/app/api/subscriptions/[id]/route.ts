import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"
import { Category, Cycle } from "@prisma/client"

type Params = {
  params: { id: string }
}

// MENAMPILKAN SATU DATA SUBSCRIPTION MENURUT ID //
export async function GET(_: Request, { params }: Params) {
  try {
    const id = Number(params.id)

    if (isNaN(id)) {
      return apiResponse.badRequest("ID tidak valid")
    }

    const subscription = await prisma.subscription.findUnique({
      where: { id },
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
    const id = Number(params.id)

    if (isNaN(id)) {
      return apiResponse.badRequest("ID tidak valid")
    }

    const {
      name,
      price,
      category,
      cycle,
      nextPayment,
      notes,
    } = await req.json()

    const updated = await prisma.subscription.update({
      where: { id },
      data: {
        name,
        price,
        category,
        cycle,
        nextPayment: nextPayment ? new Date(nextPayment) : undefined,
        notes,
      },
    })

    return apiResponse.ok(updated)
  } catch (error) {
    console.error("PUT /subscriptions/[id] error:", error)
    return apiResponse.serverError()
  }
}

// DELETE SUBSCRIPTION //
export async function DELETE(_: Request, { params }: Params) {
  try {
    const id = Number(params.id)

    if (isNaN(id)) {
      return apiResponse.badRequest("ID tidak valid")
    }

    await prisma.subscription.delete({
      where: { id },
    })

    return apiResponse.ok({
      message: "Subscription berhasil dihapus",
    })
  } catch (error) {
    console.error("DELETE /subscriptions/[id] error:", error)
    return apiResponse.serverError()
  }
}
