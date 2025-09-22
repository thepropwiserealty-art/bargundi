import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const secret: string = process.env.JWT_SECRET || "secret";

export interface CustomJwtPayload extends JwtPayload {
  phone: string;
}

export function generateJwtToken(payload: CustomJwtPayload): string {
  const options: SignOptions = { expiresIn: "30d" };
  return jwt.sign(payload, secret, options);
}

export function verifyToken(token: string): CustomJwtPayload | null {
  try {
    return jwt.verify(token, secret) as CustomJwtPayload;
  } catch (error) {
    return null;
  }
}
