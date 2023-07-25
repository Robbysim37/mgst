import{Card,Stack,Typography} from "@mui/material"
import UploadFileData from "../infoToDisplay/UploadFileData"

interface Props {
  setStudentModal:Function
}

 const AddByExcelCard:React.FC<Props> = (props) => {
  return (
    <Card sx={{
      backgroundColor:"white",
      height:"80%",
      width:"25%",
  }}>
    <Stack alignItems={"center"}>
      <Typography fontSize="2rem"
      fontFamily="serif"
      color="black">Import Spreadsheet</Typography>
      <UploadFileData setStudentModal={props.setStudentModal}/>
    </Stack>
    
  </Card>
  )
}

export default AddByExcelCard