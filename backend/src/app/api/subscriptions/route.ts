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