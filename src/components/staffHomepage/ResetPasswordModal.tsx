import { useEffect,useState } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import ReactDOM from "react-dom"
import InfoCard from "../infoDisplayers/InfoCard"
import { useAppDispatch } from "../../state/store"
import { removePasswordReset } from "../../state/reducers/userSlice"

const modalBG = {
    position:"fixed",
    backgroundColor:"rgba(0,0,0,.7)",
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:1250,
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    textAlign:"center"
}

const ResetPasswordModal = () => {

    const dispatch = useAppDispatch()
    const [passwordComparison,setPasswordComparison] = useState({
        newPassword:"",
        confirmNewPassword:""
    })

    const passwordInputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPasswordComparison({...passwordComparison,[`${e.target.id}`]:e.target.value})
    }

    const validPassword = () => {
        if(passwordComparison.newPassword && passwordComparison.confirmNewPassword){
            if(passwordComparison.newPassword === passwordComparison.confirmNewPassword){
                return false
            }else{
                return true
            }
        }else{
            return true
        }
    }

    const submitPasswordClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        const username = window.sessionStorage.getItem("user")
        const token = window.sessionStorage.getItem("token")
        axios.put("http://localhost:8000/changeStaffPassword",
        {data:passwordComparison.newPassword,username,token})
        .then(response => {
            alert("Password Changed Successfully ")
            dispatch(removePasswordReset(false))
        })
        .catch(err => {
            alert("An error has occurred")
            console.log(err)
        })
    }

    return ReactDOM.createPortal(
    <Box sx={modalBG}>
      <InfoCard color="primary.light" display="flex" direction="column"
      justifyContent="center" alignItems="center">
        <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"}
        alignItems={"center"}>
            <Stack alignItems={"center"} width={"50%"} margin={"1rem"}>

                <Typography>New Password</Typography>

                <TextField value={passwordComparison.newPassword} type="password"
                id={"newPassword"} onChange={passwordInputChangeHandler}
                sx={{backgroundColor:"white",borderRadius:"5px"}}></TextField>

            </Stack>
            <Stack alignItems={"center"} width={"50%"} margin={"1rem"}>

                <Typography>Confirm New Password</Typography>

                <TextField value={passwordComparison.confirmNewPassword} type="password"
                id={"confirmNewPassword"} onChange={passwordInputChangeHandler}
                sx={{backgroundColor:"white",borderRadius:"5px"}}></TextField>

            </Stack>
            <Button variant="contained" disabled={validPassword()} sx={{width:"20%"}}
            onClick={submitPasswordClickHandler}>Submit</Button>
        </Box>
      </InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}

export default ResetPasswordModal