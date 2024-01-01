import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState();

  // const handleChange = () => {
  //   setContent(content);
  // }

  return (
    <div>
      <ReactQuill theme='snow' value={value} onChange={setValue} />
      <div
        onClick={() =>
          setContent(<div dangerouslySetInnerHTML={{ __html: value }}></div>)
        }>
        Click
      </div>
      {content}
    </div>
  );
}

export default MyComponent;
