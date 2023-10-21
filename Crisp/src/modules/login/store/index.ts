import userSlice from "./userSlice";

export const {
    getUser,
    getUsers,
    setViewMode,
    setUser,
    setUsers
} = userSlice.actions;

export default userSlice.reducer;