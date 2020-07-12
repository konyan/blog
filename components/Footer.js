const Footer = () => {
  return (
    <footer>
      <ul className="social-media-list">
        <li><a href="https://twitter.com/devkonyan" target="_blank" rel="noopener noreferrer"><img src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" alt="Ko Nyan's Twitter" title="Twitter" /></a></li>
        <li><a href="https://github.com/konyan" target="_blank" rel="noopener noreferrer"><img src="https://unpkg.com/simple-icons@latest/icons/github.svg" alt="Ko Nyan's Github" title="GitHub" /></a></li>
        <li><a href="https://www.linkedin.com/in/nyanlintun/" target="_blank" rel="noopener noreferrer"><img src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg" alt="Ko Nyan's LinkedIn" title="LinkedIn" /></a></li>
        <li><a href="https://stackoverflow.com/users/11191658/ko-nyan" target="_blank" rel="noopener noreferrer" ><img src="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg" alt="Ko Nyan's Stack Overflow" title="Stack Overflow" /></a></li>
      </ul>
      <div className="copyright">
        ©  {new Date().getFullYear()} — Copy Right by <a href="https://konyan.me/" target="_blank" rel="noopener noreferrer">Ko Nyan</a>
      </div>

      <style jsx>{
        `
          footer{
            padding: 20px 0;
            display: block;
            text-align : center;
          }

          footer .social-media-list img {
              padding: 5px;
              border-radius: 5px;
              width: 36px;
              height: 36px;
          }

          .social-media-list{
            list-style:none;
            padding: 8px;
          }
          .social-media-list li{
            display: inline-block;
            margin-right : 8px;
          }
        `
      }</style >
    </footer >
  )
}

export default Footer;