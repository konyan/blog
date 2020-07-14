import Layout from "../components/Layout";

const Tag = () => (
  <Layout>
    <section>
      <div className="coming_content">
        <h1>Coming Soon</h1>
        <div className="separator_container">
          <div className="separator line_separator">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="320.864" height="320.864" viewBox="0 0 320.864 320.864"><path fill="#000" d="M184.04 81.83c-1.89-5.1-3.46-28.63-3.926-55.05-.003-.1.107-.37.514-.37 2.092-.125 3.248-1.79 3.248-3.91V4c0-2.2-1.8-4-4-4H140.99c-2.2 0-4 1.8-4 4v18.5c0 2.123 1.06 3.77 3.152 3.89.673 0 .613.478.61.673-.463 26.677-2.035 49.67-3.925 54.77-11.12 29.993-35.884 27.39-35.884 63.393V273.96c0 49.536 24.92 47.044 59.49 46.82 34.57.224 59.49 2.716 59.49-46.82V145.226c0-36.002-24.764-33.4-35.883-63.394zm12.89 127.953c-5.845 8.89-31.005 30.02-36.458 30.02-5.338 0-30.727-21.21-36.532-30.02-2.907-4.41-4.97-9.277-4.627-15.678.605-11.325 9.866-20.678 21.208-20.678 11.66 0 18.45 12.44 19.915 12.44 1.675 0 8.755-12.44 19.914-12.44 11.34 0 20.6 9.353 21.206 20.678.342 6.4-1.713 11.247-4.627 15.678z" /></svg>
            </span>
          </div>
        </div>
        <h3>I like beer. Oh, and Javascript too.</h3>
      </div>
    </section>

    <style jsx>
      {
        `
        section {
          position: relative;
          width: 100%;
          height: 500px;
        }

        .coming_content {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
          width: 70%;
          margin: 0 auto;
          color: black;
          text-align: center;
          z-index: 101;
        }
        .coming_content h1 {
          font-size: 5.625em;
          margin: 0;
          letter-spacing: 2px;
          text-align: center;
          color: black;
        }
        .coming_content .separator_container {
          width: 100%;
          display: block;
          text-align: center;
          position: relative;
          margin: 12px 0;
        }
        .coming_content .separator_container:before, .coming_content .separator_container:after {
          display: table;
          content: "";
        }
        .coming_content .separator_container:after {
          clear: both;
        }
        .coming_content .separator {
          color: black;
          margin: 0 auto 1em;
          width: 11em;
        }
        .coming_content .line_separator svg {
          width: 30px;
          height: 20px;
        }
        .coming_content .line_separator:before, .coming_content .line_separator:after {
          display: block;
          width: 40%;
          content: " ";
          margin-top: 14px;
          border: 1px solid black;
        }
        .coming_content .line_separator:before {
          float: left;
        }
        .coming_content .line_separator:after {
          float: right;
        }
        .coming_content h3 {
          font-family: "Montserrat", sans-serif;
          letter-spacing: 2px;
          line-height: 2;
          font-size: 1em;
          font-weight: 400;
          text-align: center;
          margin: 0;
        }
        .coming_content h3 a {
          text-decoration: underline;
        }
      `
      }
    </style>
  </Layout>
)

export default Tag;