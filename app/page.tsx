import { Stack, Typography } from "@mui/material";
import { posts } from "./data";

export default function Home() {

  return (
    <main>
      {posts.map((post) => (
          <Stack spacing={2} key={post.id}>
              <Typography key={post.id} variant="h4">
                {post.title}
              </Typography>
              <Typography key={post.id} variant="body1">
                {post.content}
              </Typography>
          </Stack>
            ))}
    </main>    
    
  );
}
