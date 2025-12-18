import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/response";
import { comparePassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return error("User not found", 404);

  const isValid = await comparePassword(password, user.password);
  if (!isValid) return error("Wrong password", 401);

  return success({
    id: user.id,
    name: user.name,
    email: user.email,
  });
}
