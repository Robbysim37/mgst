import { Box } from "@mui/material";
import "../../hidden-scroll-wheel.css"

interface Props {
    children?: React.ReactNode;
    component?: "div";
    className?: "container";
    height?: string;
    width?: string;
    backgroundColor?:"rgba(0,0,0,.5)" | "white" | "blue";
    justifyContent?:"center"
    borderRadius?:"30px"
    
  }

const InfoCardContainer: React.FC<Props> = (props) => {
    return(
        <Box 
        component={props.component}
        className={props.className}
        height={props.height}
        width={props.width}
        borderRadius={props.borderRadius}
        display={"flex"}
        alignContent={"flex-start"}
        justifyContent={props.justifyContent}
        flexWrap={"wrap"}
        overflow={"scroll"}
        
        sx={{
        backgroundColor:props.backgroundColor,
        }}>
            {props.children}
        </Box>
    )
}

export default InfoCardContainer 