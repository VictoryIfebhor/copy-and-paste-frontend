import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get("/users/me");
      console.log(data);
      if (data?.user) {
        const { name, email, image, items } = data.user;
        setUser({ name, email, image });
        setItems(items);
      }
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error);
      }
      navigate("/auth");
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <AppContext.Provider value={{ user, items, setUser, setItems, setCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
