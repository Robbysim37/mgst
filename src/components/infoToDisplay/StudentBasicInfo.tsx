import {Typography,Stack,TextField,Box,Button} from "@mui/material"
import { Student } from "../../typeScriptDataTypes"
import { useState } from "react"
import StudentBasicInfoReadOnly from "./studentDetails/StudentBasicInfoReadOnly"
import StudentBasicInfoEdit from "./studentDetails/StudentBasicInfoEdit"

interface Props {
    
    children?: React.ReactNode
    student?: Student
}

const StudentBasicInfo:React.FC<Props> = (props) => {

  const [editView,setEditView] = useState(false)

  return (
    <Stack height="100%" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      {!editView && <StudentBasicInfoReadOnly student={props.student} setEditView={setEditView}/>}
      {editView && <StudentBasicInfoEdit setEditView={setEditView} student={props.student}/>}
      <Box height={"30%"} width={"80%"} marginBottom={"1rem"}>
        <TextField label={"Notes"} rows={6} multiline sx={{height:"100%",width:"100%"}}>

        </TextField>
      </Box>
    </Stack>
  )
}

export default StudentBasicInfo
