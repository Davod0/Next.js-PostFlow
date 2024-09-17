import { Typography } from "@mui/material";
import PostCard from "./components/PostCard";
import { posts } from "./data";

export default function Home() {

    const postsList = posts;

  return (
       <main>
        <Typography variant="h1">Welcome to my blog posts page</Typography>

        {postsList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
       </main>
  );
}
