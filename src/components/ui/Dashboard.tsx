import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "../sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Profileheader from "@/components/ui/Profileheader";

const summaryCards = [
  { label: "Total Courses", value: 4, icon: "📚" },
  { label: "Total Progress", value: "78%", icon: "📈" },
  { label: "Certificates Earned", value: "03", icon: "🎓" },
  { label: "Hours Learned", value: 46, icon: "⏰" },
];

const continueLearning = [
  {
    title: "Java Basics",
    desc: "Master Java from basics to advanced concepts",
    author: "by Ashwin K",
    img: "/assets/UIUX Developer.jpg",
    progress: 79,
    weeks: 8,
    students: 1200,
    rating: 4.8,
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Master Java from basics to advanced concepts",
    author: "by Ashwin K",
    img: "/assets/data-science-course.jpg",
    progress: 79,
    weeks: 8,
    students: 1200,
    rating: 4.8,
  },
  {
    title: "Database Management Systems",
    desc: "Master Java from basics to advanced concepts",
    author: "by Ashwin K",
    img: "/assets/sql.jpg",
    progress: 79,
    weeks: 8,
    students: 1200,
    rating: 4.8,
  },
];

const notifications = [
  {
    title: "New Assignment Posted",
    desc: "Java Module 3 assignment is now available",
    time: "1 hour ago",
    type: "new",
  },
  {
    title: "Quiz Results Available",
    desc: "Your last quiz scored 85%",
    time: "3 hours ago",
    type: "quiz",
  },
  {
    title: "New Course Material",
    desc: "HTML Module 2 slides uploaded",
    time: "5 hours ago",
    type: "material",
  },
];

const upcomingAssignments = [
  { title: "React Components Quiz", due: "Due tomorrow" },
  { title: "React Components Quiz", due: "Due in 2 days" },
  { title: "React Components Quiz", due: "Due in 1 week" },
];

const scheduledClasses = [
  { title: "HTML Fundamentals", session: "5th Session", time: "Today 3PM" },
  { title: "HTML Fundamentals", session: "5th Session", time: "Today 3PM" },
  { title: "HTML Fundamentals", session: "5th Session", time: "Today 3PM" },
];

const newCourses = continueLearning;

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-[#f7fafd]">
  
      <Sidebar sidebarOpen={sidebarOpen} setActive={setActive} active={active} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Profileheader />

        {/* Content Area */}
        <main className="p-6 flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main left content */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Welcome Banner */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="text-lg">
                    Welcome back,{" "}
                    <span className="font-bold">Navya D!</span>
                  </span>
                  <div className="text-sm text-gray-500 mt-1">
                    Here's what's happening with your learning.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-semibold text-xs bg-blue-50 px-2 py-1 rounded">
                    Points: 75 | Badge: Beginner
                  </span>
                </div>
              </div>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {summaryCards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-gray-100"
                  >
                    <span className="text-2xl mb-1">{card.icon}</span>
                    <div className="text-xs text-gray-500 mb-1">
                      {card.label}
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      {card.value}
                    </div>
                  </div>
                ))}
              </div>
              {/* Continue Learning */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Continue Learning</h2>
                  <button className="text-blue-600 text-xs font-medium hover:underline">
                    View all
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {continueLearning.map((course, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg shadow p-4 flex flex-col border border-gray-100"
                    >
                      <img
                        src={course.img}
                        alt={course.title}
                        className="rounded mb-2 h-28 object-cover"
                      />
                      <div className="font-semibold text-sm mb-1">
                        {course.title}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">
                        {course.author}
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {course.desc}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-full bg-gray-200 rounded h-2">
                          <div
                            className="bg-blue-500 h-2 rounded"
                            style={{ width: course.progress + "%" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span>🗓️ {course.weeks} weeks</span>
                        <span>👥 {course.students}</span>
                        <span>⭐ {course.rating}</span>
                      </div>
                      <button className="mt-auto px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200">
                        Continue Learning
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Classes Scheduled, Recorded Classes, Utilisation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
                  <div className="font-semibold mb-2 text-sm">
                    Classes Scheduled for today
                  </div>
                  <ul className="space-y-2">
                    {scheduledClasses.map((cls, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center text-xs"
                      >
                        <span>{cls.title}</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                          {cls.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border border-gray-100 flex flex-col items-center justify-center">
                  <div className="font-semibold mb-2 text-sm">
                    Recorded Classes
                  </div>
                  <div className="mb-2 text-xs text-gray-500">
                    Access recorded sessions anytime
                    <br />72 Available
                  </div>
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200">
                    Watch Now
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border border-gray-100 flex flex-col items-center justify-center">
                  <div className="font-semibold mb-2 text-sm">
                    Utilisation of Portal
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center">
                    {/* Chart Placeholder */}
                    <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-400">
                      [Chart]
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 grid grid-cols-2 gap-1 w-full">
                    <span>Exams 40%</span>
                    <span>Compiler 25%</span>
                    <span>Mock Interviews 20%</span>
                    <span>Analytics 15%</span>
                  </div>
                </div>
              </div>
              {/* New on Laural */}
              <div>
                <div className="flex justify-between items-center mb-2 mt-6">
                  <h2 className="text-lg font-semibold">New on Laural</h2>
                  <button className="text-blue-600 text-xs font-medium hover:underline">
                    View all
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {newCourses.map((course, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg shadow p-4 flex flex-col border border-gray-100"
                    >
                      <img
                        src={course.img}
                        alt={course.title}
                        className="rounded mb-2 h-20 object-cover"
                      />
                      <div className="font-semibold text-sm mb-1">
                        {course.title}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">
                        {course.author}
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {course.desc}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span>🗓️ {course.weeks} weeks</span>
                        <span>👥 {course.students}</span>
                        <span>⭐ {course.rating}</span>
                      </div>
                      <button className="mt-auto px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium hover:bg-blue-200">
                        Continue Learning
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right sidebar */}
            <div className="flex flex-col gap-6">
              {/* Notifications */}
              <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <div className="font-semibold mb-2 text-sm">Notifications</div>
                <ul className="space-y-2">
                  {notifications.map((n, i) => (
                    <li key={i} className="text-xs">
                      <span className="font-medium text-blue-700">
                        • {n.title}
                      </span>
                      <div className="text-gray-500">{n.desc}</div>
                      <div className="text-gray-400 text-xs">{n.time}</div>
                    </li>
                  ))}
                </ul>
                <button className="mt-2 w-full text-blue-600 text-xs font-medium hover:underline">
                  View all notifications
                </button>
              </div>
              {/* Upcoming Assignments */}
              <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
                <div className="font-semibold mb-2 text-sm">
                  Upcoming Assignments
                </div>
                <ul className="space-y-2">
                  {upcomingAssignments.map((a, i) => (
                    <li key={i} className="flex justify-between items-center text-xs">
                      <span>{a.title}</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">
                        {a.due}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="mt-2 w-full text-blue-600 text-xs font-medium hover:underline">
                  View all assignments
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;