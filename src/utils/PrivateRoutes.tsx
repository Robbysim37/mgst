import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

const PrivateRoutes = () => {
    const [auth,setAuth] = useState(sessionStorage.getItem("userName"))

    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes