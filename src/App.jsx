import { Routes, Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "./context";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App = () => {
  const { user } = useGlobalContext();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={user ? <Main /> : <Navigate to={"/auth"} />} />
        <Route path="auth" element={<Login />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Route>
    </Routes>
  );
};

export default App;
