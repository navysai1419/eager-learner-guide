import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RegistrationDialog from "./ui/RegistrationDialog";
import SignInDialog from "./ui/SignInDialog";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [regOpen, setRegOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center" style={{ minWidth: '1900px' }}>
        {/* 12-column grid for header content */}
        <div className="grid grid-cols-12 w-full items-center gap-4">
          {/* Left Section: Main Logo (col-span-3) */}
          <div className="col-span-3 flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-course-gradient-start to-course-gradient-end flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-primary">Laura Tek</span>
            </Link>
          </div>

          {/* Center Section: Navigation (col-span-6) */}
          <nav className="col-span-6 flex items-center justify-center space-x-8">
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors font-medium">Courses</Link>
            <Link to="/jobs" className="text-foreground hover:text-primary transition-colors font-medium">Jobs</Link>
            <Link to="/success-stories" className="text-foreground hover:text-primary transition-colors font-medium">Success Stories</Link>
          </nav>

          {/* Right Section: Company Logo, Profile, Auth Buttons (col-span-3) */}
          <div className="col-span-3 flex items-center justify-end space-x-4">
            <img src={logoImg} alt="Company Logo" className="h-8 w-25" />
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">P</span>
            </div>
            <Button variant="ghost" size="sm">
              <SignInDialog />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setRegOpen(true)}>
              Sign Up
            </Button>
            <RegistrationDialog open={regOpen} setOpen={setRegOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;