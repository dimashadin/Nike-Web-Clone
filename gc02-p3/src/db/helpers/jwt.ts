import jwt from "jsonwebtoken";
import * as jose from "jose"

const SECRET= process.env.JWT_SECRET as string

export function signToken(payload: {_id:string}) {
  return jwt.sign(payload, SECRET);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}

export const verifyWithJose = async <T> (token: string)=>{
  const secret = new TextEncoder().encode(SECRET)
  const {payload} = await jose.jwtVerify<T>(token, secret)
  return payload
}
