import teamSlice from "./teamSlice";

export const {
    getTeam,
    getContactInformation
} = teamSlice.actions;

export default teamSlice.reducer;