import React, { useState } from "react";

const TextEditor = (props) => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [text, setText] = useState(props.initialText || '');
  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleItalicClick = () => {
    setItalic(!italic);
  };

  const handleUnderlineClick = () => {
    setUnderline(!underline);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={handleBoldClick} style={{ fontWeight: bold ? "bold" : "normal" }}>
          B
        </button>
        <button onClick={handleItalicClick} style={{ fontStyle: italic ? "italic" : "normal" }}>
          I
        </button>
        <button onClick={handleUnderlineClick} style={{ textDecoration: underline ? "underline" : "none" }}>
          U
        </button>
      </div>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
};

export default TextEditor;
