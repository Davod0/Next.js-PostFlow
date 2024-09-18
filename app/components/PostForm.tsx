import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StorePostInDb } from "../action";
import { mockedPosts } from "../data";
import { usePost } from "./PostProvider";

export const PostSchema = z.object({
    title: z.string().min(3).max(100, {message: "not a valid tittle"}),
    content: z.string().min(10).max(1000, {message: "post content has to be at least 10 words"}),
    author: z.string().min(3).max(100, {message: "author's name has to contain at least 3 alphabets"}),
})

export type Post = z.infer<typeof PostSchema>

export function PostForm(){

    const { updatePostList } = usePost();

    const form = useForm<Post>({
      resolver: zodResolver(PostSchema),
      mode: "onBlur"
    });

    const registerPost = async (data: Post) => {
        const newPost = {
            id: mockedPosts.length + 1,
            title: data.title,
            content: data.content,
            author: data.author,
        };
        updatePostList(newPost);
        await StorePostInDb(newPost);
    };
    

return (
    <Grid2 container spacing={4} sx={{ padding: '2rem' }}>
        <Stack component="form" gap={4} onSubmit={form.handleSubmit(registerPost)}
                sx={{ 
                    padding: '2rem', 
                    backgroundColor: 'background.paper', 
                    boxShadow: 3, 
                    borderRadius: 2 
                }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Add a New Post
                </Typography>
                <TextField label="Title" variant="outlined" {...form.register("title")}
                    error={Boolean(form.formState.errors.title)}
                    helperText={form.formState.errors.title?.message}
                    fullWidth
                />
                <TextField label="Content" variant="outlined" {...form.register("content")}
                    error={Boolean(form.formState.errors.content)}
                    helperText={form.formState.errors.content?.message}
                    fullWidth
                    multiline
                    rows={4}
                />
                <TextField label="Author" variant="outlined" {...form.register("author")}
                    error={Boolean(form.formState.errors.author)}
                    helperText={form.formState.errors.author?.message}
                    fullWidth
                />
                <Button variant="contained" color="primary" type="submit" size="large"
                    sx={{ mt: 2, alignSelf: 'center', width: '50%' }}>
                    Add
                </Button>
            </Stack>
    </Grid2>
);
}