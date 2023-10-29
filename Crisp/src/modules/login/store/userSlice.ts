import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialUserState } from "./userState";
import { authenticationViewMode } from "../contants/login";
import { userInfo, userState } from "../types/users";

const teamSlice = createSlice({
    name: "userState",
    initialState: createInitialUserState(),
    reducers: {
        setUserState: (state, action: PayloadAction<userState>) => {
            state.user = action.payload.user;
            state.viewMode = action.payload.viewMode;
        },
        setUser: (state, action: PayloadAction<userInfo>) => {
            state.user.info = action.payload;
        },
        clearUser: (state) => {
            state.user.info = {
                age: 0,
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                role: "",
                username: "",
            };
            state.user.accessToken = "";
        },
        setViewMode: (state, action: PayloadAction<authenticationViewMode>) => {
           state.viewMode = action.payload;
        },
        setUserJWT: (state, action: PayloadAction<string>) => {
            state.user.accessToken = action.payload;
        }
    }
})

export default teamSlice;