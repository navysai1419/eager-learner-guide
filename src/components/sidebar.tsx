import { useNavigate } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", icon: "🏠", path: "/dashboard" },
  { name: "My Courses", icon: "📚", path: "/dashboard/courses" },
  { name: "Calendar", icon: "🗓️", path: "/dashboard/calendar" },
  { name: "Attendance", icon: "📝", path: "/dashboard/attendance" },
  { name: "Compiler", icon: "💻", path: "/dashboard/compiler" },
  { name: "Assessments & Grades", icon: "📊", path: "/dashboard/assessments" },
  { name: "Mock Interviews", icon: "🎤", path: "/dashboard/interviews" },
  { name: "Certificates", icon: "🎓", path: "/dashboard/certificates" },
  { name: "Analytics", icon: "📈", path: "/dashboard/analytics" },
  { name: "Leaderboard", icon: "🏆", path: "/dashboard/leaderboard" },
  { name: "Settings", icon: "⚙️", path: "/dashboard/settings" },
];

const Sidebar = ({ sidebarOpen, setActive, active }) => {
  const navigate = useNavigate();

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-60 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
    >
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <img src="/logo.svg" alt="Laural" className="h-8 w-8 mr-2" />
        <span className="font-bold text-lg text-green-700">Laural</span>
      </div>
      <nav className="mt-4 flex flex-col gap-1">
        {sidebarItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setActive(item.name);
              navigate(item.path);
            }}
            className={`flex items-center gap-3 px-6 py-2 text-gray-700 text-sm font-medium hover:bg-green-50 rounded transition ${
              active === item.name ? "bg-green-100 text-green-700" : ""
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;