import { getPosts } from '@/app/lib/data';

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="block">
            <a href={`/posts/${post.id}`}>
              <span>{post.title}</span>

              <span>{post.publish_date}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
