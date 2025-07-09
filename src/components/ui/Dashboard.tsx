import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Sidebar from "../sidebar" ;

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-[#f7fafd]">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setActive={setActive}
        active={active}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <span className="font-bold text-green-700 text-xl hidden md:block">
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
              className="p-2 border border-gray-200 rounded-lg w-80 max-w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
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
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="font-medium text-sm">Navya D</span>
                    <span className="text-xs text-gray-500">
                      NavyaK@secur.com
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
             <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/")}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8 flex-1 overflow-auto">
          {/* Placeholder for Attendance Tracker or other dashboard content */}
          <div className="bg-white rounded-lg shadow p-8 min-h-[400px] border border-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Attendance Tracker
            </h1>
            <div className="text-gray-500">
              Dashboard content goes here...
            </div>
          </div>
          {/* <Outlet /> can be used for routing actual content */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;