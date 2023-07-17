import { read } from "fs"


interface Props {

}

const UploadFileButton:React.FC<Props> = (props) => {

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
              cohort:currLineArr[2],
              completedCourses:currLineArr[3]
            })
          })
          console.log(data)
        }
      })
      reader.readAsText(file)
    }
  }

  return (
    <input type="file" onChange={fileChangeHandler} accept=".csv"></input>
  )
}

export default UploadFileButton