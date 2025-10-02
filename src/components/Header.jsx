import Profile from "./Profile";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <>
      <div></div>
      <header className="header">
        <Profile />
        <br />
        <br />
        <Navigation />
        <div className="social-item-container">
          <SocialLinks />
        </div>
      </header>
    </>
  );
}

export default Header;
