import { useEffect } from "react";

const MyCourses = () => {
  useEffect(() => {
    document.title = "My Courses - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Courses</h1>
      <p className="text-muted-foreground">This is your personalized courses page. Explore your courses and more!</p>
    </div>
  );
};

export default MyCourses;