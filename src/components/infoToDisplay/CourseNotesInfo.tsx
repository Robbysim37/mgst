import {useState} from "react"
import { TextField,Stack,Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../state/store'
import { editNotes } from "../../state/reducers/studentsSlice"

interface Props {
  notes:string,
  yearIndex: number;
  triIndex: number;
  courseIndex: number;
}

const CourseNotesInfo:React.FC<Props> = (props) => {

  const {studentUsername} = useParams()
  const dispatch = useAppDispatch()
  const [note,setNote] = useState(props.notes)

  const notesChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }

  const saveNotesClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(editNotes({
      username:studentUsername,
      notes:note,
      yearIndex: props.yearIndex,
      trimesterIndex: props.triIndex,
      courseIndex: props.courseIndex
    }))
  }

  return (
    <Stack height={"70%"} width={"90%"} 
    alignItems={"center"} justifyContent={"space-around"}>
        <TextField label={"notes"} value={note} onChange={notesChangeHandler} multiline></TextField>
        <Button variant='contained' onClick={saveNotesClickHandler}>Save Notes</Button>
    </Stack>
  )
}

export default CourseNotesInfo