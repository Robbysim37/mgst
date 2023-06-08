import {AppBar,Typography} from "@mui/material"


const NavBar = () => {
    return(
        <AppBar sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"10vh",backgroundColor:"primary.main",position:"relative"}}>
            <Typography sx={{fontSize:"5vh",textAlign:"center",fontFamily:"serif"}}>Maple Grove Student Tracker</Typography>
        </AppBar>
    )
}

export default NavBar