import Profile from "./Profile";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Profile />
      <Navigation />
      <div className={styles.socialItemContainer}>
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;


