import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    document.title = "Analytics - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Analytics</h1>
      <p className="text-muted-foreground">This is your personalized dashboard. Explore your courses and more!</p>
    </div>
  );
};

export default Analytics;