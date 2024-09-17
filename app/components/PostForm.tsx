import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StorePost } from "../action";
import { mockedPosts } from "../data";

export const PostSchema = z.object({
    title: z.string().min(3).max(100, {message: "not a valid tittle"}),
    content: z.string().min(10).max(1000, {message: "post content has to be at least 10 words"}),
    author: z.string().min(3).max(100, {message: "author's name has to contain at least 3 alphabets"}),
})

export type Post = z.infer<typeof PostSchema>

export function PostForm(){
    
    const form = useForm<Post>({
      resolver: zodResolver(PostSchema),
      mode: "onBlur"
    });

    const registerPost = (data: Post) => {
        const newPost = {
            id: mockedPosts.length + 1,
            title: data.title,
            content: data.content,
            author: data.author,
        };

        StorePost(newPost);
        mockedPosts.map((post) => {console.log(post);});
        };
    
    return(
        <Stack component="form" gap={4} onSubmit={form.handleSubmit(registerPost)}>
            <Typography variant="h3">Add a new post</Typography>

            <TextField label="title" {...form.register("title")} 
            error={Boolean(form.formState.errors.title)}
            helperText={form.formState.errors.title?.message}/>

            <TextField label="content" {...form.register("content")}
            error={Boolean(form.formState.errors.content)}
            helperText={form.formState.errors.content?.message}/>

            <TextField label="author" {...form.register("author")}
            error={Boolean(form.formState.errors.author)}
            helperText={form.formState.errors.author?.message}/>

            <Button variant="contained" type="submit">Register</Button>
      </Stack>
    );

}