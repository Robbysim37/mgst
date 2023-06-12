import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Student = {
    firstName:String,
    lastName:String,
    grade:Number,
    cohort:Number
}

export interface studentInitialState {
    students: Student[]
}

const initialState: studentInitialState = {
    students: []
}

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        updateStudentList: (state,action: PayloadAction<Array<Student>>) => {
            state.students = action.payload
        }
    },
})

export default studentSlice.reducer
export const { updateStudentList } = studentSlice.actions