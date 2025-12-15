import { prisma } from "@/lib/prisma"
import { ok, serverError } from "@/lib/response"

export async function GET() {
  try {
    const today = new Date()
    const next7Days = new Date()
    next7Days.setDate(today.getDate() + 7)

    const reminders = await prisma.subscription.findMany({
      where: {
        nextPayment: {
          gte: today,
          lte: next7Days,
        },
      },
      orderBy: { nextPayment: "asc" },
    })

    return ok(reminders)
  } catch {
    return serverError()
  }
}
