import styles from './Layout.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Footer from './Footer';

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
            <Link href="/">
              <a>
                <h3>Ko Nyan {router.params}</h3>
              </a>
            </Link>
          </div>
          <div className={styles.header_list_container}>
            <div className={styles.header_list}>
              <Link href="/">
                <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
              </Link>
              <Link href="/tag">
                <a className={router.pathname === "/tag" ? styles.active : ""}>Tag</a>
              </Link>

              <a target="_blank" rel="noopener noreferrer" href="https://konyan.me/">Portfolio</a>
            </div>
          </div>
        </div>
      </header>
      <React.Fragment>
        {children}
      </React.Fragment>
      <Footer />

      <style global jsx>{
        `
         body{
            font-family: 'Roboto Mono', monospace;
            margin:0px;
            padding:0px;
          }
        `
      }</style>
    </div>
  )
}
export default Layout;