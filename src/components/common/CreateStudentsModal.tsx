import { Box,Typography } from "@mui/material"
import ReactDOM from "react-dom"
import InfoCard from "../styledComponents/InfoCard"

const modalBG = {
    position:"fixed",
    backgroundColor:"rgba(0,0,0,.7)",
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:100000,
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    textAlign:"center"
}

export default function CreateStudentsModal() {
  return ReactDOM.createPortal(
    <Box sx={modalBG}>
        <InfoCard></InfoCard>
        <Typography sx={{color:'white',fontSize:"2rem"}}>
            - Create student -<br/>
            or<br/>
            - upload student list -</Typography>
        <InfoCard></InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}
