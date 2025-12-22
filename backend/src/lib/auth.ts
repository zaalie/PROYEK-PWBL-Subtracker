import bcrypt from "bcryptjs";

// Hash password
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

// Cek password
export async function comparePassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}
