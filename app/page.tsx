"use client"

import { Box } from "@mui/material";
import PostCard from "./components/PostCard";
import { posts } from "./data";

export default function Home() {

  const postsList = posts;

  return (
       <Box sx={{ paddingTop:'100px'}}>
        {postsList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
       </Box>
  );
}
1