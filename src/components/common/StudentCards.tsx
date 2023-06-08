import { studentList } from "../../dummyData/fakeStudents"
import StudentCard from "../styledComponents/StudentCard"
import CardBackground from "../styledComponents/CardBackground"
import StudentSearch from "../styledComponents/StudentSearch"
import { filterStudents } from "../../logic/filterLogic"

import { useState } from "react"

const StudentCards = () => {

    const [filters,setFilters] = useState({
        firstName:"",
        lastName:"",
        grade:"0"
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