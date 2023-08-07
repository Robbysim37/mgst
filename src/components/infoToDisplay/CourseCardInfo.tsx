import { Box,Stack,Typography,IconButton } from "@mui/material"
import axios from "axios";
import { Course } from "../../typeScriptDataTypes"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from "../../state/store";
import { updateCourseCompletion } from "../../state/reducers/studentsSlice";
import { useParams } from "react-router";

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

    const dispatch = useAppDispatch()
    const {studentUsername} = useParams()

    const select = (e:React.MouseEvent<HTMLDivElement>) => {
        console.log("pain")
    }

    const courseClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const courseSelect = {
            username:studentUsername,
            yearIndex:props.yearIndex,
            trimesterIndex:props.triIndex,
            courseIndex:props.courseIndex
        }
        axios.put('http://localhost:8000/editCourseCompletion',courseSelect).then(response => {
            console.log(response.data)
            dispatch(updateCourseCompletion(response.data))
        })
    }

  return (
    <Box onClick={select} height={"100%"} width={"100%"}>
        <Stack sx={{height:"100%",justifyContent:"space-between"}}>
            <Typography sx={cardSubjectFont}>
                {props.course.name}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
                <Typography sx={cardInfoFont}>credit: {props.course.creditType}</Typography>
                {props.course.completed ?
                <IconButton onClick={courseClickHandler}><CheckCircleOutlineIcon color={"success"}/></IconButton> :
                <IconButton onClick={courseClickHandler}><HighlightOffIcon color={"error"}/></IconButton> }
            </Stack>
        </Stack>
    </Box>
  )
}

export default CourseCardInfo
