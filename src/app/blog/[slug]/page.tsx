import { getPostBySlug } from "../../lib/posts";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage(props: PostPageProps) {
  const slug = props.params.slug;
  const post = await getPostBySlug(slug);

  const specialStyle = post.style === "special" ? "bg-yellow-50 p-6 rounded-lg" : "";

  return (
    <main className={`max-w-4xl mx-auto p-6 ${specialStyle}`}>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      <div
        className="prose max-w-none prose-img:rounded-lg prose-img:w-full prose-img:h-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
