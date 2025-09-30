export async function checkIfSubmitted(setSubmitted:React.Dispatch<React.SetStateAction<boolean>>){
    try {
        const response = await fetch("/api/auth/check_submitted");
        
        if(response.status === 200){
            setSubmitted(true);
        }
    } catch (error) {
        console.log(error);
    }
}