
export interface Blog {
  id: number;
  title: string;
  image: string;
  date: string;
  reactions: number;
  comments: number;
  description: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    image: "https://picsum.photos/1200/400?random=1",
    date: "Aug 15, 2025",
    reactions: 120,
    comments: 15,
    description:
      "Web development is rapidly evolving with modern frameworks, AI integration, and cloud-native solutions leading the way...",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Frameworks in 2025",
    image: "https://picsum.photos/1200/400?random=2",
    date: "Aug 10, 2025",
    reactions: 95,
    comments: 22,
    description:
      "JavaScript frameworks have exploded in popularity, providing developers with powerful tools for faster and scalable apps...",
  },
  {
    id: 3,
    title: "Why TypeScript is Taking Over",
    image: "https://picsum.photos/1200/400?random=3",
    date: "Aug 5, 2025",
    reactions: 150,
    comments: 30,
    description:
      "TypeScript has become a standard for modern projects, improving maintainability and reducing bugs with strong typing...",
  },
  {
    id: 4,
    title: "Exploring the Power of React 19",
    image: "https://picsum.photos/1200/400?random=4",
    date: "Jul 25, 2025",
    reactions: 200,
    comments: 40,
    description:
      "React 19 introduces server components, enhanced suspense features, and better performance for modern web apps...",
  },
  {
    id: 5,
    title: "The Rise of AI in Software Development",
    image: "https://picsum.photos/1200/400?random=5",
    date: "Jul 20, 2025",
    reactions: 180,
    comments: 35,
    description:
      "AI is not just for chatbots anymore. Developers are using AI for code completion, bug fixing, and automated testing...",
  },
  {
    id: 6,
    title: "Cloud Computing Trends in 2025",
    image: "https://picsum.photos/1200/400?random=6",
    date: "Jul 10, 2025",
    reactions: 140,
    comments: 28,
    description:
      "Cloud-native development, serverless computing, and hybrid cloud strategies are shaping the way companies scale...",
  },
  {
    id: 7,
    title: "The Importance of Cybersecurity",
    image: "https://picsum.photos/1200/400?random=7",
    date: "Jul 5, 2025",
    reactions: 110,
    comments: 18,
    description:
      "With increasing threats, cybersecurity has become an essential part of every software project...",
  },
  {
    id: 8,
    title: "Mobile App Development in 2025",
    image: "https://picsum.photos/1200/400?random=8",
    date: "Jun 28, 2025",
    reactions: 170,
    comments: 25,
    description:
      "Cross-platform tools like Flutter and React Native continue to dominate the mobile app development space...",
  },
  {
    id: 9,
    title: "The Role of DevOps in Modern Projects",
    image: "https://picsum.photos/1200/400?random=9",
    date: "Jun 20, 2025",
    reactions: 130,
    comments: 20,
    description:
      "DevOps practices like CI/CD, monitoring, and automation are crucial for delivering software efficiently...",
  },
  {
    id: 10,
    title: "Edge Computing: The Next Big Thing",
    image: "https://picsum.photos/1200/400?random=10",
    date: "Jun 10, 2025",
    reactions: 160,
    comments: 27,
    description:
      "Edge computing reduces latency and improves efficiency by processing data closer to where it is generated...",
  },
];
