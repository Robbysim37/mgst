import { Card,Typography,Stack } from "@mui/material";
import {Student} from "../../typeScriptDataTypes"
import { useNavigate } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
    student: Student;
}

const studentNameFont = {
    fontFamily:"serif",
    fontSize:"1.5rem"
}

const studentCardInfoFont = {
    fontFamily:"serif",
    fontSize:"1rem",
    margin:".8rem"
}

const StudentCard: React.FC<Props> = (props) => {

    const navigate = useNavigate();

    const studentCardClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        navigate(`/staff/${props.student.username}`)
    }

    return(
        <Card sx={{
        height:"20%",
        width:"20%",
        margin:"2.5%",
        borderRadius:"30px"}}
        onClick={studentCardClickHandler}>
            <Stack sx={{height:"100%",justifyContent:"space-between"}}>
                <Typography sx={studentNameFont}>
                    {`${props.student.firstName} ${props.student.lastName}`}
                </Typography>
                <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
                    <Typography sx={studentCardInfoFont}>Grade: {props.student.grade}</Typography>
                    <Typography sx={studentCardInfoFont}>{props.student.cohort}</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}

export default StudentCard