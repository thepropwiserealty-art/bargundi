export default async function signup(name: string, email: string, phone: string){

  const data = {
    name,
    email,
    phone
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