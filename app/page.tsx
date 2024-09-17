"use client"

import { Box } from "@mui/material";
import PostCard from "./components/PostCard";
import { PostForm } from "./components/PostForm";
import { mockedPosts } from "./data";

export default function Home() {
  
  // Måste fixas så att när nya posts addas i listan genom PostForm ska de visas direkt här i start sidan
  return (
       <Box sx={{ paddingTop:'100px'}}>
        <PostForm />
        {mockedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
       </Box>
  );
}
1