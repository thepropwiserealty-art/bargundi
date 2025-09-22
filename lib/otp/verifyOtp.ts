import cache from "../cache";
import argon2 from "argon2";

interface verifyOtpResult {
    pass: boolean,
    message: string
}

export default async function verifyOtp(phone: string, otp: string): Promise<verifyOtpResult> {
    try {
        const hash: string | undefined = cache.get(`otp:${phone}`);
        console.log(cache.keys());

        if (!hash) {
            throw new Error("otp expired");
        }

        const isValid = await argon2.verify(hash, otp);

        if (!isValid) {
            throw new Error("otp doesn't matches");
        }

        const result = {
            pass: true,
            message: "success"
        };

        return result;
    } catch (error: any) {
        const result = {
            pass: false,
            message: error?.message || "something went wrong"
        };
        return result;
    }
}