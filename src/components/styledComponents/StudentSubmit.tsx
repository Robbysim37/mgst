import { Stack, Button } from "@mui/material"
import { NewStudentInfo } from "../../typeScriptDataTypes"
import { useAppDispatch, useAppSelector } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"
import {useState} from "react"
import {Student} from "../../typeScriptDataTypes"
import axios from "axios"
import { toggleIsLoading } from "../../state/reducers/isLoadingSlice"

interface Props {
    setStudentModal:Function
    newStudentInfoArray:Array<NewStudentInfo>
  }

 const StudentSubmit:React.FC<Props> = (props) => {

  const [disabledBool,setDisabledBool] = useState(false)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.isLoading)

  const closeModal = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setStudentModal(false)
  }

  const sendNewStudentInfo = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleIsLoading(true))
    const username = window.sessionStorage.getItem("user")
    const token = window.sessionStorage.getItem("token")
    setDisabledBool(true)
    axios.post('http://localhost:8000/newStudents',{data:props.newStudentInfoArray,token,username})
    .then(response => {
      axios.post<Array<Student>>("http://localhost:8000",{username,token})
      .then(promise => {
          dispatch(updateStudentList(promise.data))
      })
      props.setStudentModal(false)
      dispatch(toggleIsLoading(false))
    })
    .catch(response => {
      console.log(response)
      dispatch(toggleIsLoading(false))
    });

  }


  return (
    <Stack direction={"row"} spacing={2}>
        <Button value="close" variant="outlined" onClick={closeModal}>Cancel</Button>
        <Button disabled={disabledBool} variant="contained" onClick={sendNewStudentInfo}>Submit</Button>
    </Stack>
  )
}

export default StudentSubmit