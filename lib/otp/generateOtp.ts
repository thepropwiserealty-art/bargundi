import otpGenerator from "otp-generator";

export default function generateOtp(): string {
    const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
    return otp;
}