import {Stack,TextField,Box,IconButton,Menu,MenuItem} from "@mui/material"
import { Student } from "../../typeScriptDataTypes"
import { useState } from "react"
import StudentBasicInfoReadOnly from "./studentDetails/StudentBasicInfoReadOnly"
import StudentBasicInfoEdit from "./studentDetails/StudentBasicInfoEdit"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../state/store"
import { deleteStudent } from "../../state/reducers/studentsSlice"

interface Props {
    
    children?: React.ReactNode
    student: Student
}

const StudentBasicInfo:React.FC<Props> = (props) => {

  const [editView,setEditView] = useState(false)
  const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const studentMenuClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const deleteStudentClickHandler = (e:React.MouseEvent<HTMLLIElement>) => {
    const token = window.sessionStorage.getItem("token")
    const username = window.sessionStorage.getItem("user")
    axios.delete('http://localhost:8000/deleteStudent',{data:{data:{data:props.student.username,token,username}}}).then(res => {
      dispatch(deleteStudent(props.student))
      navigate("/staff")
    }).catch(response => {
      console.log("fail")
    })
  }

  const returnToStaffView = (e:React.MouseEvent<HTMLButtonElement>) => {
    navigate("/staff")
  }

  const menuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Stack height="50%" display={"flex"} alignItems={"center"}>
      <Menu anchorEl={anchorEl} onClose={menuClose} open={open} id={"student-menu"}>
        <MenuItem onClick={deleteStudentClickHandler} sx={{color:"red"}}>Delete Student</MenuItem>
      </Menu>
      <Stack direction={"row"} justifyContent={"space-between"} width={"90%"} height={"15%"}>
        <IconButton onClick={returnToStaffView}>
          <ArrowBackIcon/>
        </IconButton>
        <IconButton id={"student-menu"} onClick={studentMenuClickHandler}>
          <SettingsIcon/>
        </IconButton>
      </Stack>
      {!editView && <StudentBasicInfoReadOnly student={props.student} setEditView={setEditView}/>}
      {editView && <StudentBasicInfoEdit setEditView={setEditView} student={props.student}/>}
      <Box height={"30%"} width={"80%"} marginBottom={"1rem"}>
        <TextField label={"Notes"} rows={6} multiline sx={{height:"100%",width:"100%"}}>

        </TextField>
      </Box>
    </Stack>
  )
}

export default StudentBasicInfo
