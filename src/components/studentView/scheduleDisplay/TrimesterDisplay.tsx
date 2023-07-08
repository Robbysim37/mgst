import InfoCardContainer from "../../infoDisplayers/InfoCardContainer"
import { Typography,Stack } from "@mui/material"
import { Trimester } from "../../../typeScriptDataTypes";
import InfoCard from "../../infoDisplayers/InfoCard";
import CourseCardInfo from "../../infoToDisplay/CourseCardInfo";

interface Props {
    children?:React.ReactNode;
    number: number;
    trimester:Trimester;
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
        {props.trimester.map( currCourse => {
            return(
                    <InfoCard
                    width="25%"
                    className="courseCard">
                      <CourseCardInfo course={currCourse}></CourseCardInfo>
                    </InfoCard>
            )
        })}
    </InfoCardContainer>
  )
}

export default TrimesterDisplay