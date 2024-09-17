import { Stack, Typography } from "@mui/material";
import { Post } from "../data";


interface Props {
    post: Post;
}

export default function PostCard(props: Props) {
    return (
       <Stack key={props.post.id} spacing={2}>
          <Typography variant="h5">{props.post.title}</Typography>
          <Typography variant="body1">{props.post.content}</Typography>
          <Typography variant="body2">{props.post.author}</Typography>
       </Stack>
    );
}