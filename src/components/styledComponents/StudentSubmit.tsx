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
      console.log("hits the download credentials")
      dispatch(toggleIsLoading(false))
      axios.post<Array<Student>>("https://mgst-backend.vercel.app",{username,token})
      .then(promise => {
          console.log("gets the All Students data back")
          dispatch(updateStudentList(promise.data))
          props.setStudentModal(false)
      }).catch(err => {
        console.log("This is the `All Students` catch")
        console.log(err)
        alert("An error has occurred")
      })
    })
    .catch(response => { 
      dispatch(toggleIsLoading(false))
      console.log(response)
      console.log("This is the `Post Students` catch")
      alert("An error has occurred")
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