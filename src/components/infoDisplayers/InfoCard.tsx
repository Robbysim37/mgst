import { Card } from "@mui/material";
import {Student} from "../../typeScriptDataTypes"
import { useNavigate } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
    student?: Student;
    height?: string;
    width?: string;
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
        height:props.height,
        width:props.width,
        margin:"2.5%",
        borderRadius:"30px"}}
        onClick={cardClickHandler}>
            {props.children}
        </Card>
    )
}

export default InfoCard