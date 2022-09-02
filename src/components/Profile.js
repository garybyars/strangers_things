import { useEffect } from 'react';

import { API_URL } from '../api';

export const Profile = () => {

    useEffect(()=> {
        const getUser = async (formValues) => {
            const user = (formValues)
                const response = await fetch(`${API_URL}/users/me`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: user })       
                })
                const data = await response.json()
                console.log(data)
            } 
            getUser();
    }, [])
    
}


