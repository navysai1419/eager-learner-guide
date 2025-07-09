import { useEffect } from "react";

const Leaderboard = () => {
  useEffect(() => {
    document.title = "Leaderboard - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Leaderboard</h1>
      <p className="text-muted-foreground">This is your personalized leaderboard page. Explore your leaderboard and more!</p>
    </div>
  );
};

export default Leaderboard;