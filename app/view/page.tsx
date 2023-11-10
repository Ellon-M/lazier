"use client";

"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "quill-paste-smart";
import "../public/styles/quillSnow.css";

export default function View() {
  const [value, setValue] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    // [{ 'align': [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
     <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={setValue}
        className="bg-transparent border rounded-xl h-screen w-full z-10"
      />
    </>
  )
}
