"use client";

import Aside from "@/components/aside";
import Menu from "@/components/menu";
import useArticles from "@/reusables/useArticles";
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Navbar from "@/components/navbar";

export default function Inbox() {
  const userId = process.env.NEXT_PUBLIC_TEMP_USER as string;
  const inboxSkellies = 10;
  const {
    articles,
    isLoading,
    error,
  }: { articles: Article[]; isLoading: boolean; error: Error } =
    useArticles(userId);

  return (
    <>
      <header className="fixed w-full z-50">
        <Navbar />
      </header>
      <div className="flex flex-row m-0 w-full h-screen">
        <section className="hidden md:flex flex-col md:w-[250px] mt-[43px] bg-[#121314] border-r border-r-[#6363634d] fixed h-screen">
          <Menu />
        </section>
        <section className="flex flex-col mt-[43px] items-start w-full overflow-y-auto">
          <div className="h-20 xl:w-previews-width lg:w-width-minus-menu w-full md:ml-margin-plus-menus flex flex-col justify-center">
            <ul className="flex flex-row gap-x-8 p-4 mx-2">
              <li className="flex flex-row gap-3 border py-2 rounded-md px-3.5 items-center cursor-pointer hover:bg-[#111111] transition duration-200 ease-in-out">
                <span>Inbox</span>
                <span className="bg-[#66666973] w-6 text-sm flex flex-col justify-center text-center rounded-sm text-gray-300">
                  {isLoading ? (
                    <div className="bg-[#817d7d34] animate-pulse h-[20px] w-[24px] rounded-sm" />
                  ) : (
                    articles?.length
                  )}
                </span>
              </li>
              <li className="flex flex-row gap-3 py-2 px-3.5 items-center">
                <span>Later</span>
                <span className="bg-[#66666973] w-6 text-sm flex flex-col justify-center text-center rounded-sm text-gray-300">
                  {isLoading ? (
                    <div className="bg-[#817d7d34] animate-pulse h-[20px] w-[24px] rounded-sm" />
                  ) : (
                    0
                  )}
                </span>
              </li>
            </ul>
          </div>
          <ul className="md:ml-margin-plus-menus my-2 flex flex-col items-start justify-start xl:w-previews-width lg:w-width-minus-menu w-full">
            {error ? (
              <div className="w-full h-screen-minus-120 flex flex-col items-center justify-center">
                <h5 className="text-[#a3a6ad] text-sm mt-2 italic">
                  Couldn't fetch inbox items at this time. Please check your
                  connection and try again later.
                </h5>
              </div>
            ) : isLoading ? (
              <>
                {Array.from({ length: inboxSkellies }, (_, index) => (
                  <Loading />
                ))}
              </>
            ) : (
              articles.map((article) => (
                <li className="w-full inbox-item cursor-pointer hover:to-transparent">
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row p-4 gap-2 w-full items-center">
                      <div className="flex flex-row justify-center items-center w-[28px] h-[28px] rounded-3xl bg-[#3f424bb0]">
                        <span>📄</span>
                      </div>
                      <span>
                        <h5 className="font-light text-sm">{article.title}</h5>
                      </span>
                      <span className="flex flex-nowrap text-gray-300 font-extralight text-sm">
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          className="2xl:max-w-[620px] xl:max-w-[360px] lg:max-w-[460px] md:max-w-[280px] sm:max-w-[180px] max-w-[100px] whitespace-nowrap"
                        >
                          {article.desc ? article.desc : ""}
                        </div>
                      </span>
                      <span className="ml-1 italic text-gray-200 text-sm">
                        - Article Source
                      </span>
                    </div>
                    <Dialog>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <div className="pr-4 cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#b5b6ba"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className=""
                            >
                              <circle cx="12" cy="12" r="1" className="mb-2" />
                              <circle cx="12" cy="4" r="1" />
                              <circle cx="12" cy="20" r="1" />
                            </svg>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent className="w-64 bg-[#121314]">
                          <DialogTrigger asChild>
                            <ContextMenuItem inset>
                              Add to Pinboard
                              <ContextMenuShortcut>⌘P</ContextMenuShortcut>
                            </ContextMenuItem>
                          </DialogTrigger>
                          <ContextMenuItem inset disabled>
                            Save as Later
                            <ContextMenuShortcut>⌘L</ContextMenuShortcut>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add to Pinboard: </DialogTitle>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Separator className="bg-[#817d7d34]" />
                </li>
              ))
            )}
          </ul>
        </section>
        <section className="hidden xl:flex flex-col mt-[43px] w-[350px] bg-[#121314] border-l border-l-[#6363634d] fixed h-screen right-0">
          <Aside />
        </section>
      </div>
    </>
  );
}

const Loading = () => {
  return (
    <div className="flex items-center space-x-4 p-4 mx-2">
      <div className="animate-pulse inbox-icon-skelly" />
      <div className="space-y-3">
        <div className="h-3 my-1 animate-pulse rounded-md 2xl:w-[850px] xl:w-[600px] lg:w-[450px] sm:w-[400px] md:w-[350px] w-[200px] bg-[#817d7d34]" />
        <div className="h-3 my-1 animate-pulse rounded-md 2xl:w-[750px] xl:w-[450px] lg:w-[300px] sm:w-[250px] md:w-[200px] w-[125px] bg-[#817d7d34]" />
      </div>
    </div>
  );
};
