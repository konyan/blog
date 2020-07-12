import styles from './layout.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => NProgress.start();


Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
  const router = useRouter()

  return (
    <div className={styles.App_container}>
      <Head>
        <title>Ko Nyan Blog | {title}</title>
      </Head>
      <header>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <h3>Ko Nyan {router.params}</h3>
          </div>
          <div className={styles.header_list_container}>
            <div className={styles.header_list}>
              <Link href="/">
                <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
              </Link>
              <Link href="/tag">
                <a className={router.pathname === "/tag" ? styles.active : ""}>Tag</a>
              </Link>
              <Link href="/portfolio">
                <a target="_blank">Portfolio</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <React.Fragment>
        {children}
      </React.Fragment>
    </div>
  )
}
export default Layout;