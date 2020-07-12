import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Ko Nyan Portfoli Page, Blog Page" />
          <meta charSet="utf-8"></meta>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />

          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{
          `
          body{
            font-family: 'Roboto Mono', monospace;
          }
          `
        }</style>
      </Html>
    )
  }
}