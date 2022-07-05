import { useState } from "react";
import { FaCopy, FaTrash } from "react-icons/fa";
import { axiosInstance } from "../axios";
import { useGlobalContext } from "../context";

const OutputBox = ({ id, title, content }) => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  const { setCount } = useGlobalContext();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
    }, 2000);
  };

  const deleteItem = async (id) => {
    try {
      await axiosInstance.delete(`/items/${id}`);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <div className="icon-container">
        <FaCopy className="icon" onClick={copyToClipboard} />
        <FaTrash className="icon" onClick={() => deleteItem(id)} />
        {displayMessage && <p>copied to clipboard!</p>}
      </div>
      <div className="content">
        <p>
          {fullDisplay || content.length <= 150
            ? content
            : `${content.substring(0, 150)}...`}
          <button onClick={() => setFullDisplay((prevState) => !prevState)}>
            {content.length <= 150
              ? ""
              : fullDisplay
              ? "show less"
              : "read more"}
          </button>
        </p>
      </div>
    </article>
  );
};

export default OutputBox;
