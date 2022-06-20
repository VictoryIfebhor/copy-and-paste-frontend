import { useEffect, useState, useCallback } from "react";
import { FaCopy } from "react-icons/fa";

const OutputBox = () => {
  const selectContentRandomly = () => {
    return Math.random() > 0.5
      ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit expedita repellendus amet, commodi magnam sequi fuga, atque quia necessitatibus architecto iste iusto voluptatem temporibus fugiat, quibusdam nemo molestiae eligendi ipsum laborum. Nulla adipisci esse debitis eius aliquam explicabo ratione doloremque libero ipsam dolore praesentium dolorum dolorem, similique fugiat expedita ipsa."
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur? Inventore placeat doloremque cupiditate deserunt. Commodi eligendi amet inventore debitis?";
  };

  const [content, setContent] = useState(selectContentRandomly());
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
      <h3>Title</h3>
      <div className="icon-container">
        <FaCopy className="icon" onClick={copyToClipboard} />
        {displayMessage && <p>copied to clipboard!</p>}
      </div>
      <div className="content">
        <p>
          {fullDisplay ? content : `${content.substring(0, 150)}...`}
          <button onClick={() => setFullDisplay((prevState) => !prevState)}>
            {fullDisplay ? "show less" : "read more"}
          </button>
        </p>
      </div>
    </article>
  );
};

export default OutputBox;
