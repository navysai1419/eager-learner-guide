import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import course images
import webDevCourse from "@/assets/web-development-course.jpg";
import dataScienceCourse from "@/assets/data-science-course.jpg";
import digitalMarketingCourse from "@/assets/digital-marketing-course.jpg";

const allCourses = [
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
    id: "advanced-js",
    title: "Advanced JavaScript",
    image: webDevCourse,
    description: "Deep dive into advanced JavaScript concepts, TypeScript, and modern frameworks.",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    image: dataScienceCourse,
    description: "Build and deploy ML models with TensorFlow, PyTorch, and cloud platforms.",
    duration: "20 weeks",
    level: "Advanced"
  },
  {
    id: "growth-hacking",
    title: "Growth Hacking",
    image: digitalMarketingCourse,
    description: "Learn startup growth strategies, conversion optimization, and performance marketing.",
    duration: "6 weeks",
    level: "Intermediate"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
     <div className="sticky top-0 z-50 bg-background">
        <Header />
      </div>
      
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-course-hero to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Courses
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our comprehensive collection of industry-focused courses designed to advance your career.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;