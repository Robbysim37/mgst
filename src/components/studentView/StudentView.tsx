import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useAppSelector } from "../../state/store"
import { Student } from "../../typeScriptDataTypes"
import StudentBasicInfo from "../styledComponents/StudentBasicInfo"
import ScheduleDisplay from "./scheduleDisplay/ScheduleDisplay"
import { Stack,Tab,Box,} from "@mui/material"
import {TabPanel,TabContext,TabList} from "@mui/lab"

export default function StudentView() {

  const students = useAppSelector(state => state.students.students)
  const {studentUsername} = useParams()
  const [student,setStudent] = useState<Student>()
  const [tabValue,setTabValue] = useState("1")

  useEffect(() => {
    const pageStudent = students.filter(currStudent => {
      return currStudent.username === studentUsername
    })
    setStudent(pageStudent[0])
  },[studentUsername,students])

  const tabChangeHandler = (e:React.SyntheticEvent, newTab:string) => {
    setTabValue(newTab)
  }

  return (
    <>
        <Box height={"10vh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{backgroundColor:"rgba(0,0,0,.5)"}}>
        </Box>
        <Box><StudentBasicInfo student={student}/></Box>
        <Box><ScheduleDisplay schedule={student?.schedule}/></Box>
    </>
  )
}
