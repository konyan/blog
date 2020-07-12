import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.main_container}>
        <div className={styles.icon}>
          <img src="https://demo.iveel.co/dawn/content/images/2020/02/icon.png" alt="icon" />
          <p>Howdy? Dawn is a simple yet powerful Ghost theme with features including membership, search, featured posts and there is more. Crafted with ❤️ by IVEEL.</p>
        </div>
      </div>
      <div className={styles.feature_article_container}>
        <div className={styles.feature_article}>
          <div className={styles.feature_title}>
            <h3>LATESTED ARTICLES</h3>
          </div>
          <div className={styles.feature_button}>
            <a><i>1</i></a>
            <a><i>2</i></a>
          </div>
        </div>
        <div className={styles.image_list_container}>
          <div className={styles.image_list}>
            <img src="https://demo.iveel.co/dawn/content/images/size/w1140/2020/07/photo-1558655146-6c222b05fce4.jpeg" />
            <h2>Retailers going digital payment only don't save money</h2>
          </div>
          <div className={styles.image_list}>
            <img src="https://demo.iveel.co/dawn/content/images/size/w1140/2020/07/photo-1558655146-6c222b05fce4.jpeg" />
            <h2>Retailers going digital payment only don't save money</h2>
          </div>
          <div className={styles.image_list}>
            <img src="https://demo.iveel.co/dawn/content/images/size/w1140/2020/07/photo-1558655146-6c222b05fce4.jpeg" />
            <h2>Retailers going digital payment only don't save money</h2>
          </div>

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
