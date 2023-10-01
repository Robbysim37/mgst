import { Outlet, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

const PrivateRoutes = () => {

    const navigate = useNavigate()

    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        const sessionToken = window.sessionStorage.getItem("token")
        const sessionUser = window.sessionStorage.getItem("user")
        if(!sessionToken || !sessionUser){
            navigate("/")
            setIsAuth(false)
        }else{
            axios.post("https://mgst-backend.vercel.app/checkToken",{username:sessionUser,token:sessionToken})
            .then(promise => {
                if(promise.data === true){
                    setIsAuth(true)
                }else if(promise.data === false){
                    setIsAuth(false)
                    navigate("/")
                }
            })
        }
    },[])

    return(
        isAuth ? <Outlet/> : <div/>
    )
}

export default PrivateRoutes