import userSlice from "./userSlice";

export const {
    getUser,
    getUsers
} = userSlice.actions;

export default userSlice.reducer;