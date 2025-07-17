import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RegistrationDialog from "./ui/RegistrationDialog";
import SignInDialog from "./ui/SignInDialog";
import { useState, useEffect } from "react";
import axios from "axios";
import techLogo from "@/assets/techlogo.png";
import logoImg from "@/assets/logo.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";

interface ProfileData {
  id: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  educational_status: string;
  qualification: string;
  passedout_year: string;
  interest: string;
  state: string;
  city: string;
  created_at: string;
}

const Header = () => {
  const [regOpen, setRegOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      setIsAuthenticated(!!localStorage.getItem("access_token"));
    };
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  useEffect(() => {
    if (profileOpen && isAuthenticated) {
      const fetchProfileData = async () => {
        setLoading(true);
        try {
          const response = await axios.get("https://lauratek.in:8000/guest/my-profile", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
          setProfileData(response.data);
          setError(null);
        } catch (err) {
          setError("Failed to fetch profile data");
          setProfileData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchProfileData();
    }
  }, [profileOpen, isAuthenticated]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="
          container
          h-16
          flex
          items-center
          min-w-full
          xs:min-w-[640px]
          sm:min-w-[768px]
          md:min-w-[1024px]
          lg:min-w-[1280px]
          xl:min-w-[1536px]
          2xl:min-w-[1900px]
        "
      >
        {/* 12-column grid for header content */}
        <div className="grid grid-cols-12 w-full items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
          {/* Left Section: Main Logo */}
          <div className="col-span-4 xs:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 flex items-center space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-3 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={techLogo}
                alt="Main Logo"
                className="
                  h-10 xs:h-11 sm:h-12 md:h-13 lg:h-14 xl:h-15 2xl:h-16
                  w-14 xs:w-15 sm:w-16 md:w-18 lg:w-19 xl:w-20 2xl:w-20
                "
              />
            </Link>
          </div>

          {/* Right Section: Company Logo, Profile/Auth Buttons, Hamburger Menu */}
          <div className="col-span-8 xs:col-span-9 sm:col-span-9 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 flex items-center justify-end space-x-2 xs:space-x-2 sm:space-x-3 md:space-x-3 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
            {/* Company Logo - Visible on all screens */}
            <img
              src={logoImg}
              alt="Company Logo"
              className="
                h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 xl:h-8 2xl:h-9
                w-16 xs:w-18 sm:w-20 md:w-22 lg:w-24 xl:w-25 2xl:w-26
              "
            />
            {/* Profile/Auth Buttons */}
            {isAuthenticated ? (
              <div
                className="
                  h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 xl:h-8 2xl:h-9
                  w-5 xs:w-6 sm:w-6 md:w-7 lg:w-8 xl:w-8 2xl:w-9
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:bg-blue-200
                  transition-colors
                "
                onClick={() => setProfileOpen(true)}
              >
                <span
                  className="
                    text-blue-600
                    font-bold
                    text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                  "
                >
                  {profileData?.name?.charAt(0).toUpperCase() || "P"}
                </span>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="
                    text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                    px-1 xs:px-1 sm:px-2 md:px-3 lg:px-4 xl:px-4 2xl:px-5
                  "
                >
                  <SignInDialog />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setRegOpen(true)}
                  className="
                    text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                    px-1 xs:px-1 sm:px-2 md:px-3 lg:px-4 xl:px-4 2xl:px-5
                  "
                >
                  Sign Up
                </Button>
                <RegistrationDialog open={regOpen} setOpen={setRegOpen} />
              </>
            )}
            {/* Hamburger Menu - Visible only below md */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="p-1 xs:p-1 sm:p-2 md:hidden text-foreground hover:text-primary"
              aria-label="Toggle navigation"
            >
              {isNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Center Section: Navigation */}
          <nav
            className={`
              ${isNavOpen ? "flex" : "hidden md:flex"}
              col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6
              flex-col md:flex-row
              items-center
              justify-center
              space-y-3 xs:space-y-3 sm:space-y-3 md:space-y-0 md:space-x-3 lg:space-x-5 xl:space-x-6 2xl:space-x-7
              absolute md:static
              top-16 left-0 w-full md:w-auto
              bg-background md:bg-transparent
              p-4 xs:p-4 sm:p-4 md:p-0
              border-b md:border-0
              z-40
            `}
          >
            <Link
              to="/"
              className="
                text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                text-foreground hover:text-primary
                transition-colors
                font-medium
              "
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="
                text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                text-foreground hover:text-primary
                transition-colors
                font-medium
              "
            >
              Courses
            </Link>
            <Link
              to="/jobs"
              className="
                text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                text-foreground hover:text-primary
                transition-colors
                font-medium
              "
            >
              Jobs
            </Link>
            <Link
              to="/success-stories"
              className="
                text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                text-foreground hover:text-primary
                transition-colors
                font-medium
              "
            >
              Success Stories
            </Link>
          </nav>

          {/* Profile Dialog */}
          {isAuthenticated && (
            <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
              <DialogContent
                className="
                  max-w-[90vw] xs:max-w-[80vw] sm:max-w-[500px] md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl
                  bg-white
                  rounded-2xl
                  p-0
                  border-0
                  shadow-lg
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    bg-gradient-to-b
                    from-blue-500
                    to-blue-600
                    p-4 xs:p-4 sm:p-5 md:p-5 lg:p-6 xl:p-6 2xl:p-7
                    rounded-t-2xl
                  "
                >
                  <div
                    className="
                      h-14 xs:h-16 sm:h-16 md:h-18 lg:h-18 xl:h-20 2xl:h-22
                      w-14 xs:w-16 sm:w-16 md:w-18 lg:w-18 xl:w-20 2xl:w-22
                      rounded-full
                      bg-blue-100
                      flex
                      items-center
                      justify-center
                      text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl
                      font-bold
                      text-blue-600
                      border-4
                      border-white
                      shadow-md
                    "
                  >
                    {profileData?.name?.charAt(0).toUpperCase() || "P"}
                  </div>
                  <div
                    className="
                      mt-2 xs:mt-2 sm:mt-2 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-4
                      text-white
                      font-semibold
                      text-base xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl
                    "
                  >
                    {profileData?.name || "User"}
                  </div>
                  <div
                    className="
                      text-blue-100
                      text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                    "
                  >
                    {profileData?.email || "Email not available"}
                  </div>
                </div>
                <div
                  className="
                    p-4 xs:p-4 sm:p-5 md:p-5 lg:p-6 xl:p-6 2xl:p-7
                    bg-white
                    rounded-b-2xl
                  "
                >
                  {loading && (
                    <div
                      className="
                        text-center
                        text-blue-500
                        font-medium
                        text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                      "
                    >
                      Loading profile...
                    </div>
                  )}
                  {error && (
                    <div
                      className="
                        text-center
                        text-red-500
                        font-medium
                        text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                      "
                    >
                      {error}
                    </div>
                  )}
                  {profileData && !loading && (
                    <div
                      className="
                        space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4
                        text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                      "
                    >
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Phone</span>
                        <span className="text-blue-600">{profileData.phone}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Country</span>
                        <span className="text-blue-600">{profileData.country}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">State</span>
                        <span className="text-blue-600">{profileData.state}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">City</span>
                        <span className="text-blue-600">{profileData.city}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Qualification</span>
                        <span className="text-blue-600">{profileData.qualification}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Passed Out Year</span>
                        <span className="text-blue-600">{profileData.passedout_year}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Interest</span>
                        <span className="text-blue-600">{profileData.interest}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                          border-b
                          border-gray-100
                        "
                      >
                        <span className="text-gray-600 font-medium">Educational Status</span>
                        <span className="text-blue-600">{profileData.educational_status || "Not specified"}</span>
                      </div>
                      <div
                        className="
                          flex
                          justify-between
                          py-1 xs:py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 2xl:py-2
                        "
                      >
                        <span className="text-gray-600 font-medium">Created At</span>
                        <span className="text-blue-600">{new Date(profileData.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  )}
                  <button
                    className="
                      mt-4 xs:mt-4 sm:mt-4 md:mt-5 lg:mt-5 xl:mt-6 2xl:mt-6
                      w-full
                      py-1 xs:py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2 2xl:py-3
                      bg-blue-600
                      text-white
                      rounded-lg
                      hover:bg-blue-700
                      transition-colors
                      font-medium
                      text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg
                    "
                    onClick={() => {
                      localStorage.removeItem("access_token");
                      setIsAuthenticated(false);
                      setProfileOpen(false);
                      window.location.reload();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;