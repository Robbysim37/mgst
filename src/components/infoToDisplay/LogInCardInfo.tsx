import {Typography,TextField,Box,Button} from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import React, {useState} from "react"
import { useAppDispatch,useAppSelector } from "../../state/store"
import { toggleIsLoading } from "../../state/reducers/isLoadingSlice"
import { storeUserToState } from "../../state/reducers/userSlice"

const LogInCardInfo = () => {

  const [logIn,setLogIn] = useState({username:"",password:""})
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.isLoading)

  const logInChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLogIn({...logIn,[`${e.target.id}`]:e.target.value})
  }

  const logInClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleIsLoading(true))
    axios.post("http://localhost:8000/staffLogin",logIn)
    .then(promise => {
      dispatch(storeUserToState(promise.data))
      window.sessionStorage.setItem("token",promise.data.token)
      window.sessionStorage.setItem("user",promise.data.username)
      window.sessionStorage.setItem("type",promise.data.type)
      navigate("/staff")
    })
    .catch(err => {
      alert(`${err.response.data}`)
      dispatch(toggleIsLoading(false))
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
      <Button onClick={logInClickHandler} variant={"contained"}>Login</Button>
    </Box>
    )
}

export default LogInCardInfo