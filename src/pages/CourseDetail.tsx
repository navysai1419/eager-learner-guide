import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import webDevCourse from "@/assets/web-development-course.jpg";
import dataScienceCourse from "@/assets/data-science-course.jpg";
import digitalMarketingCourse from "@/assets/digital-marketing-course.jpg";
import instructorPortrait from "@/assets/instructor-portrait.jpg";

const courseData = {
  "web-development": {
    title: "Full Stack Web Development",
    image: webDevCourse,
    description: "Master modern web development with React, Node.js, and databases. Build real-world applications from scratch.",
    duration: "12 weeks",
    level: "Beginner",
    price: "$499",
    instructor: "Sarah Johnson"
  },
  "data-science": {
    title: "Data Science & Analytics", 
    image: dataScienceCourse,
    description: "Learn Python, machine learning, and data visualization to become a data scientist.",
    duration: "16 weeks",
    level: "Intermediate", 
    price: "$699",
    instructor: "Dr. Michael Chen"
  },
  "digital-marketing": {
    title: "Digital Marketing Mastery",
    image: digitalMarketingCourse,
    description: "Master SEO, social media, content marketing, and analytics for business growth.",
    duration: "8 weeks",
    level: "Beginner",
    price: "$399",
    instructor: "Emma Rodriguez"
  }
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [quizAttempts, setQuizAttempts] = useState(0);
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);

  const course = courseData[id as keyof typeof courseData];

  if (!course) {
    return <div>Course not found</div>;
  }

  const weeklyTopics = [
    "HTML & CSS Fundamentals",
    "JavaScript Basics",
    "React Components",
    "State Management",
    "Backend with Node.js",
    "Database Integration",
    "Authentication & Security", 
    "API Development",
    "Testing & Deployment",
    "Advanced React Patterns",
    "Performance Optimization",
    "Final Project"
  ];

  const quizzes = [
    { id: 1, title: "HTML & CSS Quiz", completed: false },
    { id: 2, title: "JavaScript Fundamentals", completed: false },
    { id: 3, title: "React Basics", completed: false },
    { id: 4, title: "Backend Development", completed: false, locked: true }
  ];

  const projects = [
    "Personal Portfolio Website",
    "Todo Application with React",
    "E-commerce Backend API", 
    "Full-Stack Social Media App"
  ];

  const learningOutcomes = [
    "Build responsive websites with HTML, CSS, and JavaScript",
    "Create dynamic web applications using React",
    "Develop RESTful APIs with Node.js and Express",
    "Work with databases and implement authentication",
    "Deploy applications to cloud platforms",
    "Follow industry best practices and coding standards"
  ];

  const handleQuizClick = (quizId: number) => {
    if (quizId === 4) {
      setShowRegisterPrompt(true);
    } else {
      setQuizAttempts(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Course Header */}
      <section className="relative py-16 bg-gradient-to-r from-course-hero to-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white">{course.level}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6 text-white/90">{course.description}</p>
              <div className="flex items-center space-x-6 mb-8">
                <div>
                  <span className="block text-sm text-white/70">Duration</span>
                  <span className="text-lg font-semibold">{course.duration}</span>
                </div>
                <div>
                  <span className="block text-sm text-white/70">Price</span>
                  <span className="text-lg font-semibold">{course.price}</span>
                </div>
                <div>
                  <span className="block text-sm text-white/70">Instructor</span>
                  <span className="text-lg font-semibold">{course.instructor}</span>
                </div>
              </div>
              <Button variant="course" size="lg">
                Enroll Now
              </Button>
            </div>
            <div className="lg:block">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="learning">What You'll Learn</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
              <TabsTrigger value="topics">Weekly Topics</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    {course.description}
                  </p>
                  <p>
                    This comprehensive course is designed to take you from beginner to professional level.
                    You'll work on real-world projects, learn industry best practices, and build a portfolio
                    that will help you land your dream job.
                  </p>
                  <p>
                    Our experienced instructors provide personalized feedback and mentorship throughout
                    your learning journey. Join a community of like-minded learners and get the support
                    you need to succeed.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hands-on Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {projects.map((project, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5">
                          ✓
                        </div>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certification" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Summer Camp Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-instructor p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Industry-Recognized Certificate</h3>
                    <p className="mb-4">
                      Upon successful completion of this course, you'll receive a certificate that's
                      recognized by top tech companies worldwide.
                    </p>
                    <ul className="space-y-2">
                      <li>• Verified completion certificate</li>
                      <li>• LinkedIn badge for your profile</li>
                      <li>• Portfolio review and feedback</li>
                      <li>• Job placement assistance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {weeklyTopics.slice(0, showAllTopics ? weeklyTopics.length : 6).map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <span className="text-sm font-medium text-primary">Week {index + 1}</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  {!showAllTopics && (
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      onClick={() => setShowAllTopics(true)}
                    >
                      Show More Topics
                    </Button>
                  )}
                  {showAllTopics && (
                    <Button variant="course" className="mt-6 w-full" size="lg">
                      Register for Full Course
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quizzes" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {quizzes.map((quiz, index) => (
                      <div 
                        key={quiz.id} 
                        className={`p-4 border rounded-lg ${quiz.locked ? 'opacity-50' : 'hover:border-primary cursor-pointer'}`}
                        onClick={() => handleQuizClick(quiz.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{quiz.title}</span>
                          {quiz.locked ? (
                            <Badge variant="secondary">Locked</Badge>
                          ) : (
                            <Badge variant="outline">Available</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {showRegisterPrompt && (
                    <div className="mt-6 p-6 bg-muted rounded-lg text-center">
                      <h3 className="text-lg font-semibold mb-2">Register to Access More Quizzes</h3>
                      <p className="text-muted-foreground mb-4">
                        This quiz is available to registered students only.
                      </p>
                      <Button variant="course">Register Now</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <img 
                    src={instructorPortrait} 
                    alt={course.instructor}
                    className="w-32 h-32 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Meet Your Instructor</h3>
                  <h4 className="text-xl text-primary mb-4">{course.instructor}</h4>
                  <p className="text-muted-foreground mb-4">
                    With over 8 years of industry experience, {course.instructor} has worked at top tech 
                    companies and trained thousands of students. She brings real-world expertise and 
                    practical knowledge to every lesson.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <span>🎓 PhD in Computer Science</span>
                    <span>💼 Ex-Google, Meta</span>
                    <span>⭐ 4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Batches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Weekday Batch</h3>
                <p className="text-muted-foreground mb-4">Mon-Fri, 7PM-9PM</p>
                <p className="font-semibold text-primary mb-4">Starts: Jan 15, 2024</p>
                <Button variant="course" className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Weekend Batch</h3>
                <p className="text-muted-foreground mb-4">Sat-Sun, 10AM-2PM</p>
                <p className="font-semibold text-primary mb-4">Starts: Jan 20, 2024</p>
                <Button variant="course" className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Intensive Batch</h3>
                <p className="text-muted-foreground mb-4">Mon-Fri, 9AM-5PM</p>
                <p className="font-semibold text-primary mb-4">Starts: Feb 1, 2024</p>
                <Button variant="course" className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;