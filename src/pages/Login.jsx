import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Login = () => {
  const { setUser } = useGlobalContext();
  const navigate = useNavigate();

  const login = () => {
    setUser({ name: "testuser" });
    navigate("/");
  };

  return (
    <main className="login-main">
      <button className="btn login-btn" onClick={login}>
        Login with google
      </button>
    </main>
  );
};

export default Login;
