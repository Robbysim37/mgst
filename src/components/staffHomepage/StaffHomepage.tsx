import { useState } from "react";
import { useAppSelector } from "../../state/store";
import StudentCards from "./StudentCards"
import CreateStudentsModal from "./CreateStudentsModal";
import LoadingWheel from "../styledComponents/LoadingWheel"



const StaffHomepage = () => {

    const isLoading = useAppSelector(state => state.isLoading)

    const [studentModal,setStudentModal] = useState(false)
    

    return(<>
        {isLoading && <LoadingWheel/>}
        <StudentCards setStudentModal={setStudentModal}/>
         {studentModal && <CreateStudentsModal setStudentModal={setStudentModal}/>}
    </>)
}

export default StaffHomepage