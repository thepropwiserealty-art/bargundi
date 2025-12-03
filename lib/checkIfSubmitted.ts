export async function checkIfSubmitted(setSubmitted:React.Dispatch<React.SetStateAction<boolean>>){
    try {
        const response = await fetch("/api/auth/check_submitted");
        
        if(response.status === 200){
            setSubmitted(true);
        }
        else{
            throw new Error("not authenticated");
        }
    } catch (error) {
        // console.log(error);
        // throw error;
    }
}