import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useAppSelector } from "../../state/store"
import { Student } from "../../typeScriptDataTypes"
import StudentBasicInfo from "../styledComponents/StudentBasicInfo"
import ScheduleDisplay from "../styledComponents/ScheduleDisplay"
import { Stack } from "@mui/material"

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
      <div style={{height:"10%"}}></div>
        <Stack direction={"row"} sx={{height:"80%",width:"100%"}}>
          <StudentBasicInfo student={student}></StudentBasicInfo>
          <ScheduleDisplay schdeule={student?.schedule}></ScheduleDisplay>
        </Stack>
      <div style={{height:"10%"}}></div>
    </Stack>    
    </>
  )
}
