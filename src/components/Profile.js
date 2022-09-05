import { useEffect } from 'react';

import { API_URL } from '../api';

export const Profile = () => {

    useEffect(()=> {
        const getUser = async () => {
                const response = await fetch(`${API_URL}/users/me`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ user: user })       
                })
                const data = await response.json()
                console.log(data)
        } 
        getUser();
    },[])
    
}


