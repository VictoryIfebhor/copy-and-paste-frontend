import { useState } from "react";
import { axiosInstance } from "../axios";
import { useGlobalContext } from "../context";

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setCount } = useGlobalContext();

  const submitHandler = async (e) => {
    console.log("In here");
    e.preventDefault();
    try {
      console.log("about to call API");
      await axiosInstance.post("/items", { title, content });
      setCount((prevCount) => prevCount + 1);
      setTitle("");
      setContent("");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name=""
        id=""
        className="input"
        value={content}
        placeholder="paste here..."
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="btn">Save</button>
    </form>
  );
};

export default Input;
