import { Box,Stack,Typography,IconButton } from "@mui/material"
import {useState} from "react"
import { Course } from "../../typeScriptDataTypes"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useAppDispatch } from "../../state/store";
import { updateCourseCompletion,swapCourses } from "../../state/reducers/studentsSlice";
import { useParams } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import CourseNotesModal from "../studentView/scheduleDisplay/CourseNotesModal";

interface Props {
    course: Course;
    yearIndex: number;
    triIndex: number;
    courseIndex: number;
    selectedCourse: string;
    setSelectedCourse: Function;
}

const CourseCardInfo:React.FC<Props> = (props) => {

    const dispatch = useAppDispatch()
    const {studentUsername} = useParams()
    const [indexCode] = useState(
            props.yearIndex.toString() +
            props.triIndex.toString() +
            props.courseIndex.toString()
    )
    const [showNotes,setShowNotes] = useState(false)

    const select = (e:React.MouseEvent<HTMLDivElement>) => {

        if(props.selectedCourse && studentUsername){
            dispatch(swapCourses({
                username:studentUsername,
                course1:props.selectedCourse,
                course2:indexCode
            }))
            props.setSelectedCourse("")
        }else{
            props.setSelectedCourse(indexCode)
        }
    }

    const courseClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const courseSelect = {
            username:studentUsername,
            yearIndex:props.yearIndex,
            trimesterIndex:props.triIndex,
            courseIndex:props.courseIndex
        }
        dispatch(updateCourseCompletion(courseSelect))
    }

    const addNotesClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setShowNotes(true)
    }

  return (
    <>

    {showNotes && <CourseNotesModal 
    setShowNotes={setShowNotes} 
    notes={props.course.notes}
    yearIndex={props.yearIndex}
    triIndex={props.triIndex}
    courseIndex={props.courseIndex}/>}

    <Box onClick={select} height={"100%"} width={"100%"} 
    bgcolor={indexCode === props.selectedCourse ? "success.light" : "white"}
    display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Stack height={"40%"} width={"90%"} alignItems={"center"} direction={"row"}
        justifyContent={"space-between"}>
            <Typography fontSize={".75rem"}>{props.course.name}</Typography>
            <IconButton onClick={addNotesClickHandler}>
                <EditIcon fontSize="small"></EditIcon>
            </IconButton>
        </Stack>
        <Stack height={"40%"} width={"90%"} alignItems={"center"} 
        direction={"row"} justifyContent={"space-between"}>
            <Typography fontSize={".75rem"}>credit: {props.course.creditType}</Typography>
            {props.course.completed ?
                <IconButton onClick={courseClickHandler}><CheckCircleOutlineIcon fontSize="small" color="success"/></IconButton> :
                <IconButton onClick={courseClickHandler}><HighlightOffIcon fontSize="small" color="error"/></IconButton>}
        </Stack>
    </Box></>
  )
}

export default CourseCardInfo
