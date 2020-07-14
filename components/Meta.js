import NextHead from 'next/head';
import config from '../globals';

const Meta = ({ meta }) => {
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="copyright" content="Ko Nyan" />

      {meta.link && <link rel="canonical" href={meta.link} />}
      {meta.desc && <meta name="description" content={meta.desc} />}

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={meta.title} />
      {meta.desc && (
        <meta
          name="og:description"
          property="og:description"
          content={meta.desc}
        />
      )}
      <meta property="og:site_name" content={config.siteName} />
      {meta.link && <meta property="og:url" content={`${meta.link}`} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      {meta.desc && <meta name="twitter:description" content={meta.desc} />}
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:creator" content={config.twitterHandle} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      {meta.image && <meta property="og:image" content={`${meta.image}`} />}
    </NextHead>
  )
}

export default Meta;