import { Outlet, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

const PrivateRoutes = () => {
    const [auth,setAuth] = useState(false)

    useEffect(() => {
        const sessionToken = window.sessionStorage.getItem("token")
        const sessionUser = window.sessionStorage.getItem("user")
        if(!sessionToken || !sessionUser){
            setAuth(false)
        }else{
            axios.post("http://localhost:8000/checkToken",{username:sessionUser,token:sessionToken})
            .then(promise => {
                console.log(promise.data)
                if(promise.data === true){
                    setAuth(true)
                }else if(promise.data === false){
                    setAuth(false)
                }
            })
        }
        
    },[])

    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes