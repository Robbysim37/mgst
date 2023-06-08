import StudentSearchText from "./StudentSearchText"
import StudentSearchDropdown from "./StudentSearchDropdown"

import { Box } from "@mui/material"

type Filters = {
    firstName:String,
    lastName:String,
    grade:String
}

interface Props {
    setFilters: Function
    filters:Filters
}

const StudentSearch:React.FC<Props> = (props) => {
    return (
    <Box sx={{
        height:"10%",
        width:"95vw",
        backgroundColor:"primary.main",
        position:"absolute",
        borderTopLeftRadius:"30px",
        borderTopRightRadius:"30px",
        display:"flex",
    }}>

        <Box sx={{width:"50%",display:"flex",
        justifyContent:"space-evenly",alignItems:"center"}}>

        <StudentSearchText id="firstName" label="Firstname" 
        filters={props.filters} setFilters={props.setFilters}/>
        <StudentSearchText id="lastName" label="Lastname" 
        filters={props.filters} setFilters={props.setFilters}/>

        </Box>

        <Box sx={{width:"50%",display:"flex",
        justifyContent:"flex-end",alignItems:"center"}}>

            <StudentSearchDropdown  filters={props.filters} setFilters={props.setFilters}/>

        </Box>
        
    </Box>
    )
}

export default StudentSearch