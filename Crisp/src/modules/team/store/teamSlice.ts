import { createSlice } from "@reduxjs/toolkit";
import { createInitialTeamState } from "./teamState";

const teamSlice = createSlice({
    name: "teamState",
    initialState: createInitialTeamState(),
    reducers: {
        getTeam: (state) => {
            state.info.team
        },
        getContactInformation: (state) => {
            state.info.contact
        }
    }
})

export default teamSlice;