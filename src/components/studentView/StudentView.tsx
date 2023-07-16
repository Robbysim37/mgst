import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { useAppSelector } from "../../state/store"
import { Student } from "../../typeScriptDataTypes"
import StudentBasicInfo from "../infoToDisplay/StudentBasicInfo"
import ScheduleDisplay from "./scheduleDisplay/ScheduleDisplay"
import { Stack,Box,Button } from "@mui/material"
import InfoCard from "../infoDisplayers/InfoCard"

export default function StudentView() {

  const students = useAppSelector(state => state.students.students)
  const {studentUsername} = useParams()
  const [student,setStudent] = useState<Student>()
  const [currentView,setCurrentView] = useState("details")

  useEffect(() => {
    if(students){
      const pageStudent = students.filter(currStudent => {
        return currStudent.username === studentUsername
      })
      setStudent(pageStudent[0])
    }
  },[studentUsername,students])

  const viewChangeHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    setCurrentView(e.currentTarget.id)
  }

  return (
    <>
    <Stack sx={{height:"100%",width:"100%"}}>
      <Box sx={{height:"10%"}}>
        <Button onClick={viewChangeHandler} id="details">Details</Button>
        <Button onClick={viewChangeHandler} id="schedule">Schedule</Button>
      </Box>
        <Stack direction={"row"} display={"flex"} justifyContent={"center"} sx={{height:"80%",width:"100%"}}>
          { currentView === "details" && 
          <InfoCard height="90%" width="50%" student={student}>
            {student && <StudentBasicInfo student={student}/>}
          </InfoCard>}
          { currentView === "schedule" && student && <ScheduleDisplay schdeule={student.schedule}></ScheduleDisplay>}
        </Stack>
    </Stack>
    </>
  )
}
