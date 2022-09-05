import { useEffect } from 'react';

export const Auth = () => {
useEffect(() => {
     const getToken = async (formValues) => {
        const user = (formValues)
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user })       
        })
        const data = await response.json()
        console.log(data.data.token)
        const token = data.data.token;
        return token;
    } 
    getToken();
},[])

}
