import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialUserState } from "./userState";
import { authenticationViewMode } from "../contants/login";
import { userInfo, userLogin, userState } from "../types/users";

const teamSlice = createSlice({
    name: "userState",
    initialState: createInitialUserState(),
    reducers: {
        setUserState: (state, action: PayloadAction<userState>) => {
            state.activeUserId = action.payload.activeUserId;
            state.users = action.payload.users;
            state.viewMode = action.payload.viewMode;
        },
        setUser: (state, action: PayloadAction<userInfo>) => {
            state.users.push(action.payload);
        },
        setUsers: (state, action: PayloadAction<userInfo[]>) => {
            state.users = action.payload;
        },
        getUser: (state, action: PayloadAction<string>) => {
            state.users.forEach((user) => {
                if (user.username === action.payload) {
                    return user;
                }
                return null;
            })
        },
        getUsers: (state) => {
            state.users;
        },
        authUser: (state, action: PayloadAction<userLogin>) => {
            state.users.forEach((user) => {
                if (user.username === action.payload.username && user.password === action.payload.password) {
                    state.activeUserId = user.id; 
                    return user;
                }
                return null;
            })
        },
        logoutActiveUser: (state) => {
            state.activeUserId = "";
        },
        setViewMode: (state, action: PayloadAction<authenticationViewMode>) => {
           state.viewMode = action.payload;
        }
    }
})

export default teamSlice;