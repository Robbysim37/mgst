import { useEffect,useState } from "react"
import { Box } from "@mui/material"
import axios from "axios"
import ReactDOM from "react-dom"
import InfoCard from "../infoDisplayers/InfoCard"
import GetStaffList from "../infoToDisplay/GetStaffList"
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
  setRemoveStaffModal:Function
}

const RemoveStaffModal:React.FC<Props> = (props) => {

  const [isLoading,setIsLoading] = useState(false)
  const [staff,setStaff] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const username = window.sessionStorage.getItem("user")
    const token = window.sessionStorage.getItem("token")
    axios.post("http://mgst-backend.vercel.app/getStaff",{username,token})
    .then(response => {
      setIsLoading(false)
      setStaff(response.data)
    })
    .catch(err => {
      setIsLoading(false)
      console.log(err)
    })
  },[])

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
      <InfoCard color="primary.light" display="flex" 
      justifyContent="center" alignItems="center">
        {isLoading && <LoadingWheel position="static" height="100%" width="100%"/>}
        {!isLoading && <GetStaffList staff={staff} 
        setRemoveStaffModal={props.setRemoveStaffModal} setIsLoading={setIsLoading}/>}
      </InfoCard>
    </Box>,
    document.getElementById("portal")!
  )
}

export default RemoveStaffModal