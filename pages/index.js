import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import FeatureArticle from '../components/FeatureArticle';
import { loadBlogPosts, loadMarkdownFile } from '../loader';

const Home = ({ posts }) => {

  return (
    <Layout>
      <Profile />
      <div className={styles.feature_article_container}>
        <div className={styles.feature_article}>
          <div className={styles.feature_title}>
            <h3>LATESTED ARTICLES</h3>
          </div>
          <div className={styles.feature_button}>
            <a>&lt;</a>
            <a>&gt;</a>
          </div>
        </div>
        <div className={styles.image_list_container}>
          <FeatureArticle />
          <FeatureArticle />
          <FeatureArticle />
        </div>
      </div>

      <div className={styles.read_list_container}>
        {posts.map(post => {
          <div className={styles.read_container}>
            <h4>{post.datePublished
              ? format(new Date(post.datePublished), 'MMMM Do, YYYY')
              : ''}</h4>
            <p>{post.title}</p>
            <small>1 min read</small>
          </div>
        })}

        <div className={styles.read_container}>
          <h4>Feb 15</h4>
          <p>AI product management: Research, requirements and scope</p>
          <small>1 min read</small>
        </div>
        <div className={styles.read_container}>
          <h4>Feb 15</h4>
          <p>AI product management: Research, requirements and scope</p>
          <small>1 min read</small>
        </div>
        <div className={styles.read_container}>
          <h4>Feb 15</h4>
          <p>AI product management: Research, requirements and scope</p>
          <small>1 min read</small>
        </div>
        <div className={styles.loadmore}>
          <a>load More</a>
        </div>
      </div>

    </Layout>
  )
}

Home.getStaticProps = async () => {
  const posts = await loadBlogPosts();


  return { posts }
}

export default Home;