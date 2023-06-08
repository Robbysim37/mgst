import { Card,Typography } from "@mui/material";

type Student = {
    firstName:string,
    lastName:string,
    schedule:string,
    grade:number,
    cohort:number
}

interface Props {
    children?: React.ReactNode;
    student: Student;
}

const StudentCard: React.FC<Props> = (props) => {

    return(
        <Card sx={{
        height:"20%",
        width:"20%",
        margin:"2.5%",
        borderRadius:"30px"}}>
            <Typography>{`${props.student.firstName} ${props.student.lastName} ${props.student.grade}`}</Typography>
        </Card>
    )
}

export default StudentCard