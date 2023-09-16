import { StudentCSVObj } from "../typeScriptDataTypes"


export const stringBuilder = (students:[StudentCSVObj]) => {
    let result = ""
    students.forEach(currStudent => {
        result += `${currStudent.firstName},${currStudent.lastName},${currStudent.username},${currStudent.password}\n`
    })
    return result
}