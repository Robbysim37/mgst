import { Card } from "@mui/material";
import {Student} from "../../typeScriptDataTypes"
import { useNavigate } from "react-router-dom";
import "../../hidden-scroll-wheel.css"

interface Props {
    children?: React.ReactNode;
    color?: string;
    justifyContent?:string;
    alignItems?:string;
    student?: Student;
    height?: string;
    width?: string;
    display?: string;
    className?: "studentCard" | "courseCard";
}

const InfoCard: React.FC<Props> = (props) => {

    const navigate = useNavigate();

    const studentCardClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        if(props.student){
            navigate(`/staff/${props.student.username}`)
        }
    }
    const cardClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        if(props.className === "studentCard"){
            studentCardClickHandler(e)
        }
    }

    return(
        <Card
        sx={{
        backgroundColor:props.color ||"white",
        justifyContent:props.justifyContent || "flex-start",
        alignItems:props.alignItems || "stretch",
        display:props.display,
        height:props.height || "50%",
        width:props.width || "50%",
        margin:"2.5%",
        overflow:"scroll",
        borderRadius:"30px"}}
        onClick={cardClickHandler}>
            {props.children}
        </Card>
    )
}

export default InfoCard