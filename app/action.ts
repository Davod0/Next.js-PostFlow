"use server"

import { Post } from "./data";

export async function StorePostInDb(post: Post) {
    //Här ska datan skickas till servern
    return post;
} 