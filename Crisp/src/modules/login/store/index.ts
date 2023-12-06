import userSlice from "./userSlice";

export const {
    setViewMode,
    setUser,
    clearUser,
    setUserState,
    setUserJWT,
    setCurrentLocation
} = userSlice.actions;

export default userSlice.reducer;