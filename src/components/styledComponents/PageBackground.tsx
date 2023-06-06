import {Box} from "@mui/material"

interface Props {
    children?: React.ReactNode;
  }

const PageBackground: React.FC<Props> = (props) => {
    return(
        <Box sx={{height:"90vh",width:"100vw",
        bgcolor:"primary.light",display:"flex",
        justifyContent:"center",alignItems:"center"}}>
            {props.children}
        </Box>
    )
}

export default PageBackground