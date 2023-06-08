import { TextField } from "@mui/material"

type Filters = {
    firstName:String,
    lastName:String,
    grade:String
}

interface Props {
    children?: React.ReactNode;
    label:string;
    id:string;
    setFilters:Function;
    filters:Filters
}

const StudentSearchText: React.FC<Props> = (props) => {

    const searchByName = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setFilters({...props.filters,[`${props.id}`]:e.target.value})
        console.log(props.filters)
    }

    return(
        <TextField
        onChange={searchByName}
        label={props.label}
        variant="filled" 
        InputProps={{
            disableUnderline: true
          }}
        size="small"
        sx={{backgroundColor:"primary.light",borderRadius:"30px"}}/>
    )
}

export default StudentSearchText