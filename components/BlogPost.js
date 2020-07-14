import PostMeta from './PostMeta';
import Link from 'next/link';
import Markdown from './Markdown';

const BlogPost = ({ post }) => (
  <React.Fragment>
    <PostMeta post={post} />
    <article>
      <header className="header">
        <div className="header__meta">
          <span className="header__meta-date">
            <time datetime="2020-01-31">
              Jan 31, 2020
            </time>
          </span>
          <span className="header__meta-read">
            1 min read
          </span>
          <span className="header__meta-tags">
            <Link href={`tag/${post.title}`}>
              <a className="post-tag post-tag-startup" href="/dawn/tag/startup/">
                Startup
              </a>
            </Link>
          </span>
        </div>
        <h1 className="header__title">{post.title}</h1>
      </header>
      <div style={{ width: '100%', margin: '1rem 0' }}>
        {post.bannerPhoto && (
          <img
            style={{
              width: '100%',
              maxWidth: '100%',
              margin: '16px',
            }}
            src={post.bannerPhoto}
          />
        )}
      </div>
      <div style={{ width: '100%', padding: '0px 3vw' }}>
        <Markdown source={post.content} />
      </div>
    </article>

    <style jsx>{
      `
        article{
          display : block;
          width : 960px;
          max-width : 960px;
          margin : auto;
        }
        .header{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          padding: 16px;
          align-items :center;
        }


        .header .header__meta{
          padding : 0;
          margin : 0;
        }

        .header .header__meta-date,.header__meta-read,.header__meta-tags{
          font-size : 14px;
          font-weight : 500;
          margin-right : 1rem;
        }

        .header .header__meta-tags a{
          color : #ff572f;
          font-weight : 700;
        }

        .header .header__title{
          font-size : 30px;
          font-weight : 700;
          margin: 0.75rem;
          text-align : center;
        }
      `
    }</style>
  </React.Fragment>
)

export default BlogPost;