import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Post } from '../data';
import LikedButton from './LikedButton';

interface Props {
   post: Post;
}

export default function PostCard(props: Props) {
    return (
        <Stack spacing={2}>
            <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>{props.post.title}</Typography>
                    <Typography variant="body1">{props.post.content}</Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>By {props.post.author}</Typography>
                     <LikedButton />
                </CardContent>
            </Card>
        </Stack>
    );
}
