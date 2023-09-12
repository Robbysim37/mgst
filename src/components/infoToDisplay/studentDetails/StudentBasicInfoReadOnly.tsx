import {Stack,Typography,Button} from "@mui/material"
import { Student } from "../../../typeScriptDataTypes"


interface Props {
    student?:Student
    setEditView:Function
}

const StudentBasicInfoReadOnly:React.FC<Props> = (props) => {

    const editStudentClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        props.setEditView(true)
      }

  return (
    <Stack spacing={3}>
          <Typography fontFamily={"serif"} fontSize={"2rem"}>
            {props.student?.firstName} {props.student?.lastName}
          </Typography>
          <Typography fontFamily={"serif"} fontSize={"1.5rem"}>
            Grade: {props.student?.grade}
          </Typography>
          <Typography fontFamily={"serif"} fontSize={"1.5rem"}>
            Cohort: {props.student?.cohort}
          </Typography>
          <Button variant="contained" onClick={editStudentClickHandler}>Edit Student</Button>
      </Stack>
  )
}

export default StudentBasicInfoReadOnly