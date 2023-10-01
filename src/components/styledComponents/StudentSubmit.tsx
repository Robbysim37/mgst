import { Stack, Button } from "@mui/material"
import { NewStudentInfo } from "../../typeScriptDataTypes"
import { useAppDispatch, useAppSelector } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"
import {useState} from "react"
import {Student} from "../../typeScriptDataTypes"
import axios from "axios"
import { toggleIsLoading } from "../../state/reducers/isLoadingSlice"
import { downloadCredentials } from "../../utils/downloadCredentials"
import { stringBuilder } from "../../utils/buildCSVstring"

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
    closeModal(e)
    axios.post('https://mgst-backend.vercel.app/newStudents',{data:props.newStudentInfoArray,token,username})
    .then(response => {
      downloadCredentials("student-temp-passwords.csv",stringBuilder(response.data))
      axios.post<Array<Student>>("https://mgst-backend.vercel.app",{username,token})
      .then(promise => {
          dispatch(updateStudentList(promise.data))
      })
      props.setStudentModal(false)
    })
    .catch(response => {
      console.log(response)
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