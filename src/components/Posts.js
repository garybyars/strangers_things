import { useState, useEffect } from 'react';

import { API_URL } from '../api';

export const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async() => {
            const response = await fetch(`${API_URL}/posts`);
            const result = await response.json();
            setAllPosts(result.data.posts);
            console.log(result.data.posts)
        }
        getAllPosts()
    },[])
    
    return (
        
        <div> 
            { allPosts.map((post, i) => {
                return (
                    <div key={i}>
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        <p>{post.messages}</p> 
                        {/* may not disply right */}
                    </div>
                )
            })}
        </div>
    )
}


