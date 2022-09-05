import { useState, useEffect } from 'react';

import { API_URL } from '../api';

export const Register = () => {
    const initialFormValues = {username: '', password: '', confirmpassword: ''};
    const [formValues, setFormValues] = useState(initialFormValues);
    const [isSubmit, setIsSubmit] = useState(false);

    const newUser = async (formValues) => {
        const user = (formValues)
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({ user: user })       
        })
        const data = await response.json()
        console.log(data)
    } 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({...formValues,[name]: value });
        console.log(formValues)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true);
        newUser(formValues);
    }

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
                <input 
                    type='text' 
                    name='confirmpassword' 
                    placeholder='confirm password' 
                    minLength={5}
                    required 
                    value={formValues.confirmpassword}
                    onChange={handleChange}
                />
                <input type='submit' value='SUBMIT' />
            </form>
    );
};