import {Box,Typography} from "@mui/material"
import { Student } from "../../typeScriptDataTypes"

interface Props {
    children?: React.ReactNode
    student?: Student
}

const basicInfoStyles = {
    backgroundColor:"white",
    height:"100%",
    width:"20%",
    borderRadius:"2rem",
    marginLeft:"1rem",
    marginRight:"1rem"
}

const studentInfoFont = {
    fontFamily:"serif",
    fontSize:"2rem"
}

const StudentBasicInfo:React.FC<Props> = (props) => {
  return (
    <Box sx={basicInfoStyles}>
        <Typography sx={studentInfoFont}>{props.student?.firstName}</Typography>
        <Typography sx={studentInfoFont}>{props.student?.lastName}</Typography>
        <Typography sx={studentInfoFont}>Grade: {props.student?.grade}</Typography>
        <Typography sx={studentInfoFont}>Cohort: {props.student?.cohort}</Typography>
    </Box>
  )
}

export default StudentBasicInfo
