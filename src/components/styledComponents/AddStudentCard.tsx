import { Card, FormLabel, FormGroup, 
  FormControl, Input, InputLabel, Stack } from "@mui/material"
import {useState} from "react"
import StudentSubmit from "./StudentSubmit"

const labelStyles = {fontSize:"2rem",fontFamily:"serif",color:"black"}
const inputStyles = {marginBottom:"1rem",marginTop:"1rem"}

interface Props {
  setStudentModal:Function
}

const AddStudentCard:React.FC<Props> = (props) => {

  const [newStudentInfo,setNewStudentInfo] = useState(
    {
      firstName: "",
      lastName: "",
      cohort: new Date().getFullYear()
    }
  )

  const studentInfoChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/
    if(e.target.id === "cohort"){
      if (regex.test(e.target.value)) {
        setNewStudentInfo(
          {
            ...newStudentInfo,
            cohort:parseInt(e.target.value)
          }
        );
      }
    }else{
      setNewStudentInfo(
        {
          ...newStudentInfo,
          [e.target.id]:e.target.value
        })
        console.log(newStudentInfo)
    }
  }

  return (
    <Card sx={{
        backgroundColor:"white",
        height:"80%",
        width:"25%",
    }}>
        <FormGroup>
          <FormLabel sx={labelStyles}>Add Student</FormLabel>
          <Stack sx={{width:"75%",alignSelf:"center",display:"flex",alignItems:"center"}}>
            <FormControl>
              <InputLabel>First name</InputLabel>
              <Input id={"firstName"} onChange={studentInfoChangeHandler} sx={inputStyles} autoFocus/>
            </FormControl>
            <FormControl>
              <InputLabel>Last name</InputLabel>
              <Input id={"lastName"} onChange={studentInfoChangeHandler} sx={inputStyles}/>
            </FormControl>
            <FormControl>
              <InputLabel>Cohort</InputLabel>
              <Input type="number" value={newStudentInfo.cohort} id={"cohort"} onChange={studentInfoChangeHandler} sx={inputStyles}/>
            </FormControl>

            <StudentSubmit  newStudentInfoArray={[newStudentInfo]} setStudentModal={props.setStudentModal}/>
            </Stack>

        </FormGroup>

    </Card>
  )
}

export default AddStudentCard