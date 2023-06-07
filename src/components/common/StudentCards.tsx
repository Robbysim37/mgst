import { studentList } from "../../dummyData/fakeStudents"
import StudentCard from "../styledComponents/StudentCard"
import CardBackground from "../styledComponents/CardBackground"
import StudentSearch from "../styledComponents/StudentSearch"

const StudentCards = () => {
    return(
        <CardBackground>
            <StudentSearch/>
            {/* div below this line is meant to create space to stop
                cards from getting covered by searchbar */}
            <div style={{height:"10%",width:"100%"}}></div>
            {studentList.map(currStudent => {return(
                <StudentCard student={currStudent} />
            )})}
        </CardBackground>
    )
}

export default StudentCards