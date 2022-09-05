import { useState, } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Register } from './components';
import { Login } from './components';
import { Logout } from './components';
import { Posts } from './components';
import { Profile } from './components';
import { AddPosts } from './components';

const App = () => {
    const [posts, setPosts] = useState([]);

    const isLoggedIn = () => {
        return (
            <div> user is logged in </div>
        )
    }

    return (
        <div> 
            <h1> Welcome to Stranger's Things(get it?) </h1>
            <div> {isLoggedIn()} </div>
            <nav>
                <Link to='/register'> Register </Link>
                <Link to='/posts'> Posts </Link> 
                <Link to='/me'> Profile </Link>
                <Link to='/login'> Login </Link>
                <Link to='/'> Logout </Link>
                <Link to='/post'> Add Post</Link>
             </nav>
             <Routes>
                <Route path='/register' element={<Register />}> </Route>
                <Route path='/me' element={<Profile />}> </Route>
                <Route path='/posts' element={<Posts />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
                <Route path='/' element={<Logout />}> </Route>
                <Route path='/post' element={<AddPosts posts={posts} setPosts={setPosts} />}> </Route>
            </Routes>
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