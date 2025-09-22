
export async function sendOtp(phoneno: string, setErrors: React.Dispatch<React.SetStateAction<{
    phone: string;
    otp: string;
}>>) {
    const data: object = {
        phone: phoneno
    };
    try {
        const response = await fetch("/api/auth/send_otp", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(response.status == 200){
            return true;
        }
        else{
            const responseData = await response.json();
            throw new Error(responseData?.error);
        }
    } catch (error:any) {
        console.log(error);
        setErrors((prev) => ({...prev, phone: error.message}));
        return false;
    }
}