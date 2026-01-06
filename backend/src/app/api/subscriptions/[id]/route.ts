import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return apiResponse.badRequest("ID tidak valid");
  }

  const subscription = await prisma.subscription.findUnique({
    where: { id },
  });
  
  if (!subscription) {
    return apiResponse.notFound("Subscription tidak ditemukan");
  }

  return apiResponse.ok(subscription);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return apiResponse.badRequest("ID tidak valid");
  }

  try {
    const data = await req.json();

    const updated = await prisma.subscription.update({
      where: { id },
      data,
    });

    return apiResponse.ok(updated);
  } catch {
    return apiResponse.serverError();
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return apiResponse.badRequest("ID tidak valid");
  }

  try {
    await prisma.subscription.delete({
      where: { id },
    });

