import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { useGlobalContext } from "../context";

const Login = () => {
  const { setUser, setItems, setCount } = useGlobalContext();
  const navigate = useNavigate();

   // New state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // New function for handling email/password login
  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      // Get user token and set in localStorage
      const { token } = data;
      localStorage.setItem("jwt", token);
      // Navigate home
      setCount((prevCount) => prevCount + 1);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    }
  };

  const handleSuccess = async (googleData) => {
    const { credential } = googleData;
    try {
      const { data } = await axiosInstance.post("/users/auth", {
        credential,
      });
      // get user token and set in localStorage
      const { token } = data;
      localStorage.setItem("jwt", token);
      // navigate home
      setCount((prevCount) => prevCount + 1);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    }
  };

  const handleError = (result) => {
    console.log(result);
  };

  return (
    <main className="login-main">
      <div>
        {/* Email and Password login form */}
        <form onSubmit={handleEmailPasswordLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
        ></GoogleLogin>
      </div>
    </main>
  );
};

export default Login;
