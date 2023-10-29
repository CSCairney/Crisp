import userSlice from "./userSlice";

export const {
    setViewMode,
    setUser,
    clearUser,
    setUserState,
    setUserJWT
} = userSlice.actions;

export default userSlice.reducer;