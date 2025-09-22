export async function checkIfSubmitted(setSubmitted:React.Dispatch<React.SetStateAction<boolean>>){
    try {
        const response = await fetch("/api/auth/check_submitted");
        const responseData = await response.json();

        if(response.status === 200){
            setSubmitted(true);
        }
    } catch (error) {
        
    }
}