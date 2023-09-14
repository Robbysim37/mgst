import { useEffect } from "react"
import { Box,Typography } from "@mui/material"
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

interface Props {
  setRemoveStaffModal:Function
}

const RemoveStaffModal:React.FC<Props> = (props) => {

  useEffect(() => {
    const close = (e:KeyboardEvent) => {
      if(e.keyCode === 27){
        props.setRemoveStaffModal(false)
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  return ReactDOM.createPortal(
    <Box sx={modalBG}>
    </Box>,
    document.getElementById("portal")!
  )
}

export default RemoveStaffModal