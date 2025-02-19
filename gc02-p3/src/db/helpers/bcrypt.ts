import bcrypt from "bcryptjs";

export function hashPass(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export function comparePass(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
