import { useEffect } from "react";

const Attendance = () => {
  useEffect(() => {
    document.title = "Attendance - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Attendance</h1>
      <p className="text-muted-foreground">This is your personalized attendance page. Explore your attendance and more!</p>
    </div>
  );
};

export default Attendance;