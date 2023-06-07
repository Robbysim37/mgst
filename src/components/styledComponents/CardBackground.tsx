import { Box } from "@mui/material";
import "../../hidden-scroll-wheel.css"

interface Props {
    children?: React.ReactNode;
  }

const CardBackground: React.FC<Props> = (props) => {
    return(
        <Box 
        component={"div"}
        className="container"
        sx={{
        height:"90%",
        width:"95%",
        backgroundColor:"rgba(0,0,0,.5)",
        borderRadius:"30px",
        display:"flex",
        alignContent: "flex-start",
        flexWrap:"wrap",
        overflow:"scroll"
        }}>
            {props.children}
        </Box>
    )
}

export default CardBackground 