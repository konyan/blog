import Meta from './Meta';

export default ({ post }) => (
  <Meta
    meta={{
      title: post.title,
      desc: post.description,
      link: post.canonicalUrl,
      image: post.bannerPhoto,
    }}
  />
)