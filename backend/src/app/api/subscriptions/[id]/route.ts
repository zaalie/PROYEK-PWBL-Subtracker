import { prisma } from "@/lib/prisma"
import { apiResponse } from "@/lib/response"

type Params = { params: { id: string } }

// GET SUBSCRIPTION BY ID //
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
    return apiResponse.serverError()
  }
}