import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { getjobs } from"../../services/apiservices";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getjobs();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load job listings');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <>
        <div className="sticky top-0 z-50 bg-background">
          <Header />
        </div>
        <div className="container py-10">
          <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="sticky top-0 z-50 bg-background">
          <Header />
        </div>
        <div className="container py-10">
          <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
          <p className="text-red-500">{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-background">
        <Header />
      </div>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{job.designation}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2"><strong>Company:</strong> {job.company_name}</p>
                <p className="text-muted-foreground mb-2"><strong>Location:</strong> {job.location}</p>
                <p className="text-muted-foreground mb-2"><strong>Salary:</strong> {job.salary}</p>
                <p className="text-muted-foreground mb-4"><strong>Experience:</strong> {job.experience}</p>
                <Button asChild>
                  <Link to={job.url}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsPage;