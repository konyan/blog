import BlogPost from '../../components/BlogPost';
import glob from 'glob';
import { loadPost, loadLastestPosts } from '../../loader';
import Layout from "../../components/Layout";
import styles from './blog.module.scss'
import Link from 'next/link'
import { format } from 'fecha';

const Blog = ({ post, posts }) => (
  <Layout>
    <BlogPost post={post} />
    <div className={styles.related}>
      <h4 className={styles.related__like}>You might also like...</h4>
      <ul className={styles.read_list_container}>
        {posts.map((post, index) => (
          <Link href={`/${post.path}`}>
            <li className={styles.read_container} key={index}>
              <h4>{post.datePublished
                ? format(new Date(post.datePublished), 'MMMM Do, YYYY')
                : ''}</h4>
              <p>{post.title}</p>
              <small>1 min read</small>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </Layout>
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
  const lastestPosts = await loadLastestPosts();

  return { props: { post, posts: lastestPosts } };
}


