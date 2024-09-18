"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { mockedPosts, Post } from "../data";

interface ContextValue{
    updatePostList: (post: Post) => void;
    postList: Post[];
}

export const PostContext = createContext<ContextValue>({} as ContextValue);

export default function PostProvider(props: PropsWithChildren){
    const [postList, setPosts] = useState<Post[]>(mockedPosts);

    const updatePostList = (newPost: Post) => {
        mockedPosts.unshift(newPost);
        setPosts([...mockedPosts]);
    };

    return (
        <PostContext.Provider value={{updatePostList, postList}}>
            {props.children}
        </PostContext.Provider>
    );
}

export const usePost = () => useContext(PostContext);
