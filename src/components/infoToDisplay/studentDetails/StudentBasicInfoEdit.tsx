import { Student } from "../../../typeScriptDataTypes"
import {Stack,TextField} from "@mui/material"

interface Props {
    student?:Student
}

const StudentBasicInfoEdit:React.FC<Props> = (props) => {

  return (
    <Stack>
    <TextField variant="filled">
      {props.student?.firstName} {props.student?.lastName}
    </TextField>
    <TextField variant="filled">
      Grade: {props.student?.grade}
    </TextField>
    <TextField variant="filled">
      Cohort: {props.student?.cohort}
    </TextField>
</Stack>
  )
}

export default StudentBasicInfoEdit