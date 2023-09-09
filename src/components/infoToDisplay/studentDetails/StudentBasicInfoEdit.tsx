import { Student } from "../../../typeScriptDataTypes"
import {Stack,TextField,Button} from "@mui/material"
import { useAppDispatch } from "../../../state/store"
import axios from "axios"
import {useState} from "react"
import { updateStudent } from "../../../state/reducers/studentsSlice"

interface Props {
    setEditView:Function
    student:Student
}

const StudentBasicInfoEdit:React.FC<Props> = (props) => {

  const dispatch = useAppDispatch()

  const [studentForm,setStudentForm] = useState({
    firstName: props.student.firstName,
    lastName: props.student.lastName,
    cohort: props.student.cohort
  })

  const studentFormChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStudentForm({
      ...studentForm,
      [e.target.id]:e.target.value
    })
  }

  const closeFormClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setEditView(false)
  }

  const submitFormClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {

    const token = window.sessionStorage.getItem("token")
    const username = window.sessionStorage.getItem("user")
    const updatedInfo = 
    {
      username:props.student?.username,
      firstName:studentForm.firstName,
      lastName:studentForm.lastName,
      cohort:studentForm.cohort,
    }
    axios.put('http://localhost:8000/editStudentInfo',{data:updatedInfo,token,username})
    .then( promise => {
      dispatch(updateStudent(updatedInfo))
      props.setEditView(false)
    }
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