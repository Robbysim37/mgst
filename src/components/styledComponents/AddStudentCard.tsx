import { Card, Typography, FormGroup, 
  FormControl, Input, InputLabel, Stack } from "@mui/material"
import {useState,useEffect} from "react"
import StudentSubmit from "./StudentSubmit"
import CompletedCoursesList from "./CompletedCoursesList"


const inputStyles = {marginBottom:"1rem",marginTop:"1rem"}

interface Props {
  setStudentModal:Function
}

const AddStudentCard:React.FC<Props> = (props) => {

  const [completedCoursesList,setcompletedCoursesList] = useState<Array<string>>([])
  const [newStudentInfo,setNewStudentInfo] = useState(
    {
      firstName: "",
      lastName: "",
      cohort: new Date().getFullYear(),
      completedCourses: ""
    }
  )

  useEffect(() => {
    setNewStudentInfo(
      {...newStudentInfo,
        completedCourses:completedCoursesList.join(":")
      }
    )
  },[completedCoursesList])

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
    }
  }

  return (
    <Card sx={{
        backgroundColor:"white",
        height:"80%",
        width:"25%",
    }}>
        <FormGroup sx={{height:"100%",display:"flex",alignItems:"center"}}>
          <Stack
          width={"75%"}
          height={"100%"}
          alignSelf={"center"}
          display={"flex"}
          alignItems={"center"}>
            <Typography width={"100%"} fontSize="2rem" fontFamily="serif" color="black">Add Student</Typography>
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
            <CompletedCoursesList
            completedCourses={completedCoursesList} 
            setCompletedCourses={setcompletedCoursesList}/>

            <StudentSubmit newStudentInfoArray={[newStudentInfo]} setStudentModal={props.setStudentModal}/>
            </Stack>

        </FormGroup>
    </Card>
  )
}

export default AddStudentCard