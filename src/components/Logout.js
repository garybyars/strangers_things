import { useEffect, useState } from "react"

export const Logout = () => {

    useEffect = (() => {

    const [token, setToken] = useState({});
    console.log(token)
    const clearToken = () => {
        setToken(null);
        } 
        clearToken();
        console.log(token)
    }, []);
}


