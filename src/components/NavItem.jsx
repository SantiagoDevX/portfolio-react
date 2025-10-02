function NavItem({ id, name, href }) {
  return (
    <li id={`nav-${id}`}>
      <a className="nav-me-link" href={href}>
        {name}
      </a>
    </li>
  );
}

export default NavItem;
