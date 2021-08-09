import React, { useState } from "react";
const ChangeTitle = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") {
      setTitle("hello world");
    } else {
      setTitle("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ChangeTitle;
