export async function verifyOtp(phone: string, otp: string, setErrors: React.Dispatch<React.SetStateAction<{
    phone: string;
    otp: string;
}>>): Promise<boolean> {

    const queryParams = new URLSearchParams({ phone, otp }).toString();

    try {
        const response = await fetch(`/api/auth/verify_otp?${queryParams}`);
        const responseData = await response.json();

        if (response.status !== 200) {
            throw new Error(responseData.error);
        }
        
        return true;
    } catch (error:any) {
        setErrors(prev => ({...prev, otp: error.message}));
        throw new Error(error.message);
    }

}