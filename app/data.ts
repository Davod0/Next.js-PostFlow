export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

export const mockedPosts: Post[] = [
    {
        id: 1,
        title: "My First Blog Post",
        content: "This is my very first blog post! I'm excited to share my thoughts with the world.",
        author: "Emily Wilson"
    },
    {
        id: 2,
        title: "What I Learned This Week",
        content: "This week I learned a lot about TypeScript and how to use interfaces. It was really interesting!",
        author: "David Lee"
    },
    {
        id: 3,
        title: "My Favorite Recipe",
        content: "Here's my absolute favorite recipe for chocolate cake. It's moist and delicious, perfect for dessert or coffee break.",
        author: "Sarah Johnson"
    },
    {
        id: 4,
        title: "Traveling Through Europe",
        content: "I recently returned from an amazing trip through Europe. The history, food, and landscapes were incredible!",
        author: "Michael Brown"
    },
    {
        id: 5,
        title: "Tips for Learning Programming",
        content: "As someone who's relatively new to programming, I wanted to share some tips that helped me learn faster and stay motivated.",
        author: "Olivia Martin"
    }
];
