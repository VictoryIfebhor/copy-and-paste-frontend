import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { useGlobalContext } from "../context";

const Login = () => {
  const { setUser, setItems, setCount } = useGlobalContext();
  const navigate = useNavigate();

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
