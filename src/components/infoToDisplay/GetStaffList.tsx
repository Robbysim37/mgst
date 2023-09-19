import {Box,Typography} from "@mui/material"


interface Props {
  staff:[string] | null
}

const GetStaffList:React.FC<Props> = (props) =>  {

  return (
    <Box height={"100%"} width={"100%"}>
      {props.staff !== null && props.staff.map( currStaff => {
        return <Typography key={Math.random()}>{currStaff}</Typography>
      }
      )}
    </Box>
  )
}

export default GetStaffList
