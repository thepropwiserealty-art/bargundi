import argon2 from "argon2";

export default async function hashOtp(otp:string){
    const hash = await argon2.hash(otp);
    return hash;
}