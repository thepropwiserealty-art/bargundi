export default async function signup(name: string, email: string, phone: string, token: string | null){

  if(!token){
    throw new Error("Recaptcha token empty");
  }
  const tokenRequestBody = {
    token
  };

  const tokenResponse = await fetch("/api/verify-captcha",{
    method: "POST",
    body: JSON.stringify(tokenRequestBody)
  });

  if(!tokenResponse.ok){
    throw new Error("Recaptcha error");
  }

  const data = {
    name,
    email,
    phone,
  };

  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  
  const responseData: {success?: string, error?: string} = await response.json();

  if(!response.ok){
    throw new Error(responseData.error);
  }  

}