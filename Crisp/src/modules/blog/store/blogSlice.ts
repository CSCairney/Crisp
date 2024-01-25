import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { blogState } from "../types/blogs"
import { createInitialBlogState } from "./blogState";

const overlaySlice = createSlice({
    name: "overlayState",
    initialState: createInitialBlogState(),
    reducers: {
    setBlogState: (state, action: PayloadAction<blogState>) => {
        state.blogs = action.payload.blogs;
        state.error = action.payload.error;
        state.isLoading = action.payload.isLoading;
    }
    }})

export default overlaySlice;