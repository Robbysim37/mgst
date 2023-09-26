import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./reducers/studentsSlice";
import { isLoadingSlice } from "./reducers/isLoadingSlice";
import { userSlice } from "./reducers/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store=configureStore({
    reducer:{
        students:studentSlice.reducer,
        isLoading:isLoadingSlice.reducer,
        userSlice:userSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
