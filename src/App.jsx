import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            localStorage.getItem("jwt") ? <Main /> : <Navigate to={"/auth"} />
          }
        />
        <Route path="auth" element={<Login />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Route>
    </Routes>
  );
};

export default App;
