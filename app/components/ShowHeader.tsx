    import { Box, Typography } from '@mui/material';

    export default function ShowHeader() {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                padding: 2, 
                width: '100%',
            }}>
                <Typography variant="h3" component="h1" sx={{
                    color: '#333', 
                    fontWeight: 700,
                    textAlign: 'center', 
                    maxWidth: '80%', 
                    '@media (max-width: 600px)': {
                        fontSize: '2rem',
                    },
                }}>
                    Welcome to my blog posts page
                </Typography>
            </Box>
        );
    }
