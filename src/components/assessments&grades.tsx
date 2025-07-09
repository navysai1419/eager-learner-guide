import { useEffect } from "react";

const Assessments = () => {
  useEffect(() => {
    document.title = "Assessments - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Assessments</h1>
      <p className="text-muted-foreground">This is your personalized assessments page. Explore your assessments and more!</p>
    </div>
  );
};

export default Assessments;