import { useState, useEffect } from 'react';

import { API_URL } from '../api';

export const Login = () => {

    const initialFormValues = {username: '', password: '', confirmpassword: ''};
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const getUser = async (formValues) => {
        const user = (formValues)
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
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
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        getUser(formValues);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    },[formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "username is required";
        } else if (values.username.length < 5) {
            errors.username = "username must be at least 5 characters";
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 5) {
            errors.password = "password must be at least 5 characters";
        }
    }
        return (
        <div>
            {Object.keys(formErrors).length === 0 && isSubmit 
            ? 
            (<div className='sign-in-success'> Signed in Successfully </div>)
            :
            (<div className='sign-in-prompt'> Please, Sign in </div>)
            }
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                    value={formValues.username}
                    onChange={handleChange}
                    />
                    <div> {formErrors.username} </div>
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password' 
                    value={formValues.password}
                    onChange={handleChange}
                    />
                    <div> {formErrors.password} </div>
                <input type='submit' value='SUBMIT' />
            </form>
        </div>
        )
}