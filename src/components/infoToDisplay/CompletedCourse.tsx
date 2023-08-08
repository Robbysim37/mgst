import { Typography,Box,IconButton,Stack } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


interface Props {
    children:React.ReactNode
    completedCourses:Array<string>
    setCompletedCourses:Function
    code: string
}

const CompletedCourse:React.FC<Props> = (props) => {

    const removeCourseClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        const newCompletedCourses = props.completedCourses.filter(currCourse => {
            if(currCourse === props.code){
                return 
            }
            return true
        })
        props.setCompletedCourses(newCompletedCourses)
    }

  return (
    <Stack direction={"row"}>
        <Box width={"20%"}></Box>
        <Typography alignSelf={"center"} width={"60%"}>{props.children}</Typography>
        <Box width={"20%"}>
        <IconButton onClick={removeCourseClickHandler}>
            <HighlightOffIcon></HighlightOffIcon>
        </IconButton>
        </Box>
    </Stack>
  )
}

export default CompletedCourse