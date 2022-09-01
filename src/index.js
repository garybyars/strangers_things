import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { API_URL } from './api';
import { Register } from './components';
import { Login } from './components';


const App = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const getData = async() => {
            await getAllPosts();
            await Register();
            await Login ();
        }
        getData();
    }, []);

    const getAllPosts = async() => {
        const response = await fetch(`${API_URL}/posts`);
        const result = await response.json();
        setAllPosts(result.data.posts);
        console.log(result.data.posts)
    }

    return (
        <div id='App'> 
            <h1> Stranger's Things </h1>
            <nav> 
                {/* <span onClick={Register}> Register </span>
                <span> Profile </span>
                <span> Posts </span>
                <span onClick={Login}> Login </span>
                <span> Logout </span> */}
                <Link to='./register'> Register </Link>
                <Link to='./login'> Login </Link>
             </nav>
             <Routes>
                <Route path='/register' element={<Register />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
            </Routes>
            <div>
            {
            allPosts.map((post, i) => {
               return (
                <ul key={i}>
                    <li>{post.title}</li>
                    <li>{post.description}</li>
                    <li>{post.price}</li>
                    <li>{post.messages}</li>
               </ul>
               )
            })
        }
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render (
<BrowserRouter>
    <App />
</BrowserRouter> 
);