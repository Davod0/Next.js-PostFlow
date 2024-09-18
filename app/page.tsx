"use client"

import { Grid2 } from "@mui/material";
import PostCard from "./components/PostCard";
import { PostForm } from "./components/PostForm";
import { usePost } from "./components/PostProvider";

export default function Home() {

  const {postList} = usePost();

  return (
    <Grid2 container spacing={4} paddingTop={2}>
      <Grid2>
        <PostForm />
      </Grid2>

      <Grid2>
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid2>
    </Grid2>
)};
