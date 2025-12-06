type authResponseBody = {
    error?: string,
    success: boolean
};

export async function checkIfSubmitted(setSubmitted:React.Dispatch<React.SetStateAction<boolean>>){
    try {
        const response = await fetch("/api/auth/check_submitted");

        const responseBody:authResponseBody = await response.json();

        if(response.ok && responseBody.success){
            setSubmitted(true);
        }
        else{
            throw new Error("not authenticated");
        }
    } catch (error) {
        // console.log(error);
        throw error;
    }
}