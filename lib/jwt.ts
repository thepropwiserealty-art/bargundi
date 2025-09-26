import * as jose from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function generateJwtToken(payload:any): Promise<string> {
  const jwt = await new jose.SignJWT(payload)
  .setProtectedHeader({ alg: 'HS256' })  
  .setIssuedAt()                         
  .setExpirationTime('30d')
  .sign(secret);

  return jwt;
}

export async function verifyToken(token: string | null){
  
  if(!token){
    return null;
  }

  try {
   const { payload } = await jose.jwtVerify(token, secret);
   return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
