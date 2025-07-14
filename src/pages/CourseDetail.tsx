import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationDialog from "@/components/ui/RegistrationDialog";
import { Getquizes } from "@/services/apiservices";
import { FaTrophy } from "react-icons/fa";
import webDevCourse from "@/assets/web-development-course.jpg";
import dataScienceCourse from "@/assets/data-science-course.jpg";
import digitalMarketingCourse from "@/assets/digital-marketing-course.jpg";
import instructorPortrait from "@/assets/instructor-portrait.jpg";
import Contactus from "@/components/ui/contactus";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import Attendance from "@/components/ui/attendance";
 
const courseData = {
  "web-development": {
    title: "U/UX Design & Web Development",
    image: webDevCourse,
    description: "Learn Node.js, and databases. Build real-world applications from scratch.",
    duration: "12 weeks",
    level: "Beginner",
    price: "$499",
    instructor: "Sarah Johnson",
    weeklyTopics: [
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
    ],
    projects: [
      "Personal Portfolio Website",
      "Todo Application with React",
      "E-commerce Backend API",
      "Full-Stack Social Media App"
    ],
    learningOutcomes: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Create dynamic web applications using React",
      "Develop RESTful APIs with Node.js and Express",
      "Work with databases and implement authentication",
      "Deploy applications to cloud platforms",
      "Follow industry best practices and coding standards"
    ],
    projectDetails: [
      {
        content: "A personal portfolio website showcases your skills, projects, and experiences to potential employers or clients. It typically includes sections like About Me, Projects, Skills, and Contact, with a clean, responsive design. Below is a simple implementation using HTML, CSS, and JavaScript, styled with Tailwind CSS for a modern look.",
        technologies: ["React", "Tailwind CSS", "Node.js"],
        description: "A personal portfolio website to showcase your skills and projects."
      },
      {
        content: "A todo application allows users to create, update, and delete tasks. It typically includes features like user authentication, task categorization, and deadline reminders. Below is a simple implementation using React and Redux.",
        technologies: ["React", "Redux", "Express.js"],
        description: "A todo application with advanced state management."
      },
      {
        content: "An e-commerce backend API handles product listings, shopping cart functionality, and user authentication. It typically includes features like payment processing and order management. Below is a simple implementation using Node.js and MongoDB.",
        technologies: ["Node.js", "MongoDB", "Express.js"],
        description: "A backend API for an e-commerce platform."
      },
      {
        content: "A full-stack social media app allows users to create profiles, post updates, and connect with friends. It typically includes features like real-time chat and notifications. Below is a simple implementation using React and Firebase.",
        technologies: ["React", "Firebase", "Node.js"],
        description: "A full-stack social media app with real-time features."
      }
    ]
  },
  " Java fullStack Developer": {
    title: "Java fullStack Developer",
    image: digitalMarketingCourse,
    description: " designed to help you build dynamic web applications from the ground up — covering frontend design, backend logic, and database integration using industry-standard Java technologies and deploy modern web applications end-to-end ",
    duration: "8 weeks",
    level: "Beginner",
    price: "$399",
    instructor: "Emma Rodriguez",
    weeklyTopics: [
      "HTML5,CSS",
      "Bootstrap, JavaScript",
      "Java Core",
      "Spring Boot",
      "Microservices",
      "MySQL",
 
    ],
    projects: [
      "TaskTrove",
      "HealthHub",
      "complete E-Commerce Platform",
    ],
    learningOutcomes: [
      "Create user-friendly and responsive web pages and Use modern design principles with HTML5 and CSS3",
      "Add interactivity with JavaScript and DOM manipulation",
      "Write clean Java code following OOP principles and Build APIs and server-side logic using Spring Boot",
      "Handle client requests, data processing, and error handling and Implement microservices architecture for modular app design",
      "Creating and managing relational databases with MySQL",
      "Connect backend applications to databases using Spring Data JPA",
     
    ],
    projectDetails: [
      {
        content: "An SEO audit report identifies opportunities to improve website ranking on search engines. It includes keyword analysis and technical SEO recommendations. Below is a sample structure using tools like SEMrush.",
        technologies: ["SEMrush", "Google Analytics", "Google Search Console"],
        description: "A report to improve website SEO performance."
      },
      {
        content: "A social media campaign promotes a brand or product across platforms like Instagram and Twitter. It includes content creation and scheduling. Below is a sample campaign plan.",
        technologies: ["Hootsuite", "Canva", "Instagram"],
        description: "A campaign to boost social media engagement."
      },
      {
        content: "An email marketing funnel nurtures leads through automated email sequences. It includes welcome emails and conversion-focused content. Below is a sample funnel using Mailchimp.",
        technologies: ["Mailchimp", "Google Analytics"],
        description: "An automated email sequence for lead nurturing."
      },
      {
        content: "A Google Ads campaign drives traffic through targeted ads. It includes keyword selection and ad copy creation. Below is a sample campaign setup.",
        technologies: ["Google Ads", "Google Analytics"],
        description: "A PPC campaign to drive website traffic."
      }
    ]
  },
  "data-science": {
    title: "Data Science & Analytics",
    image: dataScienceCourse,
    description: "Learn Python, machine learning, and data visualization to become a data scientist.",
    duration: "16 weeks",
    level: "Intermediate",
    price: "$699",
    instructor: "Dr. Michael Chen",
    weeklyTopics: [
      "Python Programming Basics",
      "Data Manipulation with Pandas",
      "Data Visualization with Matplotlib",
      "Statistics for Data Science",
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning Basics",
      "Big Data with Spark",
      "Model Evaluation",
      "Data Ethics and Privacy",
      "Capstone Project"
    ],
    projects: [
      "Data Visualization Dashboard",
      "Predictive Model for Sales",
      "Customer Segmentation Analysis",
      "Neural Network Classifier"
    ],
    learningOutcomes: [
      "Master Python for data analysis",
      "Create insightful data visualizations",
      "Build and evaluate machine learning models",
      "Work with large datasets using Spark",
      "Understand data ethics and privacy concerns",
      "Develop a professional data science portfolio"
    ],
    projectDetails: [
      {
        content: "A data visualization dashboard displays key metrics and trends using interactive charts. It helps stakeholders make data-driven decisions. Below is a simple implementation using Python and Dash.",
        technologies: ["Python", "Dash", "Pandas"],
        description: "An interactive dashboard for visualizing data trends."
      },
      {
        content: "A predictive model for sales forecasts future revenue based on historical data. It uses regression techniques to identify patterns. Below is a simple implementation using Python and Scikit-learn.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        description: "A model to predict sales trends."
      },
      {
        content: "Customer segmentation analysis groups customers based on behavior and demographics. It uses clustering algorithms to identify patterns. Below is a simple implementation using Python and K-means.",
        technologies: ["Python", "Scikit-learn", "Matplotlib"],
        description: "A clustering model for customer segmentation."
      },
      {
        content: "A neural network classifier predicts categories based on input features. It uses deep learning frameworks like TensorFlow. Below is a simple implementation for image classification.",
        technologies: ["Python", "TensorFlow", "Keras"],
        description: "A neural network for classification tasks."
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing Mastery",
    image: digitalMarketingCourse,
    description: "Master SEO, social media, content marketing, and analytics for business growth.",
    duration: "8 weeks",
    level: "Beginner",
    price: "$399",
    instructor: "Emma Rodriguez",
    weeklyTopics: [
      "Introduction to Digital Marketing",
      "SEO Fundamentals",
      "Content Marketing Strategies",
      "Social Media Marketing",
      "Email Marketing",
      "Pay-Per-Click Advertising",
      "Web Analytics",
      "Campaign Optimization"
    ],
    projects: [
      "SEO Audit Report",
      "Social Media Campaign",
      "Email Marketing Funnel",
      "Google Ads Campaign"
    ],
    learningOutcomes: [
      "Optimize websites for search engines",
      "Create engaging social media content",
      "Design effective email marketing campaigns",
      "Analyze and optimize digital campaigns",
      "Use Google Analytics for insights",
      "Develop a comprehensive marketing strategy"
    ],
    projectDetails: [
      {
        content: "An SEO audit report identifies opportunities to improve website ranking on search engines. It includes keyword analysis and technical SEO recommendations. Below is a sample structure using tools like SEMrush.",
        technologies: ["SEMrush", "Google Analytics", "Google Search Console"],
        description: "A report to improve website SEO performance."
      },
      {
        content: "A social media campaign promotes a brand or product across platforms like Instagram and Twitter. It includes content creation and scheduling. Below is a sample campaign plan.",
        technologies: ["Hootsuite", "Canva", "Instagram"],
        description: "A campaign to boost social media engagement."
      },
      {
        content: "An email marketing funnel nurtures leads through automated email sequences. It includes welcome emails and conversion-focused content. Below is a sample funnel using Mailchimp.",
        technologies: ["Mailchimp", "Google Analytics"],
        description: "An automated email sequence for lead nurturing."
      },
      {
        content: "A Google Ads campaign drives traffic through targeted ads. It includes keyword selection and ad copy creation. Below is a sample campaign setup.",
        technologies: ["Google Ads", "Google Analytics"],
        description: "A PPC campaign to drive website traffic."
      }
    ]
  }
};
 
const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showAllTopics, setShowAllTopics] = useState(false);
  const [quizAttempts, setQuizAttempts] = useState(0);
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const [regDialogOpen, setRegDialogOpen] = useState(false);
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  type QuizQuestion = {
    question_text: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct_option: string;
  };
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [showQuizUI, setShowQuizUI] = useState(false);
  const [currentQuizTitle, setCurrentQuizTitle] = useState("");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
 
  const course = courseData[id as keyof typeof courseData];
 
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsRegistered(!!token);
  }, []);
 
  if (!course) {
    return <div>Course not found</div>;
  }
 
  const codingQuestions = [
    {
      id: 1,
      title: "Check Even or Odd",
      question: "Write a program to read an integer and print even or odd.",
      scenario: "Using if-else statement.",
      expectedOutput: "Input: 4 -> Output: Even\nInput: 7 -> Output: Odd"
    }
  ];
 
  const quizzes = [
    { id: 1, title: "testing", completed: false },
    { id: 2, title: id === "web-development" ? "React Basics" : id === "data-science" ? "Python Basics" : "SEO Basics", completed: false },
    { id: 3, title: id === "web-development" ? "Backend Development" : id === "data-science" ? "Machine Learning" : "Social Media", completed: false },
    { id: 4, title: "Advanced Topics", completed: false, locked: true }
  ];
 
  const handleQuizClick = async (quizId: number, locked: boolean) => {
    const quiz = quizzes.find((q) => q.id === quizId);
    const token = localStorage.getItem('access_token');
    if (!token) {
      setIsRegistered(false);
      setRegDialogOpen(true);
      return;
    }
    setIsRegistered(true);
    if (quiz) {
      setCurrentQuizTitle(quiz.title);
      setShowQuizUI(true);
      setQuizFeedback("");
      setSelectedOption(null);
      setCurrentQuestionIdx(0);
      try {
        const res = await Getquizes(quiz.title);
        if (token) {
          setQuizQuestions(res);
        } else {
          setQuizQuestions([]);
        }
      } catch (err) {
        setQuizQuestions([]);
      }
    }
  };
 
  const handleQuizOptionSelect = (option: string) => {
    setSelectedOption(option);
    setQuizFeedback("");
  };
 
  const handleQuizSubmit = () => {
    if (!quizQuestions.length) return;
    const correct = quizQuestions[currentQuestionIdx].correct_option;
    if (selectedOption && selectedOption.toLowerCase() === correct.toLowerCase()) {
      setQuizFeedback("Correct!");
      setScore((prev) => prev + 1);
    } else {
      setQuizFeedback(`Incorrect. Correct answer: Option ${correct.toUpperCase()}`);
    }
    if (currentQuestionIdx === quizQuestions.length - 1) {
      setQuizCompleted(true);
    }
  };
 
  const handleQuizNext = () => {
    setCurrentQuestionIdx((idx) => Math.min(idx + 1, quizQuestions.length - 1));
    setSelectedOption(null);
    setQuizFeedback("");
  };
 
  const handleQuizPrev = () => {
    setCurrentQuestionIdx((idx) => Math.max(idx - 1, 0));
    setSelectedOption(null);
    setQuizFeedback("");
  };
 
  const getCupInfo = (score: number) => {
    if (score > 30) return { color: '#FFD700', label: 'Gold Cup' };
    if (score > 20) return { color: '#C0C0C0', label: 'Silver Cup' };
    if (score > 10) return { color: '#b87333', label: 'Copper Cup' };
    if (score > 5) return { color: '#cd7f32', label: 'Brass Cup' };
    return null;
  };
 
  const handleClearCode = () => {
    setCode('// Write your JavaScript code here\nconsole.log("Hello, World!");');
    setOutput('');
    setError('');
  };
 
  const handleRunCode = () => {
    if (selectedLanguage !== 'javascript') {
      setError('Only JavaScript is supported in this demo. Use a backend service like Judge0 for other languages.');
      setOutput('');
      return;
    }
    setOutput('');
    setError('');
    try {
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: unknown[]) => {
        logs.push(args.join(' '));
      };
      eval(code);
      console.log = originalConsoleLog;
      setOutput(logs.join('\n') || 'No output');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };
 
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background">
        <Header />
      </div>
     
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
              <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                Enroll Now
              </Button>
              <Contactus open={regOpen} setOpen={setRegOpen} />
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
 
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="learning">What You'll Learn</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
              <TabsTrigger value="topics">Weekly Topics</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="online-compiler">Online Compiler</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
            </TabsList>
 
            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    This comprehensive course is designed to take you from beginner to professional level.
                    You'll work on real-world projects, learn industry best practices, and build a portfolio
                    that will help you land your dream job.
                  </p>
                  {isRegistered ? (
                    <>
                      <p className="text-lg text-muted-foreground mb-6">
                        {course.description}
                      </p>
                      <p>
                        Our experienced instructors provide personalized feedback and mentorship throughout
                        your learning journey. Join a community of like-minded learners and get the support
                        you need to succeed.
                      </p>
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-lg text-muted-foreground mb-6">
                        Register to unlock the full course overview and start your learning journey!
                      </p>
                      <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                        Sign Up to View Overview
                      </Button>
                    </div>
                  )}
                </CardContent>
                {!isRegistered && <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />}
                {isRegistered && (
                  <>
                    <Button variant="course" className="mt-6 w-full" size="lg" onClick={() => setRegOpen(true)}>
                      Enroll Now For This Course
                    </Button>
                    <Contactus open={regOpen} setOpen={setRegOpen} />
                  </>
                )}
              </Card>
            </TabsContent>
 
            <TabsContent value="projects" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Hands-on Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {course.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary"
                        onClick={() => {
                          setSelectedProject(index);
                          if (!isRegistered) {
                            setRegDialogOpen(true);
                          }
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                  {isRegistered && selectedProject !== null && (
                    <div className="mt-6 p-6 border rounded-lg bg-muted">
                      <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                      <p className="mb-2">{course.projectDetails[selectedProject].description}</p>
                      <div className="mb-2">
                        <span className="font-semibold">Content: </span>{course.projectDetails[selectedProject].content}
                      </div>
                      <div className="mb-4">
                        <span className="font-semibold">Technologies Used: </span>
                        {course.projectDetails[selectedProject].technologies.join(", ")}
                      </div>
                      <div className="flex justify-center">
                        <Button variant="course" onClick={() => setShowContactDialog(true)}>
                          More About This
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <RegistrationDialog
                open={regDialogOpen}
                setOpen={(open) => {
                  setRegDialogOpen(open);
                  if (!open && selectedProject !== null) {
                    setIsRegistered(true);
                  }
                }}
              />
              <Contactus open={showContactDialog} setOpen={setShowContactDialog} />
            </TabsContent>
 
            <TabsContent value="learning" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  {isRegistered ? (
                    <>
                      <div className="grid gap-3">
                        {course.learningOutcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5">
                              ✓
                            </div>
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-muted-foreground">
                        <p>
                          By enrolling, you'll gain hands-on experience, personalized feedback, and access to exclusive resources that will accelerate your learning and career growth.
                        </p>
                        <p className="mt-2">
                          Unlock advanced modules, real-world projects, and direct mentorship from industry experts.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-lg text-muted-foreground mb-6">
                        Register to unlock the full list of learning outcomes and access all course features!
                      </p>
                      <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                        Sign Up to View Learning Outcomes
                      </Button>
                    </div>
                  )}
                </CardContent>
                {!isRegistered && <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />}
                {isRegistered && (
                  <>
                    <Button variant="course" className="mt-6 w-full" size="lg" onClick={() => setRegOpen(true)}>
                      Enroll Now For This Course
                    </Button>
                    <Contactus open={regOpen} setOpen={setRegOpen} />
                  </>
                )}
              </Card>
            </TabsContent>
 
            <TabsContent value="certification" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Summer Camp Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  {isRegistered ? (
                    <>
                      <div className="bg-instructor p-6 rounded-lg mb-6">
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
                      <div className="bg-muted p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-semibold mb-2">What You'll Gain from the Camp</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Mastery of in-demand technologies for {course.title}</li>
                          <li>Real-world project experience and portfolio building</li>
                          <li>Direct mentorship from industry professionals</li>
                          <li>Networking opportunities with peers and hiring partners</li>
                          <li>Access to exclusive webinars and workshops</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-lg text-muted-foreground mb-6">
                        Register to unlock certification details and see how this camp can boost your career!
                      </p>
                      <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                        Sign Up to View Certification Details
                      </Button>
                    </div>
                  )}
                </CardContent>
                {!isRegistered && <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />}
                {isRegistered && (
                  <>
                    <Button variant="course" className="mt-6 w-full" size="lg" onClick={() => setRegOpen(true)}>
                      Enroll Now to Get Certificate
                    </Button>
                    <Contactus open={regOpen} setOpen={setRegOpen} />
                  </>
                )}
              </Card>
            </TabsContent>
 
            <TabsContent value="topics" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  {isRegistered ? (
                    <>
                      <div className="grid gap-3">
                        {course.weeklyTopics.map((topic, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                            <span className="text-sm font-medium text-primary">Week {index + 1}</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-muted-foreground">
                        <p>
                          The course is structured to build your skills week by week, with hands-on assignments and interactive sessions for each topic. By joining, you'll unlock detailed resources, live Q&A, and project-based learning for every module.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid gap-3">
                        {course.weeklyTopics.slice(0, 6).map((topic, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                            <span className="text-sm font-medium text-primary">Week {index + 1}</span>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-4">
                        <p className="text-lg text-muted-foreground mb-6">
                          Register to unlock all weekly topics and access the full course content!
                        </p>
                        <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                          Sign Up to View All Topics
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
                {!isRegistered && <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />}
                {isRegistered && (
                  <>
                    <Button variant="course" className="mt-6 w-full" size="lg" onClick={() => setRegOpen(true)}>
                      Join This Course
                    </Button>
                    <Contactus open={regOpen} setOpen={setRegOpen} />
                  </>
                )}
              </Card>
            </TabsContent>
 
            <TabsContent value="quizzes" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                  {!showQuizUI ? (
                    <div className="grid gap-4">
                      {quizzes.map((quiz, index) => (
                        <div
                          key={quiz.id}
                          className={`p-4 border rounded-lg ${quiz.locked ? 'opacity-50' : 'hover:border-primary cursor-pointer'}`}
                          onClick={() => {
                            if (quiz.locked) {
                              setShowRegisterPrompt(true);
                              return;
                            }
                            setScore(0);
                            setQuizCompleted(false);
                            handleQuizClick(quiz.id, quiz.locked);
                          }}
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
                      {showRegisterPrompt && (
                        <div className="flex flex-col items-center mt-6">
                          <p className="mb-3 text-muted-foreground">Please enroll to unlock more quizzes.</p>
                          <Button variant="course" size="lg" onClick={() => setRegOpen(true)}>
                            Enroll for More Quizzes
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    quizQuestions.length ? (
                      quizCompleted ? (
                        <div className="text-center mt-8">
                          <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                          <p className="text-lg mb-2">Your Score: <span className="font-semibold">{score} / {quizQuestions.length}</span></p>
                          {getCupInfo(score) && (
                            <div className="flex flex-col items-center mt-4">
                              <FaTrophy size={64} color={getCupInfo(score)!.color} />
                              <span className="mt-2 text-lg font-semibold" style={{ color: getCupInfo(score)!.color }}>{getCupInfo(score)!.label}</span>
                            </div>
                          )}
                          {!getCupInfo(score) && (
                            <span className="text-muted-foreground">Keep practicing to earn a cup!</span>
                          )}
                          <div className="flex justify-center mt-6">
                            <Button variant="ghost" onClick={() => {
                              setShowQuizUI(false);
                              setQuizCompleted(false);
                              setScore(0);
                            }}>Back to Quizzes</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="max-w-xl mx-auto">
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Question {currentQuestionIdx + 1} of {quizQuestions.length}</h4>
                            <div className="mb-2">{quizQuestions[currentQuestionIdx].question_text}</div>
                            <div className="grid gap-2">
                              {["a", "b", "c", "d"].map((opt) => (
                                <Button
                                  key={opt}
                                  variant={selectedOption === opt ? "course" : "outline"}
                                  className="w-full text-left"
                                  onClick={() => handleQuizOptionSelect(opt)}
                                >
                                  <span className="font-bold mr-2">{opt.toUpperCase()}.</span>
                                  {quizQuestions[currentQuestionIdx][`option_${opt}`]}
                                </Button>
                              ))}
                            </div>
                            {quizFeedback && (
                              <div className={`mt-3 text-center font-semibold ${quizFeedback.startsWith('Correct') ? 'text-green-600' : 'text-red-600'}`}>{quizFeedback}</div>
                            )}
                          </div>
                          <div className="flex justify-between mt-4">
                            <Button variant="outline" onClick={handleQuizPrev} disabled={currentQuestionIdx === 0}>Prev</Button>
                            <Button variant="course" onClick={handleQuizSubmit} disabled={!selectedOption || quizCompleted}>Submit</Button>
                            <Button variant="outline" onClick={handleQuizNext} disabled={currentQuestionIdx === quizQuestions.length - 1}>Next</Button>
                          </div>
                          <div className="flex justify-center mt-6">
                            <Button variant="ghost" onClick={() => setShowQuizUI(false)}>Back to Quizzes</Button>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="text-center text-muted-foreground">No questions found for this quiz.</div>
                    )
                  )}
                  {!isRegistered && <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />}
                </CardContent>
              </Card>
            </TabsContent>
 
            <TabsContent value="online-compiler" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Online Compiler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <h3 className="text-lg font-semibold mb-2">Coding Questions</h3>
                      <Card className="p-4">
                        <h4 className="font-medium text-primary mb-4">Question Number 1: {codingQuestions[0].title}</h4>
                        <div className="space-y-4">
                          <Card className="p-3">
                            <h5 className="text-sm font-semibold text-primary">Question</h5>
                            <p className="text-sm text-muted-foreground">{codingQuestions[0].question}</p>
                          </Card>
                          <Card className="p-3">
                            <h5 className="text-sm font-semibold text-primary">Scenario</h5>
                            <p className="text-sm text-muted-foreground">{codingQuestions[0].scenario}</p>
                          </Card>
                          <Card className="p-3">
                            <h5 className="text-sm font-semibold text-primary">Expected Output</h5>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">{codingQuestions[0].expectedOutput}</p>
                          </Card>
                        </div>
                      </Card>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="c">C</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="course" onClick={handleRunCode}>Run Code</Button>
                        <Button variant="outline" onClick={handleClearCode}>Clear</Button>
                      </div>
                      <div className="code-editor-container" style={{ width: "800px", height: "500px" }}>
                        <AceEditor
                          mode="javascript"
                          theme="monokai"
                          value={code}
                          onChange={(newCode) => setCode(newCode)}
                          name="code-editor"
                          editorProps={{ $blockScrolling: true }}
                          setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                            fontSize: 14,
                            showPrintMargin: false,
                          }}
                          style={{ width: "980px", height: "500px", borderRadius: "0.5rem" }}
                          className="border rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Output</h3>
                      <Card className="w-full min-h-[143px] p-4 bg-muted">
                        {error ? (
                          <pre className="text-red-600 whitespace-pre-wrap">{error}</pre>
                        ) : (
                          <pre className="text-foreground whitespace-pre-wrap">{output || 'Run the code to see output'}</pre>
                        )}
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
 
            <TabsContent value="attendance" className="mt-8">
              {isRegistered ? (
                <Attendance />
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-6">You are not registered yet. Register now to access attendance tracking!</p>
                  <Button variant="course" size="lg" onClick={() => setRegDialogOpen(true)}>
                    Register Now
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
 
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
                    With over 8 years of industry experience, {course.instructor} has worked at top
                    companies and trained thousands of students. She brings real-world expertise and
                    practical knowledge to every lesson.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <span>🎓 PhD in {id === "data-science" ? "Data Science" : id === "digital-marketing" ? "Marketing" : "Computer Science"}</span>
                    <span>💼 Ex-{id === "data-science" ? "Amazon, IBM" : id === "digital-marketing" ? "HubSpot, Google" : "Google, Meta"}</span>
                    <span>⭐ 4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
 
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Batches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Weekday Batch",
                desc: "Mon-Fri, 7PM-9PM",
                start: "Starts: Jan 15, 2024",
              },
              {
                title: "Weekend Batch",
                desc: "Sat-Sun, 10AM-2PM",
                start: "Starts: Jan 20, 2024",
              },
              {
                title: "Intensive Batch",
                desc: "Mon-Fri, 9AM-5PM",
                start: "Starts: Feb 1, 2024",
              },
            ].map((batch, idx) => (
              <Card className="text-center p-6" key={batch.title}>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">{batch.title}</h3>
                  <p className="text-muted-foreground mb-4">{batch.desc}</p>
                  <p className="font-semibold text-primary mb-4">{batch.start}</p>
                  <Button
                    variant="course"
                    className="w-full"
                    onClick={() => setRegOpen(true)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Contactus open={regOpen} setOpen={setRegOpen} />
        </div>
      </section>
 
      <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />
      <Footer />
    </div>
  );
};
 
export default CourseDetail;