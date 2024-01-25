import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { blogState, blog } from "../types/blogs"
import { createInitialBlogState } from "./blogState";

const overlaySlice = createSlice({
    name: "overlayState",
    initialState: createInitialBlogState(),
    reducers: {
    setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload
    },
    setBlogState: (state, action: PayloadAction<blogState>) => {
        state.blogs = action.payload.blogs;
        state.error = action.payload.error;
        state.isLoading = action.payload.isLoading;
    },
    setBlogs: (state, action: PayloadAction<blog[]>) => {
        state.blogs = action.payload
    },
    removeBlog: (state, action: PayloadAction<number>) => {
        state.blogs = state.blogs.filter((blog) => blog.blog_id != action.payload)
    }
    }})

export default overlaySlice;