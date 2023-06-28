import { Stack, Button } from "@mui/material"
import { NewStudentInfo } from "../../typeScriptDataTypes"
import axios from "axios"

interface Props {
    setStudentModal:Function
    newStudentInfoArray:Array<NewStudentInfo>
  }

 const StudentSubmit:React.FC<Props> = (props) => {

    const closeModal = (e:React.MouseEvent<HTMLButtonElement>) => {
      props.setStudentModal(false)
    }

    const sendNewStudentInfo = (e:React.MouseEvent<HTMLButtonElement>) => {
      axios.post('https://localhost:8000/newStudents',props.newStudentInfoArray)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      });
    }


  return (
    <Stack direction={"row"} spacing={2}>
        <Button value="close" variant="outlined" onClick={closeModal}>Cancel</Button>
        <Button variant="contained" onClick={sendNewStudentInfo}>Submit</Button>
    </Stack>
  )
}

export default StudentSubmit