import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Блог</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <span className="text-gray-500 ml-2">{post.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
