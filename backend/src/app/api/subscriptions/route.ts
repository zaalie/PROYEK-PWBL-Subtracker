import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const subscription = await prisma.subscription.create({
      data,
    });

    return apiResponse.created(subscription);
  } catch {
    return apiResponse.serverError();
  }
}

export async function GET() {
  try {
    const data = await prisma.subscription.findMany();
    return apiResponse.ok(data);
  } catch {
    return apiResponse.serverError();
  }
}