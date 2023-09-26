import { useEffect,useState } from "react"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import ReactDOM from "react-dom"
import InfoCard from "../infoDisplayers/InfoCard"

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

    return ReactDOM.createPortal(
    <Box sx={modalBG}>
      <InfoCard color="primary.light" display="flex" direction="column"
      justifyContent="center" alignItems="center">
        <Box height={"100%"} width={"100%"} display={"flex"} flexDirection={"column"}
        alignItems={"center"}>
            <Stack alignItems={"center"} width={"50%"} margin={"1rem"}>
                <Typography>New Password:</Typography>
                <TextField sx={{backgroundColor:"white",borderRadius:"5px"}}></TextField>
            </Stack>
            <Stack alignItems={"center"} width={"50%"} margin={"1rem"}>
                <Typography>Confirm New Password</Typography>
                <TextField sx={{backgroundColor:"white",borderRadius:"5px"}}></TextField>
            </Stack>
            <Button variant="contained" sx={{width:"20%"}}>Submit</Button>
        </Box>
      </InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}

export default ResetPasswordModal