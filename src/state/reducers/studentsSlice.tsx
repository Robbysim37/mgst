import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Student} from "../../typeScriptDataTypes"

export interface studentInitialState {
    students: Array<Student>
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