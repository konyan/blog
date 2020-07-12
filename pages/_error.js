import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error Page 404">
    <p>Couldn't get the page,sorry!</p>
    <h4>{statusCode ? `Error Status :${statusCode}` : ""}</h4>
  </Layout>
)