import { useState } from "react";
import StudentCards from "./StudentCards"
import CreateStudentsModal from "./CreateStudentsModal";



const StaffHomepage = () => {

    const [studentModal,setStudentModal] = useState(false)
    
    return(<>
        
        <StudentCards setStudentModal={setStudentModal}/>
         {studentModal && <CreateStudentsModal setStudentModal={setStudentModal}/>}
    </>)
}

export default StaffHomepage