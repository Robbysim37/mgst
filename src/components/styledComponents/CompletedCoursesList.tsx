import {Stack,Typography,TextField,Box,MenuItem} from "@mui/material"
import {useState} from "react"

const coursesArr = [
    "ALG-1A",
    "FRE-A",
    "WH-A",
    "ALG-1B",
    "FRE-B",
    "BIO-A",
    "WH-B",
    "BIO-B",
    "ECON",
    "GEOM-1A",
    "SOE-A",
    "LANG-A",
    "GEOM-1B",
    "SOE-B",
    "LANG-B",
    "GOV",
    "CHEM/PHYS-A",
    "HEALTH",
    "ALG-2A",
    "JUE-A",
    "ART-A",
    "ALG-2B",
    "JUE-A",
    "CHEM/PHYS-B",
    "AMH-A",
    "SCI-A",
    "ART-B",
    "MATH-A",
    "SE-A",
    "AMH-B",
    "MATH-B",
    "SE-B",
    "LANG/ART-2A",
    "PHYSED",
    "SCI-B",
    "LANG/ART-2B",
]

interface Props {
    height?:string,
    width?:string,
    completedCourses:Array<string>,
    setCompletedCourses:Function
}

const CompletedCoursesList:React.FC<Props> = (props) => {

    const [coursesList,setCourseList] = useState(coursesArr)
    

    const courseChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const selectedIndex = parseInt(e.target.value)
        const item = coursesList.slice(selectedIndex,selectedIndex + 1)[0]
        const newCompletedCourses = [...props.completedCourses]
        newCompletedCourses.push(item)
        props.setCompletedCourses(newCompletedCourses)
    }

  return (
    <Stack 
    height={props.height || "100%"}
    width={props.width || "100%"}
    alignItems={"center"}
    >
        <Typography>Test</Typography>
        <Box height={"40%"} width={"60%"}></Box>
        <TextField select value={-1} onChange={courseChangeHandler}>
            <MenuItem value={-1}>Courses</MenuItem>
            {coursesList.map((currCourse,i) => {
                return <MenuItem 
                key={Math.random()}
                value={i}>
                    {currCourse}
                </MenuItem>
            })}
        </TextField>
    </Stack>
  )
}

export default CompletedCoursesList