import { Schedule } from "../../../typeScriptDataTypes"
import {Box, Stack, Button, Typography} from "@mui/material"
import {useState} from "react"
import InfoCardContainer from "../../infoDisplayers/InfoCardContainer"
import TrimesterDisplay from "./TrimesterDisplay"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../../state/store"
import axios from "axios"
import { useAppDispatch } from "../../../state/store"
import { toggleIsLoading } from "../../../state/reducers/isLoadingSlice"

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
    schdeule: Schedule
}

const ScheduleDisplay:React.FC<Props> = (props) => {

    const dispatch = useAppDispatch()

    const students = useAppSelector(state => state.students.students)
    const {studentUsername} = useParams()
    const [disabled,setDisabled] = useState(false)
    const [selectedCourse,setSelectedCourse] = useState<string>("")

    const updateScheduleHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        const token = window.sessionStorage.getItem("token")
        const username = window.sessionStorage.getItem("user")
        dispatch(toggleIsLoading(true))
        if(students){
            setDisabled(true)
            const sendingStudent = students.filter(currStudent => {
                return currStudent.username === studentUsername ? true : false
            })[0]
            axios.put('http://localhost:8000/updateCourseOrder',{data:sendingStudent,token,username})
            .then(promise => {
                setDisabled(false)
                dispatch(toggleIsLoading(false))
                alert("Schedule updated successfully!")
            }).catch(error => {
                setDisabled(false)
                dispatch(toggleIsLoading(false))
                console.log(error)
            })
        }
    }

  return (
    <>
    <Box sx={scheduleBoxStyles} display={"flex"}>
        {props.schdeule?.map( (currYear,yearIndex) => {
            return (
                    <InfoCardContainer
                    key={Math.random()}
                    className="container"
                    borderRadius="30px"
                    height={"48%"} 
                    width={"48%"}
                    backgroundColor="white">
                        <Typography 
                        width={"100%"}
                        fontFamily={"serif"} 
                        fontSize={"2rem"}>Year {yearIndex + 1}</Typography>
                        <Stack direction={"column"} width={"100%"}>
                            {currYear.map( (currTri,triIndex) => {
                                return(
                                    <TrimesterDisplay
                                    selectedCourse={selectedCourse}
                                    setSelectedCourse={setSelectedCourse}
                                    key={Math.random()}
                                    yearIndex={yearIndex}
                                    triIndex = {triIndex}
                                    trimester={currTri}
                                    number={triIndex}/>
                                )
                            })}
                        </Stack>
                    </InfoCardContainer>
            )
        })}
        <Button onClick={updateScheduleHandler} 
        disabled={disabled}
        variant="contained">Update Schedule</Button>
    </Box>
    </>
  )

}
export default ScheduleDisplay