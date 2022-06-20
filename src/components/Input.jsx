const Input = () => {
  return (
    <form>
      <input type="text" placeholder="Title" className="input" />
      <textarea
        name=""
        id=""
        className="input"
        placeholder="paste here..."
      ></textarea>
      <button className="btn">Save</button>
    </form>
  );
};

export default Input;
