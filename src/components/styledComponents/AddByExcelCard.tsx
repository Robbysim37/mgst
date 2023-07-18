import{Card,Stack,Typography} from "@mui/material"
import UploadFileButton from "./UploadFileButton"

export default function AddByExcelCard() {
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
      <UploadFileButton/>
    </Stack>
    
  </Card>
  )
}
