import {Stack,Typography} from "@mui/material"
import StaffCard from "../infoDisplayers/StaffCard"


interface Props {
  staff:[string] | null
}

const GetStaffList:React.FC<Props> = (props) =>  {

  return (
    <Stack height={"100%"} width={"100%"} alignItems={"center"} spacing={2}>
      {props.staff !== null && props.staff.map( currStaff => {
        return <StaffCard key={Math.random()}>{currStaff}</StaffCard>
      }
      )}
    </Stack>
  )
}

export default GetStaffList
