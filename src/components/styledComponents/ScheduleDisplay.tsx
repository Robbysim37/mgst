import { Schedule } from "../../typeScriptDataTypes"
import {Box, Stack, Typography} from "@mui/material"

// entire component represents schdedule
// 4 boxes represent individual years
// 3 rows inside each box are trimesters

const yearFont = {
    fontSize:"2rem",
    fontFamily:"serif"
}

const triFont = {
    fontSize:"1.5rem",
    fontFamily:"serif"
}

const scheduleBoxStyles = {
    display:"flex",
    width:"100%",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    alignContent:"space-between"
}

const yearBoxStyles = {
    backgroundColor:"white",
    height:"48%",
    width:"48%",
    borderRadius:"2rem",
    overflow:"scroll"
}

const trimesterCardBackground = {
    backgroundColor:"rgba(0,0,0,.25)",
    justifyContent:"space-around"
}

interface Props {
    schdeule?: Schedule
}

const ScheduleDisplay:React.FC<Props> = (props) => {
  return (
    <Box sx={scheduleBoxStyles}>
        {props.schdeule?.map( (currYear,index) => {
            return (
                <Box sx={yearBoxStyles}>
                    <Typography sx={yearFont}>Year {index + 1}</Typography>
                    {currYear.map((currTrimester,index) => {
                        return(
                            <Stack>
                                <Typography sx={triFont}>Trimester {index+1}</Typography>
                                <Stack sx={trimesterCardBackground} direction={"row"}>
                                    {currTrimester.map(currClass => {
                                        return(
                                            <Typography>{currClass.name}</Typography>
                                        )
                                    })}
                                </Stack>
                            </Stack>
                        )
                    })}
                </Box>
            )
        })}
    </Box>
  )

}
export default ScheduleDisplay