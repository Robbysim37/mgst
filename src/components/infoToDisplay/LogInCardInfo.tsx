import {Typography,TextField,Box,Button} from "@mui/material"
import axios from "axios"
import React, {useState} from "react"


const LogInCardInfo = () => {

  const [logIn,setLogIn] = useState({username:"",password:""})

  const logInChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLogIn({...logIn,[`${e.target.id}`]:e.target.value})
  }

  const logInClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    axios.post("http://localhost:3000/staffLogin",logIn)
    .then(promise => {
    //  {window.sessionStorage.setItem("user",promise)}
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Box height={"80%"} display={"flex"} justifyContent={"space-around"}
    flexDirection={"column"} alignItems={"center"}>

      <Typography fontSize={"2rem"} fontFamily={"serif"}> Staff Login</Typography>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}
      height={"50%"} width={"100%"}>

        <TextField value={logIn.username} id={"username"} onChange={logInChangeHandler}
        label={"Username"} sx={{margin:"1rem"}}/>

        <TextField type="password" value={logIn.password} id={"password"} onChange={logInChangeHandler}
        label={"Password"}/>

      </Box>
      <Button variant={"contained"}>Login</Button>
    </Box>
  )
}

export default LogInCardInfo