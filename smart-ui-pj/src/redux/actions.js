import { FETCH_ALL_POSTS, WRITE_ALL_POSTS } from "./types";


export const allPostsFetchAction = {
    type:FETCH_ALL_POSTS
}
export const allPostsWriteAction = {
    type:WRITE_ALL_POSTS,
    payload:{allPosts:[123123], noData:false}
}