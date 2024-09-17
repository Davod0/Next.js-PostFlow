"use client"

import PostCard from "./components/PostCard";
import ShowHeader from "./components/ShowHeader";
import { posts } from "./data";

export default function Home() {

  const postsList = posts;

  return (
       <main>
        {postsList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
       </main>
  );
}
