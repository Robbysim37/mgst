import {useEffect} from "react"
import {Box} from "@mui/material"
import InfoCard from "../../infoDisplayers/InfoCard"
import CourseNotesInfo from "../../infoToDisplay/CourseNotesInfo"

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
    setShowNotes:Function,
    notes:string,
    yearIndex: number;
    triIndex: number;
    courseIndex: number;
}

const CourseNotesModal:React.FC<Props> = (props) => {

    useEffect(() => {
        const close = (e:KeyboardEvent) => {
          if(e.keyCode === 27){
            props.setShowNotes(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
      },[])

  return (
    <Box sx={modalBG}>
        <InfoCard height="50%" width="50%" display="flex" 
        justifyContent="center" alignItems="center">
            <CourseNotesInfo notes={props.notes}
            yearIndex={props.yearIndex}
            triIndex={props.triIndex}
            courseIndex={props.courseIndex}/>
        </InfoCard>
    </Box>
  )
}

export default CourseNotesModal