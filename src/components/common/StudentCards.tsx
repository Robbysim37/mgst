import {useEffect} from "react"
import StudentCard from "../styledComponents/StudentCard"
import CardBackground from "../styledComponents/CardBackground"
import StudentSearch from "../styledComponents/StudentSearch"
import { filterStudents } from "../../logic/filterLogic"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"
import {Student} from "../../typeScriptDataTypes"

import { useState } from "react"

interface Props {
    children?:React.ReactNode
    setStudentModal: Function
}

const StudentCards:React.FC<Props> = (props) => {

    const dispatch = useAppDispatch()
    const students = useAppSelector(state => state.students.students)

    const [filters,setFilters] = useState({
        firstName:"",
        lastName:"",
        grade:"0"
    })

    useEffect(() => {
        axios.get<Array<Student>>("http://localhost:8000")
        .then(promise => {
            dispatch(updateStudentList(promise.data))
        })
    },[dispatch])

    return(
        <CardBackground>
            <StudentSearch filters={filters}
            setFilters={setFilters}
            setStudentModal={props.setStudentModal} />

            {/* div below this line is meant to create space to stop
            cards from getting covered by searchbar */}
            <div style={{height:"10%",width:"100%"}}></div>

            {filterStudents(students,filters).map(currStudent => {return(
                <StudentCard key={Math.random()} student={currStudent} />
            )})}
        </CardBackground>
    )
}

export default StudentCards