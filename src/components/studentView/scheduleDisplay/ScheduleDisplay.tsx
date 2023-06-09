import { Schedule } from "../../../typeScriptDataTypes"
import {Box, Stack, Typography} from "@mui/material"
import InfoCardContainer from "../../infoDisplayers/InfoCardContainer"
import TrimesterDisplay from "./TrimesterDisplay"

// entire component represents schdedule
// 4 boxes represent individual years
// 3 rows inside each box are trimesters

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
                    <InfoCardContainer
                    className="container"
                    borderRadius="30px"
                    height={"48%"} 
                    width={"48%"}
                    backgroundColor="white">
                        <Typography 
                        width={"100%"}
                        fontFamily={"serif"} 
                        fontSize={"2rem"}>Year {index + 1}</Typography>
                        <Stack direction={"column"} width={"100%"}>
                            {currYear.map( (currTri,index) => {
                                return(
                                    <TrimesterDisplay 
                                    trimester ={currTri}
                                    number={index}/>
                                )
                            })}
                        </Stack>
                    </InfoCardContainer>
            )
        })}
    </Box>
  )

}
export default ScheduleDisplay