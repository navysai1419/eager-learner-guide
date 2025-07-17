import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import Jobs from "./components/ui/jobs";
import Dashboard from "./components/ui/Dashboard";
import Analytics from "./components/ui/Analytics";
import Settings from "./components/ui/settings";
import Calendar from "./components/calendar";
import Assessments from "./components/assessments&grades";
import Compiler from "./components/ui/compiler";
import Attendance from "./components/ui/attendance";
import MyCourses from "./components/mycourses";
import SuccessStories from "./components/ui/Successstories";
import AboutUs from "./pages/aboutus";
import Terms from "./components/ui/Terms";
import Policy from "./components/ui/Policy";
import Support from "./components/ui/Support";
// import Contactus from "./components/ui/contactus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard/courses" element={<MyCourses />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/mycourses" element={<MyCourses />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
          <Route path="/dashboard/attendance" element={<Attendance />} />
          <Route path="/dashboard/compiler" element={<Compiler />} />
          <Route path="/dashboard/assessments" element={<Assessments />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Policy />} />
          <Route path="/support" element={<Support />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
