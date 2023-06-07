import { TextField } from "@mui/material"

interface Props {
    children?: React.ReactNode;
    label:string;
}

const StudentSearchText: React.FC<Props> = (props) => {
    return(
        <TextField 
        label={props.label}
        variant="filled" 
        size="small"
        sx={{backgroundColor:"primary.light"}}/>
    )
}

export default StudentSearchText