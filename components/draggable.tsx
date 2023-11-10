"use client"

import { shuffleArray } from "@/lib/utils";
import { useEffect } from "react";


interface DraggableGridItemProps {
  id: number;
  height: string;
  summary: string;
  title: string;
}

const DraggableGridItem: React.FC<DraggableGridItemProps> = ({
  id,
  height,
  summary,
  title,
}) => {

  const sideIcons = ["🐧", "🦾", "⚡", "⚫", "💲", "✈️", "📊"];

  useEffect(() => {
    shuffleArray(sideIcons);
  }, []);

  return (
    <div
      className="w-previews-grid-12 mb-4 rounded-lg border border-[#8a8a8a4d] p-2 mr-2 bg-[#34363b6c] cursor-pointer transition duration-300 ease-in-out hover:border-[#eeeeee60] hover:bg-[#34363b] flex flex-col justify-between"
      style={{ height }}
    >
      {summary !== "" ? <h5 className="p-3 text-left text-[#b5b6ba] text-lg">{summary}</h5> : <></> }
      <div className={`bg-[#1c1c1f] rounded-xl p-2 mx-0 ${summary !== "" ? "mb-1" : ""} flex flex-col justify-center`}>
        <p className="text-white flex flex-row gap-2 items-center"><span>{sideIcons[Math.floor(Math.random() * sideIcons.length)]}</span>{title}</p>
      </div>
    </div>
  );
};

interface DraggableProps {
  previews: Article[]; 
}

const Draggable: React.FC<DraggableProps> = ({ previews }) => {

  return (
    <>
      {previews.map((preview, index) => (
        <DraggableGridItem
          key={index}
          id={index}
          height="auto"
          summary={preview.desc || ""}
          title={preview.title}
        />
      ))}
    </>
  );
};

export default Draggable;
