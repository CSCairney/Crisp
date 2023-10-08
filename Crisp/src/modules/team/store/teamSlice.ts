import { createSlice } from "@reduxjs/toolkit";
import { createInitialTeamState } from "./teamState";

const teamSlice = createSlice({
    name: "teamState",
    initialState: createInitialTeamState(),
    reducers: {
        getTeam: (state) => {
            state.team
        },
        getContactInformation: (state) => {
            state.contact
        }
    }
})

export default teamSlice;