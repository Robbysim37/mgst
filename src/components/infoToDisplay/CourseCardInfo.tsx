import { Stack,Typography } from "@mui/material"
import { Course } from "../../typeScriptDataTypes"

interface Props {
    course: Course;
}

const cardSubjectFont = {
    fontFamily:"serif",
    fontSize:"1.2rem"
}

const cardInfoFont = {
    fontFamily:"serif",
    fontSize:"1rem",
    margin:".8rem"
}

const CourseCardInfo:React.FC<Props> = (props) => {
  return (
    <Stack sx={{height:"100%",justifyContent:"space-between"}}>
        <Typography sx={cardSubjectFont}>
            {props.course.name}
        </Typography>
        <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
            <Typography sx={cardInfoFont}>credit: {props.course.creditType}</Typography>
        </Stack>
    </Stack>
  )
}

export default CourseCardInfo
