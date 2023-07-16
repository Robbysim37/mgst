import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Student,BasicStudentInfo} from "../../typeScriptDataTypes"

export interface studentInitialState {
    students: Array<Student> | null
}

const initialState: studentInitialState = {
    students: null
}

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        updateStudentList: (state,action: PayloadAction<Array<Student>>) => {
            state.students = action.payload
        },
        updateStudent: (state,action: PayloadAction<BasicStudentInfo>) => {
            if(state.students){
                state.students = state.students.map((currStudent) => {
                    if(currStudent.username === action.payload.username){
                        currStudent.firstName = action.payload.firstName
                        currStudent.lastName = action.payload.lastName
                        currStudent.cohort = action.payload.cohort
                    }
                    return currStudent
                })
            }
        }
    },
})

export default studentSlice.reducer
export const { updateStudentList,updateStudent } = studentSlice.actions