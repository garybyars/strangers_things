import { useState } from "react"

import { API_URL } from "../api";

export const AddPosts = ({posts, setPosts}) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true);

        const addNewPost = async () => {
            const response = await fetch(`${API_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer data.token`
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                })
            });
            const data = await response.json();
            const token = data.token
            setPosts([data, ...posts]);
            setTitle(''),
            setDescription('')
            setPrice('')
        }
        addNewPost();
    }
        
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <h3>Add Post</h3>
                <input 
                type='text' 
                placeholder='title' 
                onChange={(event) => setTitle(event.target.value)}> 
                </input>
                <input 
                type='text' 
                placeholder='description' 
                onChange={(event) => setDescription(event.target.value)}> 
                </input>
                <input 
                type='text' 
                placeholder='price' 
                onChange={(event) => setPrice(event.target.value)}> 
                </input>
                <button type='submit'> SUBMIT </button>
            </form>

        </div>
    )    
}