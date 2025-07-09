import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JobsPage = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "$80K - $100K" },
    { id: 2, title: "Backend Engineer", company: "Innovate Ltd", location: "Bangalore, India", salary: "$90K - $110K" },
    { id: 3, title: "Full Stack Developer", company: "NextGen Solutions", location: "Mumbai, India", salary: "$85K - $105K" },
  ];

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2"><strong>Company:</strong> {job.company}</p>
              <p className="text-muted-foreground mb-2"><strong>Location:</strong> {job.location}</p>
              <p className="text-muted-foreground mb-4"><strong>Salary:</strong> {job.salary}</p>
              <Button asChild>
                <Link to={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;