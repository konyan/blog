import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import FeatureArticle from '../components/FeatureArticle';

export default function Home() {
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
        <div className={styles.read_container}>
          <div className={styles.read_date}>
            <h4>Feb 15</h4>
          </div>
          <div className={styles.read_des}>
            <p>AI product management: Research, requirements and scope</p>
          </div>
          <div className={styles.read_time}>
            <p>1 min read</p>
          </div>
        </div>
        <div className={styles.read_container}>
          <div className={styles.read_date}>
            <h4>Feb 15</h4>
          </div>
          <div className={styles.read_des}>
            <p>AI product management: Research, requirements and scope</p>
          </div>
          <div className={styles.read_time}>
            <p>1 min read</p>
          </div>
        </div>
        <div className={styles.read_container}>
          <div className={styles.read_date}>
            <h4>Feb 15</h4>
          </div>
          <div className={styles.read_des}>
            <p>AI product management: Research, requirements and scope</p>
          </div>
          <div className={styles.read_time}>
            <p>1 min read</p>
          </div>
        </div>
        <div className={styles.read_container}>
          <div className={styles.read_date}>
            <h4>Feb 15</h4>
          </div>
          <div className={styles.read_des}>
            <p>AI product management: Research, requirements and scope</p>
          </div>
          <div className={styles.read_time}>
            <p>1 min read</p>
          </div>
        </div>
        <div className={styles.read_container}>
          <div className={styles.read_date}>
            <h4>Feb 15</h4>
          </div>
          <div className={styles.read_des}>
            <p>AI product management: Research, requirements and scope</p>
          </div>
          <div className={styles.read_time}>
            <p>1 min read</p>
          </div>
        </div>
        <div className={styles.loadmore}>
          <a>load More</a>
        </div>
      </div>

    </Layout>
  )
}
