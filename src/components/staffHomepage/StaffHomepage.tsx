import { useState,useEffect } from "react";
import StudentCards from "./StudentCards"
import CreateStudentsModal from "./CreateStudentsModal";
import { useAppSelector } from "../../state/store"
import ResetPasswordModal from "./ResetPasswordModal"



const StaffHomepage = () => {

    const [studentModal,setStudentModal] = useState(false)
    const user = useAppSelector(state => state.userSlice.user)
    
    return(<>
        <StudentCards setStudentModal={setStudentModal}/>
         {studentModal && <CreateStudentsModal setStudentModal={setStudentModal}/>}
         {user && user.needsPasswordReset && <ResetPasswordModal/>}
    </>)
}

export default StaffHomepage