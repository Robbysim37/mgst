import { Select,MenuItem } from "@mui/material"
import {useState} from "react"

const StudentSearchDropdown:React.FC = () => {

    const [grade,setGrade] = useState("all-grades")

    return(
        <Select sx={{marginRight:"5%",backgroundColor:"primary.light"}} value={grade} labelId="grade" label="Grade">
            <MenuItem value={"all-grades"}>All Grades</MenuItem>
            <MenuItem value={"Grade-1"} >Grade 1</MenuItem>
            <MenuItem value={"Grade 2"}>Grade 2</MenuItem>
            <MenuItem value={"Grade 3"}>Grade 3</MenuItem>
            <MenuItem value={"Grade 4"}>Grade 4</MenuItem>
        </Select>
    )
}

export default StudentSearchDropdown