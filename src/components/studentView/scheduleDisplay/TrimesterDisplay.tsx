import InfoCardContainer from "../../infoDisplayers/InfoCardContainer"
import { Typography } from "@mui/material"
import { Trimester} from "../../../typeScriptDataTypes";
import InfoCard from "../../infoDisplayers/InfoCard";
import CourseCardInfo from "../../infoToDisplay/CourseCardInfo";

interface Props {
    children?:React.ReactNode;
    number: number;
    trimester:Trimester;
    yearIndex: number;
    triIndex: number;
    selectedCourse: string
    setSelectedCourse : Function
}

const TrimesterDisplay:React.FC<Props> = (props) => {
  return (
    <InfoCardContainer
    className="container"
    justifyContent="center"
    backgroundColor="rgba(0,0,0,.5)">
        <Typography 
        width={"100%"}
        fontSize={"1.5rem"} 
        fontFamily={"serif"}>
        Trimester {props.number + 1}
        </Typography>
        {props.trimester.map( (currCourse,courseIndex) => {
            return(
                    <InfoCard
                    key={Math.random()}
                    width="25%"
                    className="courseCard">
                        <CourseCardInfo
                        selectedCourse={props.selectedCourse}
                        setSelectedCourse={props.setSelectedCourse}
                        yearIndex={props.yearIndex}
                        triIndex={props.triIndex}
                        courseIndex={courseIndex}
                        course={currCourse}/>
                    </InfoCard>
            )
        })}
    </InfoCardContainer>
  )
}

export default TrimesterDisplay