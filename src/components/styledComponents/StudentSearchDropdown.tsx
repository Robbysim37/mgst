import { TextField,MenuItem } from "@mui/material"
import { useState,useEffect } from "react"

type Filters = {
    firstName:String,
    lastName:String,
    grade:Number
}

interface Props {
    setFilters:Function
    filters:Filters
}

const StudentSearchDropdown:React.FC<Props> = (props) => {

    const [grade,setGrade] = useState("0")

    useEffect(()=>{
        props.setFilters({...props.filters,grade:grade})
        console.log(props.filters)
    },[grade])

    const changeGrade = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGrade(e.target.value)
    }

    return(
        <TextField sx={{marginRight:"5%",backgroundColor:"primary.light"}}
        select value={grade} onChange={changeGrade}>
            <MenuItem value={"0"}>All Grades</MenuItem>
            <MenuItem value={"1"}>Grade 1</MenuItem>
            <MenuItem value={"2"}>Grade 2</MenuItem>
            <MenuItem value={"3"}>Grade 3</MenuItem>
            <MenuItem value={"4"}>Grade 4</MenuItem>
        </TextField>
    )
}

export default StudentSearchDropdown