import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { API_URL } from './api';
import { Register } from './components';
import { Login } from './components';
import { Posts } from './components';
import { Profile } from './components';


const App = () => {

    return (
        <div> 
            <h1> Welcome to Stranger's Things(get it?) </h1>
            
            <nav> 
                <Link to='/me'> Profile </Link>
                <Link to='/'> Posts </Link> 
                <Link to='/register'> Register </Link>
                <Link to='/login'> Login </Link>
                <span> Logout </span> 
             </nav>
             <Routes>
                <Route path='/me' element={<Profile />}> </Route>
                <Route path='/register' element={<Register />}> </Route>
                <Route path='/' element={<Posts />}> </Route>
                <Route path='/login' element={<Login />}> </Route>
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