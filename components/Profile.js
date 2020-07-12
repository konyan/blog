import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.icon}>
        <img src="https://demo.iveel.co/dawn/content/images/2020/02/icon.png" alt="icon" />
        <p>Howdy? Dawn is a simple yet powerful Ghost theme with features including membership, search, featured posts and there is more. Crafted with ❤️ by IVEEL.</p>
      </div>
    </div>
  )
}

export default Profile;