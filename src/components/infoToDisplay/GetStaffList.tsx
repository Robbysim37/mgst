import {Stack} from "@mui/material"
import StaffCard from "../infoDisplayers/StaffCard"


interface Props {
  staff:[string] | null,
  setIsLoading:Function,
  setRemoveStaffModal:Function
}

const GetStaffList:React.FC<Props> = (props) =>  {

  return (
    <Stack bgcolor={"primary.light"} height={"80%"} width={"100%"} alignItems={"center"} spacing={2}>
      {props.staff !== null && props.staff.map( currStaff => {
        return <StaffCard setRemoveStaffModal={props.setRemoveStaffModal}
        setIsLoading={props.setIsLoading} key={Math.random()}>{currStaff}</StaffCard>
      }
      )}
    </Stack>
  )
}

export default GetStaffList
