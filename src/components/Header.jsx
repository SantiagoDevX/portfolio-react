import Profile from "./Profile";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="header">
      <Profile />
      <Navigation />
      <div className="social-item-container">
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;

