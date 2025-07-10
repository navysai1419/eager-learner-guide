import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profileheader = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <span className="font-bold text-blue-700 text-xl hidden md:block">
          Laural
        </span>
        <span className="text-xs text-gray-500 hidden md:block">
          Powered by{" "}
          <span className="text-blue-700 font-semibold">SecurXpert</span>
        </span>
      </div>
      <div className="flex items-center gap-4 flex-1 justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded-lg w-80 max-w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <span role="img" aria-label="bell" className="text-xl">
            🔔
          </span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative flex items-center gap-2 px-2"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>ND</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="font-medium text-sm">Navya D</span>
                <span className="text-xs text-gray-500">
                  NavyaD@secur.com
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate("/profile")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/")}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Profileheader;
