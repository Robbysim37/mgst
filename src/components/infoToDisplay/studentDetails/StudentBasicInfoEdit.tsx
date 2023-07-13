import { Student } from "../../../typeScriptDataTypes"
import {Stack,TextField,Button} from "@mui/material"
import axios from "axios"
import {useState} from "react"

interface Props {
    setEditView:Function
    student?:Student
}

const StudentBasicInfoEdit:React.FC<Props> = (props) => {

  const [studentForm,setStudentForm] = useState({
    firstName: props.student?.firstName,
    lastName: props.student?.lastName,
    cohort: props.student?.cohort
  })

  const studentFormChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStudentForm({
      ...studentForm,
      [e.target.id]:e.target.value
    })
    let test = studentForm
    console.log(test)
  }

  const closeFormClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setEditView(false)
  }

  const submitFormClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    axios.put('http://localhost:8000/editStudentInfo',{
      username:props.student?.username,
      firstName:studentForm.firstName,
      lastName:studentForm.lastName,
      cohort:studentForm.cohort,
    }).then(
      props.setEditView(false)
    )
  }

  return (
    <Stack>
    <TextField variant="filled" onChange={studentFormChangeHandler} 
    id="firstName" value={studentForm.firstName}>
      {props.student?.firstName} {props.student?.lastName}
    </TextField>
    <TextField variant="filled" onChange={studentFormChangeHandler} 
    id="lastName" value={studentForm.lastName}>
      {props.student?.firstName} {props.student?.lastName}
    </TextField>
    <TextField variant="filled" onChange={studentFormChangeHandler} 
    id="cohort" value={studentForm.cohort}>
      Cohort: {props.student?.cohort}
    </TextField>
    <Stack direction={"row"}>
      <Button onClick={closeFormClickHandler}>Close</Button>
      <Button onClick={submitFormClickHandler}>Submit</Button>
    </Stack>
</Stack>
  )
}

export default StudentBasicInfoEdit