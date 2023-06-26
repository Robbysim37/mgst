import { Stack, Button } from "@mui/material"

interface Props {
    setStudentModal:Function
  }

 const StudentSubmit:React.FC<Props> = (props) => {

    const closeModal = (e:React.MouseEvent<HTMLButtonElement>) => {
        props.setStudentModal(false)
    }


  return (
    <Stack direction={"row"} spacing={2}>
        <Button value="close" variant="outlined" onClick={closeModal}>Cancel</Button>
        <Button variant="contained">Submit</Button>
    </Stack>
  )
}

export default StudentSubmit