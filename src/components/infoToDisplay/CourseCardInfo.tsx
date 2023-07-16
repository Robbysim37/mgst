import { Box,Stack,Typography } from "@mui/material"
import { Course } from "../../typeScriptDataTypes"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Props {
    course: Course;
    yearIndex: number;
    triIndex: number;
    courseIndex: number;
}

const cardSubjectFont = {
    fontFamily:"serif",
    fontSize:"1rem"
}

const cardInfoFont = {
    fontFamily:"serif",
    fontSize:"1rem",
    margin:".8rem"
}

const CourseCardInfo:React.FC<Props> = (props) => {

    const courseClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        console.log(props.yearIndex)
        console.log(props.triIndex)
        console.log(props.courseIndex)
    }

  return (
    <Box onClick={courseClickHandler} height={"100%"} width={"100%"}>
        <Stack sx={{height:"100%",justifyContent:"space-between"}}>
            <Typography sx={cardSubjectFont}>
                {props.course.name}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                <Typography sx={cardInfoFont}>credit: {props.course.creditType}</Typography>
                {props.course.completed && <CheckCircleOutlineIcon color={"success"}/>}
            </Stack>
        </Stack>
    </Box>
  )
}

export default CourseCardInfo
