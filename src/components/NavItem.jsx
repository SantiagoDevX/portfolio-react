function NavItem({ id, name, href, isActive }) {
  console.log(name, isActive)
  return (
    <li id={`nav-${id}`}>
      <a
        className={`nav-me-link ${isActive ? 'active' : ''}`}
        href={href}
      >
        {name}
      </a>
    </li>
  );
}

export default NavItem;
