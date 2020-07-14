import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.icon}>
        <img src="https://scontent.frgn2-2.fna.fbcdn.net/v/t1.15752-9/107699775_648244259454515_6031430978829455903_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_eui2=AeGEfGKojUfdoLq-XTtNL8GOLIdghi6rWfYsh2CGLqtZ9sDVk9ohB3GDyFoPTE83GS7BIOjKUGMRAjXdwRtkSPt2&_nc_ohc=eRJkJ9RBL5QAX9S3xpT&_nc_ht=scontent.frgn2-2.fna&oh=a2c1abd04b5b8719848e342191e6aaeb&oe=5F32160F" alt="icon" />
        <p>
          love building things, writes and debugs coding, solves problems, and also passionate about design, startups, and technology.I Learn and Share with ❤️ by Nyan.</p>
      </div>
    </div>
  )
}

export default Profile;