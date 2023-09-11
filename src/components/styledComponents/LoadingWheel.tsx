import { CircularProgress,Box } from "@mui/material"

const LoadingWheel = () => {
  return (
    <Box height={"90vh"} width={"100vw"} position={"absolute"} bgcolor={"primary.light"}
        display={"flex"} justifyContent={"center"} alignItems={"center"} zIndex={10}>
        <CircularProgress color="primary" size={80}/>
    </Box>
  )
}

export default LoadingWheel