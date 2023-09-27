import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StaffUserObj } from "../../typeScriptDataTypes"

interface userInitialState {
    user: StaffUserObj | null
}

const initialState: userInitialState = {
    user: null
}

export const userSlice = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{
        storeUserToState: (state,action:PayloadAction<StaffUserObj>) => {
            state.user = action.payload
        },
        removePasswordReset: (state,action:PayloadAction<boolean>) => {
            if(state.user){
               state.user.needsPasswordReset = action.payload
            }
        }
    }
})

export const {storeUserToState,removePasswordReset} = userSlice.actions