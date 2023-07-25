import {useState} from "react"
import { NewStudentInfo,Student } from "../../typeScriptDataTypes"
import {Button,Stack,Box} from "@mui/material"
import { useAppDispatch } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"


import axios from "axios"

interface Props {
  setStudentModal:Function
}

const UploadFileData:React.FC<Props> = (props) => {

  const [excelData,setExcelData] = useState<Array<NewStudentInfo>>()
  const dispatch = useAppDispatch()

  const closeModal = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.setStudentModal(false)
  }

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
    <Stack height={"100%"} width={"100%"} alignItems={"center"} justifyContent={"space-around"}>
        <input style={{alignSelf:"center",marginLeft:"20%"}} type="file" onChange={fileChangeHandler} accept=".csv"></input>
        <Box width={"80%"} height={"40%"}>
        </Box>
      <Stack direction={"row"} spacing={2}>
      <Button onClick={closeModal} variant="outlined">Cancel</Button>
      <Button onClick={submitExcelDataHandler} disabled={!excelData} variant="contained">Submit</Button>
      </Stack>
    </Stack>
  )
}

export default UploadFileData