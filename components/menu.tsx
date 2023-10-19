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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Menu() {
  let count = 0;

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
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  <span className="text-[#b5b6ba8e] mt-2">
                    Make changes to your profile here. Click save when you're
                    done.
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
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
          <ul className="text-sm flex flex-col gap-2.5 px-2">
            <li className="flex flex-row items-center gap-1">
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
                className="-rotate-90 relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>💎</span>
              <span>Title 1</span>
            </li>
            <li className="flex flex-row items-center gap-1">
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
                className="-rotate-90 relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>🥎️</span>
              <span>Title 2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
