import { useEffect } from "react";

const Calendar = () => {
  useEffect(() => {
    document.title = "Calendar - LauraTek";
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Calendar</h1>
      <p className="text-muted-foreground">This is your personalized calendar page. Explore your calendar and more!</p>
    </div>
  );
};

export default Calendar;