import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Student,BasicStudentInfo,CourseIndexCode} from "../../typeScriptDataTypes"

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
        },
        updateCourseCompletion: (state,action: PayloadAction<Student>) => {
            if(state.students && action.payload.username){
                state.students = state.students.map((currStudent) => {
                    if(currStudent.username === action.payload.username){
                        currStudent = action.payload
                    }
                    return currStudent
                })
            }
        },
        deleteStudent: (state,action:PayloadAction<Student>) => {
            if(state.students && action.payload.username){
                state.students = state.students.filter((currStudent) => {
                    if(currStudent.username !== action.payload.username){
                        return true
                    }
                    return false
                })
            }
        },
        swapCourses: (state,action:PayloadAction<CourseIndexCode>) => {
            if(state.students && action.payload.username){

            const code1 = action.payload.course1.split("")
            const code2 = action.payload.course2.split("")

            state.students = state.students.map((currStudent) => {
                if(currStudent.username === action.payload.username){

                    const course1 = currStudent
                    .schedule[parseInt(code1[0])][parseInt(code1[1])][parseInt(code1[2])]

                    const course2 = currStudent
                    .schedule[parseInt(code2[0])][parseInt(code2[1])][parseInt(code2[2])]

                    currStudent.schedule[parseInt(code1[0])][parseInt(code1[1])][parseInt(code1[2])]
                    =course2

                    currStudent.schedule[parseInt(code2[0])][parseInt(code2[1])][parseInt(code2[2])]
                    =course1
                    return currStudent
                }
                return currStudent
            })
        }}
    },
})

export default studentSlice.reducer
export const { 
    updateStudentList,
    updateStudent,
    updateCourseCompletion,
    swapCourses,
    deleteStudent } = studentSlice.actions