import { marked } from 'marked';

import { getPost } from '@/app/lib/data';

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Params }) {
  const postId = params.id;
  const post = await getPost(postId);
  const markdown = post.raw_content;
  const html = marked.parse(markdown);

  return (
    <div>
      <article className="prose w-full max-w-none">
        <h1 className="text-center">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </article>
    </div>
  );
}
