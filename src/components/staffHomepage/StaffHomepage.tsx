import { useState } from "react";
import StudentCards from "../common/StudentCards"
import CreateStudentsModal from "../common/CreateStudentsModal";



const StaffHomepage = () => {

    const [studentModal,setStudentModal] = useState(false)

    return(<>
        <StudentCards setStudentModal={setStudentModal}/>
         {studentModal && <CreateStudentsModal/>}
    </>)
}

export default StaffHomepage