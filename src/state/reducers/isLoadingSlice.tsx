import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const isLoadingSlice = createSlice({
    name:"isLoading",
    initialState:false,
    reducers: {
        toggleIsLoading: (state, action:PayloadAction<boolean>) => {
            return action.payload === true ? state = true : state = false
        }
    }
})

export const {toggleIsLoading} = isLoadingSlice.actions