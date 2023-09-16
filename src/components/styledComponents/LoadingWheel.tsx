import { CircularProgress,Box } from "@mui/material"

interface Props {
  position?: "static" | "absolute"
  height?: string
  width?: string
}

const LoadingWheel:React.FC<Props> = (props) => {
  return (
    <Box 
      height={props.height ||"90vh"} 
      width={props.width || "100vw"} 
      position={props.position || "absolute"} 
      bgcolor={"primary.light"}
      display={"flex"} 
      justifyContent={"center"} 
      alignItems={"center"} 
      zIndex={10}>
        <CircularProgress color="primary" size={80}/>
    </Box>
  )
}

export default LoadingWheel