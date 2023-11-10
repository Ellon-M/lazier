import { Inbox, MailCheck, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import usePins from "@/reusables/usePins";
import { shuffleArray } from "@/lib/utils";
import { emojilist } from "@/lib/emojilist";

export default function Menu() {
  let count = 0;
  const pinSkellies = 4;
  const userId = process.env.NEXT_PUBLIC_TEMP_USER as string;
  const {
    pins,
    isLoading,
    error,
  }: { pins: Pins[]; isLoading: boolean; error: Error } = usePins(userId);

  // shuffleArray(emojilist);
  return (
    <>
      <div className="flex flex-col px-2 py-3 ml-0 mb-3 mt-2 border-b border-b-[#6363634d]">
        <h5 className="text-xs text-[#b5b6ba] ml-2 uppercase">Inboxes</h5>
        <div className="flex flex-row items-center justify-between gap-8 mt-3 border border-[#6363634d] rounded-md p-2 text-sm">
          <div className="flex flex-row items-center gap-2 ml-1">
            <Inbox size={20} strokeWidth={1} />
            <span>Notes</span>
          </div>
          <div>
            <span className="mr-6">{count}</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 justify-between mb-3 mt-1 p-2 text-sm">
          <div className="flex flex-row items-center gap-2 ml-1">
            <MailCheck size={20} strokeWidth={1} />
            <span>Tasks</span>
          </div>
          <div>
            <span className="mr-6">{count}</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-3">
        <div className="flex flex-row justify-between items-center">
          <h5 className="text-xs text-[#b5b6ba] uppercase ml-2">Pinboards</h5>
          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <DialogTrigger asChild>
                    <Plus
                      size={14}
                      color="#b5b6ba"
                      className="mr-2 cursor-pointer"
                    />
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Create a new Pin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create new Pinboard</DialogTitle>
                <DialogDescription>
                  <span className="text-[#b5b6ba8e] mt-2">
                    Stay organized. Create new pins to catalogue your notes and
                    tasks.
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-row gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Pin
                  </Label>
                  {/* <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  /> */}
                  <Select>
                    <SelectTrigger className="w-[75px] col-span-3">
                      <SelectValue placeholder="📌" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <ScrollArea className="h-72 m-0 rounded-md border-0">
                        <SelectGroup className="h-full grid grid-cols-8 pr-6">
                          {emojilist.map((emoji) => (
                            <SelectItem
                              value={emoji}
                              className="flex flex-col justify-center"
                            >
                              <span>{emoji}</span>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Serendipity"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-4">
          {error ? (
            <div className="p-3 flex flex-col items-center justify-center">
              <h5 className="text-[#a3a6ad] text-sm mt-2 italic">
                Couldn't fetch pins at this time. Please check your connection
                and try again.
              </h5>
            </div>
          ) : (
            <ul className="text-sm flex flex-col gap-2.5 px-2">
              {isLoading ? (
                <>
                  {Array.from({ length: pinSkellies }, (_, index) => (
                    <Loading />
                  ))}
                </>
              ) : (
                pins.map((pin) => (
                  <li className="flex flex-row items-center gap-1 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="-rotate-90 ease-in relative top-[1px] ml-1 h-3 w-3 transition duration-150           "
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    <span>{pin.icon ? pin.icon : "📌"}</span>
                    <span>{pin.name}</span>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

const Loading = () => {
  return (
    <div className="flex items-center space-x-2 p-2 w-full">
      <div className="h-[28px] w-[28px] animate-pulse bg-[#817d7d34] rounded-[50%]" />
      <div className="space-y-2.5">
        <div className="h-2 animate-pulse rounded-md w-[165px] bg-[#817d7d34]" />
        <div className="h-2 animate-pulse rounded-md w-[105px] bg-[#817d7d34]" />
      </div>
    </div>
  );
};
