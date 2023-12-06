import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialUserState } from "./userState";
import { authenticationViewMode } from "../contants/login";
import { userInfo, userState } from "../types/users";
import { LatLng } from "leaflet";

const teamSlice = createSlice({
    name: "userState",
    initialState: createInitialUserState(),
    reducers: {
        setUserState: (state, action: PayloadAction<userState>) => {
            state.user = action.payload.user;
            state.viewMode = action.payload.viewMode;
            state.accessToken = action.payload.accessToken;
        },
        setUser: (state, action: PayloadAction<userInfo>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = {
                age: 0,
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                role: "",
                username: "",
            };
            state.accessToken = "";
        },
        setViewMode: (state, action: PayloadAction<authenticationViewMode>) => {
           state.viewMode = action.payload;
        },
        setUserJWT: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        setCurrentLocation: (state, action: PayloadAction<LatLng>) => {
            console.log("setting current location", action.payload)
            state.currentLocation = action.payload;
        }
    }
})

export default teamSlice;