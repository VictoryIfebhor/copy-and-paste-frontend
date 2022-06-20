import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <FaHome className="logo" />
      <div className="right-side">
        <p>Welcome</p>
        <button className="btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
