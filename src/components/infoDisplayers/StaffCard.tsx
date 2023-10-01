import {Box,Typography,IconButton,Menu,MenuItem} from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from "react";
import axios from "axios";
import { downloadCredentials } from "../../utils/downloadCredentials";
import { staffStringBuilder } from "../../utils/buildStaffCSVstring";

interface Props {
    children:React.ReactNode,
    setIsLoading:Function,
    setRemoveStaffModal:Function
}

const StaffCard:React.FC<Props> = (props) => {

  const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const token = window.sessionStorage.getItem("token")
  const username = window.sessionStorage.getItem("user")

  const menuClose = () => {
    setAnchorEl(null)
  }

  const staffMenuClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const deleteStaffClickHandler = (e:React.MouseEvent<HTMLLIElement>) => {
    menuClose()
    props.setIsLoading(true)
    axios.delete('http://mgst-backend.vercel.app/deleteStaff',{data:{data:{data:props.children,token,username}}})
    .then(response => {
      props.setRemoveStaffModal(false)
      alert(`${response.data}`)
    }).catch(err => {
      alert("An error has occurred")
    })
  }

  const resetStaffPasswordClickHandler = (e:React.MouseEvent<HTMLLIElement>) => {
    menuClose()
    props.setIsLoading(true)
    axios.put(`http://mgst-backend.vercel.app/resetStaffPassword`,{data:props.children,token,username})
    .then(response => {
      downloadCredentials("new-staff-password.csv",staffStringBuilder(response.data))
      alert("Staff password reset successful")
      props.setRemoveStaffModal(false)
    }).catch(err => {
      alert("An error has occurred")
      props.setRemoveStaffModal(false)
    })
  }

  return (
    <Box display={"flex"} justifyContent={"space-between"} borderRadius={"30px"}
    alignItems={"center"} width={"80%"} height={"20%"} bgcolor={"white"}>
      <Menu anchorEl={anchorEl} onClose={menuClose} open={open} id={"student-menu"}>
        <MenuItem onClick={resetStaffPasswordClickHandler}>Reset Password</MenuItem>
        <MenuItem onClick={deleteStaffClickHandler} sx={{color:"red"}}>Delete Staff</MenuItem>
      </Menu>
      <Typography margin={"1rem"} fontSize={"2rem"} fontFamily={"serif"}>{props.children}</Typography>
      <IconButton onClick={staffMenuClickHandler} id={"staff-menu"} sx={{margin:"1rem"}}>
        <SettingsIcon/>
      </IconButton>
    </Box>
  )
}

export default StaffCard