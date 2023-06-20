import StudentSearchText from "./StudentSearchText"
import StudentSearchDropdown from "./StudentSearchDropdown"

import { Box,Button } from "@mui/material"

type Filters = {
    firstName:String,
    lastName:String,
    grade:String
}

interface Props {
    setFilters: Function
    setStudentModal: Function
    filters:Filters
}

const StudentSearch:React.FC<Props> = (props) => {

    const openModal = (e:React.MouseEvent<HTMLButtonElement>) => {
        props.setStudentModal(true)
    }

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
        <StudentSearchDropdown  filters={props.filters} 
        setFilters={props.setFilters}/>

        </Box>

        <Box sx={{width:"50%",display:"flex",
        justifyContent:"flex-end",alignItems:"center"}}>
            <Button  sx={{marginRight:"10%",bgcolor:"primary.light",color:"black"}}
            variant="contained" onClick={openModal}>
                Add New Students
                </Button>
        </Box>

    </Box>
    )
}

export default StudentSearch