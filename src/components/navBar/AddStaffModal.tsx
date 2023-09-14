import { useEffect } from "react"
import { Box,Typography } from "@mui/material"
import ReactDOM from "react-dom"
import InfoCard from "../infoDisplayers/InfoCard"
import AddStaffInfo from "../infoToDisplay/AddStaffInfo"

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
  setAddStaffModal:Function
}

const AddStaffModal:React.FC<Props> = (props) => {

  useEffect(() => {
    const close = (e:KeyboardEvent) => {
      if(e.keyCode === 27){
        props.setAddStaffModal(false)
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  return ReactDOM.createPortal(
    <Box sx={modalBG}>
        <InfoCard>
            <AddStaffInfo setAddStaffModal={props.setAddStaffModal}/>
        </InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}

export default AddStaffModal