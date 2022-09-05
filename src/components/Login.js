import { useState } from 'react';

import { API_URL } from '../api';

export const Login = () => {
    const [formValues, setFormValues] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
            event.preventDefault();
            setIsSubmit(true);
            
        const getUser = async (token) => {
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    user: {
                        username: `${formValues.username}`,
                        password: `${formValues.password}`,
                    }
                })
            }) 
            const data = await response.json()
            console.log(data)
            setFormValues('');
        }
        getUser(formValues);
        }
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormValues({...formValues,[name]: value });
            console.log(formValues)
    };
        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                    minLength={5}
                    required
                    value={formValues.username}
                    onChange={handleChange}
                    />
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password' 
                    minLength={5}
                    required
                    value={formValues.password}
                    onChange={handleChange}
                    />
                <input type='submit' value='SUBMIT' />
            </form>
        )
}
