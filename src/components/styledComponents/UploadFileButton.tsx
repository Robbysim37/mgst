import {useState} from "react"
import { NewStudentInfo,Student } from "../../typeScriptDataTypes"
import {Button,Stack} from "@mui/material"
import { useAppDispatch } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"


import axios from "axios"

interface Props {

}

const UploadFileButton:React.FC<Props> = (props) => {

  const [excelData,setExcelData] = useState<Array<NewStudentInfo>>()
  const dispatch = useAppDispatch()

  const fileChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files != null) {
      const reader = new FileReader()
      const file = e.target.files[0]
      reader.addEventListener("load",()=>{
        if(reader.result != null){
          const lineArr = (reader.result as string).split("\r\n")
          const data = lineArr.map((currLine) => {
            const currLineArr = currLine.split(",")
            return({
              lastName:currLineArr[0],
              firstName:currLineArr[1],
              cohort:parseInt(currLineArr[2]),
              completedCourses:currLineArr[3]
            })
          })
          console.log(data)
          setExcelData(data)
        }
      })
      reader.readAsText(file)
    }
  }

  const submitExcelDataHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    axios.post('http://localhost:8000/newStudents',excelData)
    .then(response => {
      axios.get<Array<Student>>("http://localhost:8000")
      .then(promise => {
          dispatch(updateStudentList(promise.data))
      })
      console.log(response)
    })
    .catch(response => {
      console.log(response)
    });
  }

  return (
    <Stack>
      <input type="file" onChange={fileChangeHandler} accept=".csv"></input>
      <Button onClick={submitExcelDataHandler} variant="contained">Submit</Button>
    </Stack>
  )
}

export default UploadFileButton