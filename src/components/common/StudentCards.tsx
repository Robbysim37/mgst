import {useEffect} from "react"
import { studentList } from "../../dummyData/fakeStudents"
import StudentCard from "../styledComponents/StudentCard"
import CardBackground from "../styledComponents/CardBackground"
import StudentSearch from "../styledComponents/StudentSearch"
import { filterStudents } from "../../logic/filterLogic"
import axios, {AxiosResponse} from "axios"
import { useAppDispatch } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"

import { useState } from "react"


const StudentCards = () => {

    const dispatch = useAppDispatch()

    type Student = {
        firstName:string,
        lastName:string,
        schedule:string,
        grade:number,
        cohort:number
    }

    const [filters,setFilters] = useState({
        firstName:"",
        lastName:"",
        grade:"0"
    })

    useEffect(() => {
        axios.get<Array<Student>>("http://localhost:8000")
        .then(promise => {
            console.log(promise.data)
            dispatch(updateStudentList(promise))
        })
    })

    return(
        <CardBackground>
            <StudentSearch filters={filters} setFilters={setFilters}/>
            {/* div below this line is meant to create space to stop
                cards from getting covered by searchbar */}
            <div style={{height:"10%",width:"100%"}}></div>
            {filterStudents(studentList,filters).map(currStudent => {return(
                <StudentCard key={Math.random()} student={currStudent} />
            )})}
        </CardBackground>
    )
}

export default StudentCards