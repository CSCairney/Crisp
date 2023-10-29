import userSlice from "./userSlice";

export const {
    getUser,
    getUsers,
    setViewMode,
    setUser,
    setUsers,
    setUserState,
    logoutActiveUser,
    setUserJWT
} = userSlice.actions;

export default userSlice.reducer;