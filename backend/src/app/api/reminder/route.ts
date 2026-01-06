import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";

export async function GET() {
  try {
    const today = new Date();
    const reminders = await prisma.subscription.findMany({
      where: {
        nextPayment: {
          lte: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
        },
        isActive: true,
      },
    });