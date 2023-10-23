import userSlice from "./userSlice";

export const {
    getUser,
    getUsers,
    setViewMode,
    setUser,
    setUsers,
    authUser,
    setUserState,
    logoutActiveUser
} = userSlice.actions;

export default userSlice.reducer;