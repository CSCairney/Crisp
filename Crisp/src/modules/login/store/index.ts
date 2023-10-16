import userSlice from "./userSlice";

export const {
    getUser,
    getUsers,
    setViewMode
} = userSlice.actions;

export default userSlice.reducer;