import {Box,Typography,IconButton} from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
    children:React.ReactNode
}

const StaffCard:React.FC<Props> = (props) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} borderRadius={"30px"} 
    alignItems={"center"} width={"80%"} height={"20%"} bgcolor={"red"}>
      <Typography margin={"1rem"} fontSize={"2rem"} fontFamily={"serif"} bgcolor={"blue"}>{props.children}</Typography>
      <IconButton id={"staff-menu"} sx={{margin:"1rem"}}>
        <SettingsIcon/>
      </IconButton>
    </Box>
  )
}

export default StaffCard