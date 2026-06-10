import NavItem from "../navItem/NavItem";
import { FaHome, FaRegCompass, FaRegHeart, FaBars } from "react-icons/fa";
import { FiSearch, FiPlusSquare } from "react-icons/fi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

function Nav() {
  return (
    <aside className="sidebar">
      <h1 className="logo">Instagram</h1>

      <nav>
        <ul>
          <NavItem icon={<FaHome />} text="Home"/>
          <NavItem icon={<FiSearch />} text="Search" />
          <NavItem icon={<FaRegCompass />} text="Explore" />
          <NavItem icon={<MdOutlineVideoLibrary />} text="Reels" />
          <NavItem icon={<BsMessenger />} text="Messages" />
          <NavItem icon={<FaRegHeart />} text="Notifications" />
          <NavItem icon={<FiPlusSquare />} text="Create" />
          <NavItem icon={<FaBars />} text="More" />
        </ul>
      </nav>
      
    </aside>
  );
}

export default Nav;