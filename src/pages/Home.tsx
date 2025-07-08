import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import course images
import webDevCourse from "@/assets/web-development-course.jpg";
import dataScienceCourse from "@/assets/data-science-course.jpg";
import digitalMarketingCourse from "@/assets/digital-marketing-course.jpg";

const mockCourses = [
  {
    id: "web-development",
    title: "Full Stack Web Development",
    image: webDevCourse,
    description: "Master modern web development with React, Node.js, and databases. Build real-world applications from scratch.",
    duration: "12 weeks",
    level: "Beginner"
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    image: dataScienceCourse,
    description: "Learn Python, machine learning, and data visualization to become a data scientist.",
    duration: "16 weeks",
    level: "Intermediate"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    image: digitalMarketingCourse,
    description: "Master SEO, social media, content marketing, and analytics for business growth.",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: "web-development-2",
    title: "Advanced JavaScript",
    image: webDevCourse,
    description: "Deep dive into advanced JavaScript concepts, TypeScript, and modern frameworks.",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: "data-science-2",
    title: "Machine Learning Engineer",
    image: dataScienceCourse,
    description: "Build and deploy ML models with TensorFlow, PyTorch, and cloud platforms.",
    duration: "20 weeks",
    level: "Advanced"
  },
  {
    id: "digital-marketing-2",
    title: "Growth Hacking",
    image: digitalMarketingCourse,
    description: "Learn startup growth strategies, conversion optimization, and performance marketing.",
    duration: "6 weeks",
    level: "Intermediate"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-course-hero via-primary to-course-gradient-end text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Career
            <br />
            <span className="text-accent">Learn Skills That Matter</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join thousands of students who've launched successful careers through our industry-focused courses.
          </p>
          <Button variant="course" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Learning Today
          </Button>
        </div>
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated selection of industry-relevant courses designed to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;