import { Card,Typography } from "@mui/material";

interface Props {
    children?: React.ReactNode;
}

const StudentCard: React.FC<Props> = (props) => {
    return(
        <Card sx={{
        height:"20%",
        width:"20%",
        margin:"2%",
        borderRadius:"30px"}}>
            <Typography>Card</Typography>
        </Card>
    )
}

export default StudentCard