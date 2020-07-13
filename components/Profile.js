import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.icon}>
        <img src="https://demo.iveel.co/dawn/content/images/2020/02/icon.png" alt="icon" />
        <p>
          love building things, writes and debugs coding, solves problems, and also passionate about design, startups, and technology.I Learn and Share with ❤️ by Nyan.</p>
      </div>
    </div>
  )
}

export default Profile;