import {TextField,Box,Typography,Stack,Button} from "@mui/material"
import axios from "axios"
import {useState} from "react"

interface Props {
    setAddStaffModal:Function
  }

const AddStaffInfo:React.FC<Props> = (props) => {

  const [staffUsername,setStaffUsername] = useState("")

  const closeAddStaff = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setAddStaffModal(false)
  }

  const staffUsernameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStaffUsername(e.target.value)
  }

  const createStaff = (e:React.MouseEvent<HTMLButtonElement>) => {
    const username = window.sessionStorage.getItem("user")
    const token = window.sessionStorage.getItem("token")
    axios.post("http://localhost/createStaff",{data:staffUsername,username,token})
    .then(response => {
      alert("Staff created successfully!")
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Box height={"100%"} width={"100%"} display={"flex"}
    flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>

        <Typography>New Staff Username</Typography>

        <TextField color="primary" label="Username"
        value={staffUsername} onChange={staffUsernameChangeHandler}></TextField>

        <Stack direction={"row"} spacing={2}>
            <Button value="close" variant="outlined" onClick={closeAddStaff}>Cancel</Button>
            <Button variant="contained">Submit</Button>
        </Stack>

    </Box>
  )
}

export default AddStaffInfo