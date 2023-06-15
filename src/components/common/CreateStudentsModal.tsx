import { Box } from "@mui/material"
import ReactDOM from "react-dom"

const modalBG = {
    position:"fixed",
    backgroundColor:"rgba(0,0,0,.7)",
    top:0,
    left:0,
    bottom:0,
    right:0,
    zIndex:100000
}

export default function CreateStudentsModal() {
  return ReactDOM.createPortal(
    <Box sx={modalBG}>

    </Box>,
    document.getElementById("portal")!
  )
}
