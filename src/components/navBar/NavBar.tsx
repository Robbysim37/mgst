import {AppBar,Typography,Box,Toolbar,Button,Menu,MenuItem} from "@mui/material"
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import React from "react"
import AddStaffModal from "./AddStaffModal"
import RemoveStaffModal from "./RemoveStaffModal"

const NavBar = () => {

    const username = window.sessionStorage.getItem("user")
    const navigate = useNavigate()
    const userType = window.sessionStorage.getItem("type")

    const [addStaffModal,setAddStaffModal] = useState(false)
    const [removeStaffModal,setRemoveStaffModal] = useState(false)
    const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const usernmeClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const menuClose = () => {
        setAnchorEl(null)
      }

    const addStaff = (e:React.MouseEvent<HTMLLIElement>) => {
        menuClose()
        setAddStaffModal(true)
    }

    const removeStaff = (e:React.MouseEvent<HTMLLIElement>) => {
        menuClose()
        setRemoveStaffModal(true)
    }

    const logout = (e:React.MouseEvent<HTMLLIElement>) => {
        menuClose()
        window.sessionStorage.removeItem("token")
        window.sessionStorage.removeItem("user")
        window.sessionStorage.removeItem("type")
        navigate("/")
    }   

    return(
        <>
        {addStaffModal && <AddStaffModal setAddStaffModal={setAddStaffModal} />}
        {removeStaffModal && <RemoveStaffModal setRemoveStaffModal={setRemoveStaffModal}/>}
        <AppBar position="relative" color="primary" sx={{height:"10vh"}}>
            <Toolbar sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

                <Box height={"100%"} width={"25%"}></Box>

                <Typography fontSize={"5vh"} textAlign={"center"}
                 fontFamily={"serif"}>Magle Grove Student Tracker</Typography>

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
                 height={"100%"} width={"25%"}>
                    <Menu anchorEl={anchorEl} onClose={menuClose} open={open} id={"student-menu"}>
                        {userType === "admin" && <MenuItem onClick={addStaff}>Add Staff</MenuItem>}
                        {userType === "admin" && <MenuItem onClick={removeStaff} sx={{color:"red"}}>Delete Staff</MenuItem>}
                        <MenuItem onClick={logout} sx={{color:"red"}}>Logout</MenuItem>
                    </Menu>
                   {username && <Button color={"secondary"} onClick={usernmeClickHandler}>
                    {`Welcome, ${username}`}
                    </Button>}
                </Box>

            </Toolbar>
        </AppBar>
        </>
    )
}


export default NavBar