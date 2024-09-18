"use client"

import { Box } from "@mui/material";
import PostCard from "./components/PostCard";
import { PostForm } from "./components/PostForm";
import { usePost } from "./components/PostProvider";

export default function Home() {

  const {postList} = usePost();

  return (
       <Box sx={{ paddingTop:'100px'}}>
        <PostForm />
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
       </Box>
  );
}
1