import { z } from "zod";


export const PostSchema = z.object({
    title: z.string().min(3).max(100, {message: "not a valid tittle"}),
    content: z.string().min(10).max(1000, {message: "post content has to be at least 10 words"}),
    author: z.string().min(3).max(100, {message: "author's name has to contain at least 3 alphabets"}),
})

export type Post = z.infer<typeof PostSchema>

