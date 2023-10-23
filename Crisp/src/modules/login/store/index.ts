import userSlice from "./userSlice";

export const {
    getUser,
    getUsers,
    setViewMode,
    setUser,
    setUsers,
    authUser
} = userSlice.actions;

export default userSlice.reducer;