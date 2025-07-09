import { useEffect } from "react";

const MockInterview = () => {
  useEffect(() => {
    document.title = "Mock Interview - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Mock Interview</h1>
      <p className="text-muted-foreground">This is your personalized mock interview page. Explore your mock interview and more!</p>
    </div>
  );
};

export default MockInterview;