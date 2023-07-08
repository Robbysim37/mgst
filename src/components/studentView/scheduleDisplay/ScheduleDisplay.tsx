import { Schedule } from "../../../typeScriptDataTypes"
import {Box, Stack, Typography} from "@mui/material"
import InfoCardContainer from "../../infoDisplayers/InfoCardContainer"
import TrimesterDisplay from "./TrimesterDisplay"

// entire component represents schdedule
// 4 boxes represent individual years
// 3 rows inside each box are trimesters

interface Props {
    schdeule?: Schedule
}

const ScheduleDisplay:React.FC<Props> = (props) => {
  return (
    <Box display={"flex"} sx={{backgroundColor:"red"}} flexWrap={"wrap"}>
        {props.schdeule?.map( (currYear,index) => {
            return (
                    <InfoCardContainer
                    className="container"
                    borderRadius="30px"
                    height="10%"
                    width="50%"
                    backgroundColor="blue">
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