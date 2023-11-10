"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, AlarmCheck } from "lucide-react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Draggable from "./draggable";
import useArticles from "@/reusables/useArticles";
import { useState, useEffect } from "react";
// import useUser from "@/reusables/useUser";

export default function Previews() {
  const [previews, setPreviews] = useState<Article[]>([]);

  //auth process / session data should handle this
  const userId = process.env.NEXT_PUBLIC_TEMP_USER as string;

  // const { user } = useUser({id: userId});
  const {
    articles,
    isLoading,
    error,
  }: { articles: Article[]; isLoading: boolean; error: Error } =
    useArticles(userId);
  useEffect(() => {
    if (articles) setPreviews(articles.slice(3, 9));
  }, [articles]);

  // const heights = Array.from({ length: 6 }, () => Math.floor(Math.random() * 151) + 200);

  return (
    <div className="px-4 w-full mt-32">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="Recents">
          <AccordionTrigger className="hover:no-underline">
            {" "}
            <span className="flex flex-row items-center gap-1">
              <Zap size={18} strokeWidth={2} color="#77787c" />
              <span className="">Recently Captured</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="m-0 p-0">
              <Box
                sx={{
                  width: "100%",
                  minHeight: 393,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {error ? (
                  <div className="m-2 p-4 flex text-center justify-center items-center">
                    <h5 className="text-[#a3a6ad] italic">
                      Couldn't retreive items at this time, please try again
                      later.
                    </h5>
                  </div>
                ) : (
                  <Masonry columns={2} spacing={2}>
                    <Draggable previews={previews} />
                  </Masonry>
                )}
              </Box>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Upcoming">
          <AccordionTrigger className="hover:no-underline">
            {" "}
            <span className="flex flex-row items-center gap-1">
              <AlarmCheck size={18} strokeWidth={2} color="#77787c" />
              <span className="hover:no-underline">Upcoming Tasks</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
