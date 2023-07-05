import { Stack,Typography } from "@mui/material"
import { Student } from "../../typeScriptDataTypes"

interface Props {
    student:Student;
}

const cardSubjectFont = {
    fontFamily:"serif",
    fontSize:"1.5rem"
}

const cardInfoFont = {
    fontFamily:"serif",
    fontSize:"1rem",
    margin:".8rem"
}

const StudentCardInfo:React.FC<Props> = (props) => {
  return (
    <Stack sx={{height:"100%",justifyContent:"space-between"}}>
    <Typography sx={cardSubjectFont}>
        {`${props.student.firstName} ${props.student.lastName}`}
    </Typography>
    <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
        <Typography sx={cardInfoFont}>Grade: {props.student.grade}</Typography>
        <Typography sx={cardInfoFont}>{props.student.cohort}</Typography>
    </Stack>
</Stack>
  )
}

export default StudentCardInfo