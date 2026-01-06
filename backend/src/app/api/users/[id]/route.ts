import { prisma } from "@/lib/prisma";
import { apiResponse } from "@/lib/response";


export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id); 