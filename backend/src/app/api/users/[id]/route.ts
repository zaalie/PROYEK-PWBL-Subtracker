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

  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true },
  });

  if (!user) return apiResponse.notFound();

  return apiResponse.ok(user);
}