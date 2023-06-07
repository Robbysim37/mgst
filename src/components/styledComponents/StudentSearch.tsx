import StudentSearchText from "./StudentSearchText"
import StudentSearchDropdown from "./StudentSearchDropdown"

import { Box } from "@mui/material"

const StudentSearch = () => {
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

        <StudentSearchText label="Firstname"/>
        <StudentSearchText label="Lastname"/>

        </Box>

        <Box sx={{width:"50%",display:"flex",
        justifyContent:"flex-end",alignItems:"center"}}>

            <StudentSearchDropdown></StudentSearchDropdown>

        </Box>
        
    </Box>
    )
}

export default StudentSearch