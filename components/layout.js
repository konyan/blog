import styles from './layout.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();



const Layout = ({ children, title }) => (
  <div className={styles.App_container}>
    <div className={styles.header_container}>
      <Head>
        <title>Ko Nyan Blog | {title}</title>
      </Head>
      <div className={styles.logo}>
        <h3>Ko Nyan</h3>
      </div>
      <div className={styles.header_list_container}>
        <ul className={styles.header_list}>
          <li className={styles.active}>Home</li>
          <li>Tag</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
    <React.Fragment>
      {children}
    </React.Fragment>
  </div>
)
export default Layout;