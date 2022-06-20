import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

const OutputBox = ({ title, content }) => {
  const [fullDisplay, setFullDisplay] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
    }, 2000);
  };

  return (
    <article>
      <h3>{title}</h3>
      <div className="icon-container">
        <FaCopy className="icon" onClick={copyToClipboard} />
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
