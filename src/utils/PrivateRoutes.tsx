import { Outlet, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

const PrivateRoutes = () => {
    const [auth,setAuth] = useState(true)

    // useEffect(() => {
    //     const sessionToken = window.sessionStorage.getItem("token")
    //     const sessionUser = window.sessionStorage.getItem("user")
    //     if(!sessionToken || !sessionUser){
    //         setAuth(false)
    //     }else{
    //         axios.post("http://localhost:3000/checkToken",{username:sessionUser,token:sessionToken})
    //         .then(promise => {
    //             // if promise.data
    //         })
    //     }
    // },[])

    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes