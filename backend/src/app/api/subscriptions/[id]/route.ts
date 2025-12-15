import { prisma } from "@/lib/prisma"
import {
  ok,
  accepted,
  notFound,
  serverError,
} from "@/lib/response"

type Params = {
  params: { id: string }
}

export async function GET(_: Request, { params }: Params) {
  try {
    const id = Number(params.id)

    const data = await prisma.subscription.findUnique({
      where: { id },
    })

    if (!data) return notFound("Subscription tidak ditemukan")

    return ok(data)
  } catch {
    return serverError()
  }
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const id = Number(params.id)
    const body = await req.json()

    const updated = await prisma.subscription.update({
      where: { id },
      data: body,
    })

    return accepted(updated)
  } catch {
    return serverError()
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    const id = Number(params.id)

    await prisma.subscription.delete({
      where: { id },
    })

    return accepted({ message: "Subscription deleted" })
  } catch {
    return serverError()
  }
}
