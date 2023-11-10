"use client";

import {
  Menu,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Users2,
  Calendar,
  CalendarDays,
  Search,
  Inbox,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isHoveredBack, setIsHoveredBack] = useState(false);
  const [isHoveredForward, setIsHoveredForward] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleForward = () => {
    router.forward();
  };

  const handleMouseEnterBack = () => {
    setIsHoveredBack(true);
  };

  const handleMouseEnterForward = () => {
    setIsHoveredForward(true);
  };

  const handleMouseLeaveBack = () => {
    setIsHoveredBack(false);
  };

  const handleMouseLeaveForward = () => {
    setIsHoveredForward(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between px-4 py-1 text-[#b5b6ba]">
        <div className="flex flex-row gap-2 justify-center items-center text-sm">
          <Menu
            className="mr-4 cursor-pointer"
            color="#b5b6bac8"
            strokeWidth={1}
          />
          <ArrowLeft
            size={20}
            className="mr-1.5 cursor-pointer"
            color={isHoveredBack ? "#ffffff" : "#b5b6ba"}
            onClick={handleBack}
            onMouseEnter={handleMouseEnterBack}
            onMouseLeave={handleMouseLeaveBack}
          />
          <ArrowRight
            size={20}
            className="cursor-pointer"
            color={isHoveredForward ? "#ffffff" : "#b5b6ba"}
            onClick={handleForward}
            onMouseEnter={handleMouseEnterForward}
            onMouseLeave={handleMouseLeaveForward}
          />
          <div className="flex flex-row justify-center items-center ml-8 gap-2 text-xs">
            {pathname && pathname === "/" ? 
              <>
                <LayoutGrid size={18} color="#ffffff" />
                <span className="text-white">Capture</span>
              </>
             : pathname === "/inbox" ? 
              <>
                <Inbox size={18} color="#ffffff" />
                <span className="text-white">Inbox</span>
              </>
             : 
              <></>
            }
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-evenly items-center text-xs relative pr-12">
          <Input
            type="text"
            placeholder="type to search"
            className="w-[240px] rounded-2xl h-4/5 focus:border-gray-300 items-center text-[#b5b6ba73] ring-white pl-8"
          />
          <span className="absolute inset-y-0 left-2 top-1/2 transform -translate-y-1/2">
            {" "}
            <Search size={18} color="#b5b6ba73" strokeWidth={1} />{" "}
          </span>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Calendar color="#b5b6ba" size={18} />
            <Users2 color="#b5b6ba" size={20} className="mr-4" />
            <HoverCard>
              <HoverCardTrigger asChild>
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Test User</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </>
  );
}
