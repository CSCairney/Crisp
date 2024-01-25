export type blog = {
    blog_id: number,
    title: string,
    content: string,
    user_id: number,
    rating: number,
    upcote_counter: number,
    tags: string[],
    comments: string[]
}

export type blogState = {
    isLoading: boolean,
    error: string,
    blogs: blog[]
}