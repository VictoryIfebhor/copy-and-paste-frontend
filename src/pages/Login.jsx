import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { useGlobalContext } from "../context";

const Login = () => {
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleSuccess = async (googleData) => {
    const { credential } = googleData;
    try {
      const { data } = await axiosInstance.post("/auth", {
        credential,
      });
      const { name, email, image, token } = data;
      localStorage.setItem("jwt", token);
      setUser({ name, email, image });
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
