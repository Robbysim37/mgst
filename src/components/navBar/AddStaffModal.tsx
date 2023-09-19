import { useEffect,useState } from "react"
import { Box } from "@mui/material"
import ReactDOM from "react-dom"
import InfoCard from "../infoDisplayers/InfoCard"
import AddStaffInfo from "../infoToDisplay/AddStaffInfo"
import LoadingWheel from "../styledComponents/LoadingWheel"

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

  const [isLoading,setIsLoading] = useState(false)

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
            {isLoading && <LoadingWheel position="static" height="100%" width="100%"/>}
            {!isLoading && <AddStaffInfo 
            setIsLoading={setIsLoading}
            setAddStaffModal={props.setAddStaffModal}/>}
        </InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}

export default AddStaffModal