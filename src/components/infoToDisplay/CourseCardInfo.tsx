import { Box,Stack,Typography,IconButton } from "@mui/material"
import {useState} from "react"
import axios from "axios";
import { Course } from "../../typeScriptDataTypes"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from "../../state/store";
import { updateCourseCompletion,swapCourses } from "../../state/reducers/studentsSlice";
import { useParams } from "react-router";

interface Props {
    course: Course;
    yearIndex: number;
    triIndex: number;
    courseIndex: number;
    selectedCourse: string;
    setSelectedCourse: Function;
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
    const [indexCode] = useState(
            props.yearIndex.toString() +
            props.triIndex.toString() +
            props.courseIndex.toString()
    )

    const select = (e:React.MouseEvent<HTMLDivElement>) => {

        if(props.selectedCourse && studentUsername){
            dispatch(swapCourses({
                username:studentUsername,
                course1:props.selectedCourse,
                course2:indexCode
            }))
            props.setSelectedCourse("")
        }else{
            console.log(indexCode)
            props.setSelectedCourse(indexCode)
        }
    }

    const courseClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {

        const token = window.sessionStorage.getItem("token")
        const username = window.sessionStorage.getItem("user")
        e.stopPropagation()
        const courseSelect = {
            username:studentUsername,
            yearIndex:props.yearIndex,
            trimesterIndex:props.triIndex,
            courseIndex:props.courseIndex
        }
        axios.put('http://localhost:8000/editCourseCompletion',{data:courseSelect,token,username}).then(response => {
            console.log(response.data)
            dispatch(updateCourseCompletion(response.data))
        })
    }

  return (
    <Box onClick={select} height={"100%"} width={"100%"} 
    bgcolor={indexCode === props.selectedCourse ? "success.light" : "white"}>
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
