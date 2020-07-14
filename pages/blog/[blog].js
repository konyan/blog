import BlogPost from '../../components/BlogPost';
import glob from 'glob';
import { loadPost } from '../../loader';

const Blog = ({ post }) => (
  <BlogPost post={post} />
)

export default Blog;

export const getStaticPaths = () => {
  const blogs = glob.sync('./md/blog/*.md');
  const slugs = blogs.map((file) => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const post = await loadPost(`blog/${params.blog}.md`);
  return { props: { post } };
}


