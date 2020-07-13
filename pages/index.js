import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import FeatureArticle from '../components/FeatureArticle';
import { loadBlogPosts, loadLastestPosts } from '../loader';
import { format } from 'fecha';


const Home = ({ posts, lastestPosts }) => {
  return (
    <Layout>
      <Profile />
      <div className={styles.feature_article_container}>
        <div className={styles.feature_article}>
          <div className={styles.feature_title}>
            <h3>LATESTED ARTICLES</h3>
          </div>
        </div>
        <div className={styles.image_list_container}>
          {lastestPosts.map((post, index) =>
            <FeatureArticle post={post} key={index} />
          )}
        </div>
      </div>

      <div className={styles.read_list_container}>
        {posts.map((post, index) => (
          <div className={styles.read_container} key={index}>
            <h4>{post.datePublished
              ? format(new Date(post.datePublished), 'MMMM Do, YYYY')
              : ''}</h4>
            <p>{post.title}</p>
            <small>1 min read</small>
          </div>
        ))}
        <div className={styles.loadmore}>
          <a>load More</a>
        </div>
      </div>

    </Layout>
  )
}


export default Home;


export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  const lastestPosts = await loadLastestPosts();
  const props = { posts, lastestPosts };
  return { props };
};
