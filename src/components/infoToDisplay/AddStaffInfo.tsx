import {TextField,Box,Typography,Stack,Button} from "@mui/material"
import axios from "axios"
import {useState} from "react"
import { staffStringBuilder } from "../../utils/buildStaffCSVstring"
import { downloadCredentials } from "../../utils/downloadCredentials"
import { useAppDispatch,useAppSelector } from "../../state/store"

interface Props {
    setAddStaffModal:Function,
    setIsLoading:Function
  }

const AddStaffInfo:React.FC<Props> = (props) => {

  const [staffUsername,setStaffUsername] = useState("")
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.isLoading)

  const closeAddStaff = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setAddStaffModal(false)
  }

  const staffUsernameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStaffUsername(e.target.value)
  }

  const createStaff = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setIsLoading(true)
    const username = window.sessionStorage.getItem("user")
    const token = window.sessionStorage.getItem("token")
    axios.post("https://mgst-backend.vercel.app/createStaff",{data:staffUsername,username,token})
    .then(response => {
      props.setIsLoading(false)

      closeAddStaff(e)

      alert("Staff created successfully!")

      downloadCredentials("staff-temp-password",staffStringBuilder(response.data))

    }).catch(err => {
      props.setIsLoading(false)
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
            <Button variant="contained" onClick={createStaff}>Submit</Button>
        </Stack>

    </Box>
  )
}

export default AddStaffInfo