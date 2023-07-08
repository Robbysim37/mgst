import {Box,Typography} from "@mui/material"
import { Schedule } from "../../../typeScriptDataTypes"

interface Props {
    schedule?:Schedule 
}

const ScheduleDisplay:React.FC<Props> = (props) => {
  return (
    <Box sx={{backgroundColor:"red"}} width={"100%"}>
        <Typography height={"100%"}>test</Typography>
    </Box>
  )
}

export default ScheduleDisplay