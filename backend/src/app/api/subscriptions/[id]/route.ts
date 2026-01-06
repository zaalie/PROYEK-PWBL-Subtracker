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

// UPDATE SUBSCRIPTION //
export async function PUT(req: Request, { params }: Params) {
  try {
    const body = await req.json()

    const subscription = await prisma.subscription.update({
      where: { id: Number(params.id) },
      data: body,
    })