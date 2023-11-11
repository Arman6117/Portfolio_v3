import {AiOutlineBars} from 'react-icons/ai'
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="navbarDivContainer">
      
      <div className="navbarLinkContainer">
        <NavLink>Home</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <button className="navbarContactButton">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
