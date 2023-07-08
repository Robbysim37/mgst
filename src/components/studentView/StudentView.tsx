import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useAppSelector } from "../../state/store"
import { Student } from "../../typeScriptDataTypes"
import StudentBasicInfo from "../styledComponents/StudentBasicInfo"
import ScheduleDisplay from "./scheduleDisplay/ScheduleDisplay"
import { Stack,Tabs,Tab,Box,} from "@mui/material"

export default function StudentView() {

  const students = useAppSelector(state => state.students.students)
  const {studentUsername} = useParams()
  const [student,setStudent] = useState<Student>()

  useEffect(() => {
    const pageStudent = students.filter(currStudent => {
      return currStudent.username === studentUsername
    })
    setStudent(pageStudent[0])
  },[studentUsername,students])

  return (
    <>
    <Stack sx={{height:"100%",width:"100%"}}>
      <Box height={"10%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{backgroundColor:"rgba(0,0,0,.5)"}}>
        <Tabs>
          <Tab sx={{color:"white"}} label="Details"/>
          <Tab sx={{color:"white"}} label="Schedule"/>
        </Tabs>
      </Box>
          {/* // <StudentBasicInfo student={student}></StudentBasicInfo>}
          // <ScheduleDisplay schdeule={student?.schedule}></ScheduleDisplay>} */}
      <Box height={"10%"}></Box>
    </Stack>    
    </>
  )
}
