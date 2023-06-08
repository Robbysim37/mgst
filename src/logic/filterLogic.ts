type Student = {
    firstName:string,
    lastName:string,
    schedule:string,
    grade:number,
    cohort:number
}

type Filters = {
    firstName:String,
    lastName:String,
    grade:String
}

const filterStudents = (studentList:Array<Student>,filters:Filters) => {

    studentList.sort((a,b) => {
        if(a.lastName.toLowerCase() < b.lastName.toLowerCase()){
            return -1;
        }
        if(a.lastName.toLowerCase() > b.lastName.toLowerCase()){
            return 1;
        }
        return 0;
    })

    if(filters.firstName){
        studentList = studentList.filter(student => {
            if(student.firstName.toLowerCase()
            .includes(filters.firstName.toLowerCase())){
                return true
            }else{
                return false
            }
        })
    }

    if(filters.lastName){
        studentList = studentList.filter(student => {
            if(student.lastName.toLowerCase()
            .includes(filters.lastName.toLowerCase())){
                return true
            }else{
                return false
            }
        })
    }

    if(filters.grade !== "0"){
        studentList = studentList.filter(student => {
            if(student.grade.toString() === filters.grade){
                return true
            }else{
                return false
            }
        })
    }

    return studentList

}


export {
    filterStudents
}