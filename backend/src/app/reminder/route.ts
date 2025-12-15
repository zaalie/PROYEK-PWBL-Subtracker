import { prisma } from "@/lib/prisma"
import { success } from "@/lib/response"

export async function GET() {
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
    orderBy: {
      nextPayment: "asc",
    },
  })

  return success(reminders)
}
