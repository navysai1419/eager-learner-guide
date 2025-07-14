import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RegistrationDialog from "./ui/RegistrationDialog";
import SignInDialog from "./ui/SignInDialog";
import { useState, useEffect } from "react";
import axios from "axios";
import techLogo from "@/assets/techlogo.png";
import logoImg from "@/assets/logo.png"; 
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

  useEffect(() => {
    if (profileOpen) {
      const fetchProfileData = async () => {
        setLoading(true);
        try {
          const response = await axios.get("http://192.168.0.108:8000/guest/my-profile", {
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
  }, [profileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center" style={{ minWidth: '1900px' }}>
        {/* 12-column grid for header content */}
        <div className="grid grid-cols-12 w-full items-center gap-4">
          {/* Left Section: Main Logo (col-span-3) */}
          <div className="col-span-3 flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={techLogo} alt="Main Logo" className="h-15 w-20" />
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
            {/* Profile Icon triggers dialog */}
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors" onClick={() => setProfileOpen(true)}>
              <span className="text-blue-600 font-bold text-sm">{profileData?.name?.charAt(0).toUpperCase() || "P"}</span>
            </div>
            <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
              <DialogContent className="max-w-md bg-white rounded-2xl p-0 border-0 shadow-lg">
                <div className="flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-600 p-6 rounded-t-2xl">
                  <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 border-4 border-white shadow-md">
                    {profileData?.name?.charAt(0).toUpperCase() || "P"}
                  </div>
                  <div className="mt-3 text-white font-semibold text-xl">{profileData?.name || "User"}</div>
                  <div className="text-blue-100 text-sm">{profileData?.email || "Email not available"}</div>
                </div>
                <div className="p-6 bg-white rounded-b-2xl">
                  {loading && <div className="text-center text-blue-500 font-medium">Loading profile...</div>}
                  {error && <div className="text-center text-red-500 font-medium">{error}</div>}
                  {profileData && !loading && (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Phone</span>
                        <span className="text-blue-600">{profileData.phone}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Country</span>
                        <span className="text-blue-600">{profileData.country}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">State</span>
                        <span className="text-blue-600">{profileData.state}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">City</span>
                        <span className="text-blue-600">{profileData.city}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Qualification</span>
                        <span className="text-blue-600">{profileData.qualification}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Passed Out Year</span>
                        <span className="text-blue-600">{profileData.passedout_year}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Interest</span>
                        <span className="text-blue-600">{profileData.interest}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Educational Status</span>
                        <span className="text-blue-600">{profileData.educational_status || "Not specified"}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600 font-medium">Created At</span>
                        <span className="text-blue-600">{new Date(profileData.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  )}
                  <button
                    className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={() => {
                      localStorage.removeItem('access_token');
                      setProfileOpen(false);
                      window.location.reload();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </DialogContent>
            </Dialog>
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