import blogSlice from "./blogSlice";

export const {
    setBlogState,
    setError,
    setLoading,
    setBlogs,
    removeBlog
} = blogSlice.actions;

export default blogSlice.reducer