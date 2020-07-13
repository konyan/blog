const FeatureArticle = ({ post }) => (
  <div className="feature_article">
    <img src={post.bannerPhoto} />
    <h2>{post.title}</h2>
    <style jsx>{
      `.feature_article{
        flex: 1;
        padding: 0 16px;
        cursor:pointer;
      }

      .feature_article img{
        width : 100%;
        height : 200px;
        object-fit : cover;
        position: relative;
      }

      .feature_article h2{
        font-size: 16px;
        font-weight: 700;
        margin-top: 0.4rem;
        line-height: 24px;
      }
    `
    }</style>
  </div>
)

export default FeatureArticle;