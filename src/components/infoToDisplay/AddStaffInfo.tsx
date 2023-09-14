import {TextField,Box,Typography,Stack,Button} from "@mui/material"

interface Props {
    setAddStaffModal:Function
  }

const AddStaffInfo:React.FC<Props> = (props) => {

  const closeAddStaff = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setAddStaffModal(false)
  }

  return (
    <Box height={"100%"} width={"100%"} display={"flex"}
    flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"}>
        <Typography>New Staff Username</Typography>
        <TextField color="primary" label="Username"></TextField>
        <Stack direction={"row"} spacing={2}>
            <Button value="close" variant="outlined" onClick={closeAddStaff}>Cancel</Button>
            <Button variant="contained">Submit</Button>
        </Stack>
    </Box>
  )
}

export default AddStaffInfo