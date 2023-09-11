import {Box} from "@mui/material"
import InfoCard from "../infoDisplayers/InfoCard"
import LogInCardInfo from "../infoToDisplay/LogInCardInfo"
import { useAppSelector } from "../../state/store"
import LoadingWheel from "../styledComponents/LoadingWheel"

const LandingPage = () => {

  const isLoading = useAppSelector(state => state.isLoading)

  return (
    <>
    {isLoading && <LoadingWheel/>}
    <Box display={"flex"} 
    height={"100%"} 
    width={"100%"}
    justifyContent={"center"}
    alignItems={"center"}>
        <InfoCard height="85%" width="30%">
            <LogInCardInfo></LogInCardInfo>
        </InfoCard>
    </Box>
    </>
  )
}

export default LandingPage
