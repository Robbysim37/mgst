import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const isLoadingSlice = createSlice({
    name:"isLoading",
    initialState:false,
    reducers: {
        toggleIsLoading: (state, action:PayloadAction<boolean>) => {
            console.log("payload = " + action.payload)

            const test = action.payload === true ? state = true : state = false

            console.log("outcome = " + test)

            return test
        }
    }
})

export const {toggleIsLoading} = isLoadingSlice.actions