import { mockedPosts, Post } from "./data";


export function StorePost(post: Post) {
    mockedPosts.push(post);
} 