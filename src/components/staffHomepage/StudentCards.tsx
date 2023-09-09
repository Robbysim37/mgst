import {useEffect} from "react"
import InfoCard from "../infoDisplayers/InfoCard"
import InfoCardContainer from "../infoDisplayers/InfoCardContainer"
import StudentSearch from "../styledComponents/StudentSearch"
import { filterStudents } from "../../logic/filterLogic"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../state/store"
import { updateStudentList } from "../../state/reducers/studentsSlice"
import {Student} from "../../typeScriptDataTypes"
import StudentCardInfo from "../infoToDisplay/StudentCardInfo"

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
        const username = window.sessionStorage.getItem("user")
        const token = window.sessionStorage.getItem("token")
        if(!students){
            axios.post<Array<Student>>("http://localhost:8000",{username,token})
            .then(promise => {
                dispatch(updateStudentList(promise.data))
            }).catch(error => {
                console.log(error)
            })
        }
    },[dispatch])

    return(
        <InfoCardContainer 
        component={"div"}
        className="container"
        height="90%"
        width="95%"
        justifyContent="flex-start"
        borderRadius="30px"
        backgroundColor = {"rgba(0,0,0,.5)"}
        >
            <StudentSearch filters={filters}
            setFilters={setFilters}
            setStudentModal={props.setStudentModal} />

            {/* div below this line is meant to create space to stop
            cards from getting covered by searchbar */}
            <div style={{height:"10%",width:"100%"}}></div>

            {students && filterStudents(students,filters).map(currStudent => {return(
                <InfoCard 
                key={Math.random()} 
                student={currStudent}
                height="20%"
                width="20%"
                className="studentCard">
                    <StudentCardInfo student={currStudent}/>
                </InfoCard>
            )})}
        </InfoCardContainer>
    )
}

export default StudentCards