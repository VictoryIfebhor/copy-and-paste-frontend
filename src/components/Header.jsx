import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Header = () => {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/auth");
  };

  return (
    <header>
      <FaHome className="logo" />
      <div className="right-side">
        {user && (
          <>
            <p>{user.name}</p>
            <img src={user.image} alt={user.name} />
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
