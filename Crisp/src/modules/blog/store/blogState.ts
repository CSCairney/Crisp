import { blogState } from "../types/blogs";

export function createInitialBlogState(): blogState {
  return {
      isLoading: false,
      error: "",
      blogs: []
  };
}
