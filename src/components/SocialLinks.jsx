import { contactInfo } from "../data/globalData";

function SocialLinks() {
  return (
    <>
      {contactInfo.map((contact, index) => (
        <SocialLink
          key={index}
          platform={contact.platform}
          href={contact.href}
          icoSrc={contact.ico}
        />
      ))}
    </>
  );
}

function SocialLink({ platform, href, icoSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="socialItem"
    >
      <img src={icoSrc} alt={platform} title={platform} />
    </a>
  );
}

export default SocialLinks;
