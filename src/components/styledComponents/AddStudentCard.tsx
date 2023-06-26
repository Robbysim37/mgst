import { Card, FormLabel, FormGroup, 
  FormControl, Input, InputLabel, Stack } from "@mui/material"

import StudentSubmit from "./StudentSubmit"

const labelStyles = {fontSize:"2rem",fontFamily:"serif",color:"black"}
const inputStyles = {marginBottom:"1rem",marginTop:"1rem"}

interface Props {
  setStudentModal:Function
}

const AddStudentCard:React.FC<Props> = (props) => {
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
              <Input sx={inputStyles} autoFocus/>
            </FormControl>
            <FormControl>
              <InputLabel>Last name</InputLabel>
              <Input sx={inputStyles}/>
            </FormControl>
            <FormControl>
              <InputLabel>Cohort</InputLabel>
              <Input sx={inputStyles}/>
            </FormControl>

            <StudentSubmit setStudentModal={props.setStudentModal}/>
            </Stack>

        </FormGroup>

    </Card>
  )
}

export default AddStudentCard