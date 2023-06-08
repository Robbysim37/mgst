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
    grade:Number
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
        
    }

}


export {
    filterStudents
}