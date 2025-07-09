import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RegistrationDialog from "./ui/RegistrationDialog";
import SignInDialog from "./ui/SignInDialog";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-y-hidden">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-course-gradient-start to-course-gradient-end flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-primary">Laura Tek</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/courses" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Courses
          </Link>
          <Link 
            to="/jobs" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Jobs
          </Link>
          <Link 
            to="/success-stories" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Success Stories
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <SignInDialog/>
          </Button>
          <RegistrationDialog />
        </div>
      </div>
    </header>
  );
};

export default Header;