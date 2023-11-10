"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "quill-paste-smart";
import "../public/styles/quillSnow.css";
import Link from "next/link";

export default function Quill() {
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isCloseToMobile, setisCloseToMobile] = useState(false);

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
    <div className="flex flex-col items-center relative justify-center rounded-xl mx-4 2xl:mx-0 my-8 pt-4 px-4 bg-gradient-to-r from-opacity-60 from-[#303238] via-opacity-10 via-[#696969] to-opacity-60 to-[#3a3a3a] w-4/5 lg:w-4/5 2xl:w-[750px]">
            <ReactQuill
              theme="snow"
              value={value}
              modules={modules}
              onChange={setValue}
              className="bg-[#212226] border rounded-xl h-launch min-h-launch w-full z-10"
            />
      <div className="launcher-bottom mt-1.5 text-sm">
        <Link className="" href="/inbox">
          <div className="flex flex-grow items-center mb-2">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-0.5 w-7 h-7"
            >
              <path
                d="m12.049 7.157-.913-3.196a1.152 1.152 0 0 0-1.108-.835H5.72c-.515 0-.967.341-1.108.836L3.7 7.156M6.846 7.513c-.149-.193-.357-.356-.601-.356H3.699v3.167c0 .636.516 1.152 1.152 1.152h6.046c.636 0 1.152-.516 1.152-1.152V7.157H9.503c-.244 0-.452.163-.6.356a1.294 1.294 0 0 1-2.057 0Z"
                stroke="#B8B8B8"
                stroke-width="0.696"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>Inbox</p>
          </div>
        </Link>
        <div className="flex flex-grow text-right w-[73px] items-center justify-end">
          <div className="relative p-[2px] rounded-md cursor-pointer bg-gradient-to-t from-hsla-[0,0%,100%,0.17] via-transparent to-hsla-[0,0%,100%,0.03] bg-gradient-conic-115.52 before:pointer-events-none before:select-none before:absolute before:opacity-100 before:transition-opacity before:duration-400 before:ease before:bg-radial-gradient-hsla-[0,0%,100%,0.3]-transparent-30 bg-[25rem] bg-[at-center-x-center-y]">
            <div className="rounded-md border border-[#6969692c] pointer-events-none select-none absolute z-10 inset-0 transition-opacity duration-400 ease bg-gradient-to-t from-hsla-[0,0%,100%,0.17] via-transparent to-hsla-[0,0%,100%,0.05] bg-gradient-conic-115.52"></div>
            <div className="w-full flex text-center bg-[#1a1b1fe6] relative items-center justify-center px-[12px] py-[8px]">
              <p>Capture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
