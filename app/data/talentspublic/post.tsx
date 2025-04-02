import { Post } from "@/types";
export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      role: "Senior Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    content:
      "Just completed an amazing UX workshop! Here are my key takeaways on designing for accessibility...",
    likes: 124,
    comments: 23,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    author: {
      name: "David Chen",
      role: "Full Stack Developer",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    },
    content:
      "Excited to share that I've just launched my new open-source project! Check it out on GitHub...",
    likes: 89,
    comments: 15,
    timeAgo: "5 hours ago",
  },
];
