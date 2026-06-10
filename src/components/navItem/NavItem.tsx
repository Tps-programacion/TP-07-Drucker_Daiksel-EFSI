import "./navItem.css";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
}

function NavItem({ icon, text}: NavItemProps) {
  return (
    <li className="nav-item">
      {icon}
      <span>{text}</span>
    </li>
  );
}

export default NavItem;