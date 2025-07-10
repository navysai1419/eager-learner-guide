import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationDialog from "@/components/ui/RegistrationDialog";

// Import images
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
  const [regOpen, setRegOpen] = useState(false);
  const [regOpen1, setRegOpen1] = useState(false);
  const [regDialogOpen, setRegDialogOpen] = useState(false);
   const [regDialogOpen1, setRegDialogOpen1] = useState(false);

  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

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

  const projectDetails = [
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
  ];

  const handleQuizClick = (quizId: number, locked: boolean) => {
    setRegDialogOpen(true);
  };

  // Helper for the Read More button
  const ReadMoreButton = () => (
    <div className="flex justify-center">
      <button
        className="flex items-center gap-1 text-primary font-semibold hover:underline text-sm mt-4"
        onClick={() => setRegDialogOpen(true)}
      >
        Sign Up <span className="ml-1">&raquo;&raquo; Read More</span>
      </button>
    </div>
  );

  
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
      // Redirect console.log to capture output
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args: unknown[]) => {
        logs.push(args.join(' '));
      };
 
      // Execute code in a safe context
      // Note: eval is used for simplicity but should be replaced with a proper sandbox in production
      // eslint-disable-next-line no-eval
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
  }
  return (
    <div className="min-h-screen bg-background">
     <div className="sticky top-0 z-50 bg-background">
        <Header />
      </div>
      
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

      {/* Course Content */}
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
                <div className="flex justify-center">
                  <ReadMoreButton />
                </div>
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
                  {/* Show project details if registered and a project is selected */}
                  {isRegistered && selectedProject !== null && (
                    <div className="mt-6 p-6 border rounded-lg bg-muted">
                      <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                      <p className="mb-2">{projectDetails[selectedProject].description}</p>
                      <div className="mb-2">
                        <span className="font-semibold">Content: </span>{projectDetails[selectedProject].content}
                      </div>
                      <div className="mb-4">
                        <span className="font-semibold">Technologies Used: </span>
                        {projectDetails[selectedProject].technologies.join(", ")}
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
                 <div className="flex justify-center">
                <ReadMoreButton />
              </div>
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
                <div className="flex justify-center">
                <ReadMoreButton />
              </div>
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
                    <>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                      onClick={() => setRegDialogOpen(true)}
                    >
                      Show More Topics
                    </Button>
                    <RegistrationDialog open={regDialogOpen} setOpen={setRegDialogOpen} />
                    </>

                  )}
                  {showAllTopics && (
                    <>
                      <Button variant="course" className="mt-6 w-full" size="lg" onClick={() => setRegOpen(true)}>
                        Register for Full Course
                      </Button>
                      <Contactus open={regOpen} setOpen={setRegOpen} />
                    </>

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
                        onClick={() => handleQuizClick(quiz.id, quiz.locked)}
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
                      <Button variant="course" size="lg" className="text-lg px-8 py-4 h-auto"
							           onClick={() => setRegOpen(true)}>Enroll Now</Button> <Contactus open={regOpen} setOpen={setRegOpen} />
                    </div>
                  )}
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
                    {/* Coding Questions */}
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
                              <Card className="p-4">
                        <h4 className="font-medium text-primary mb-4">Question Number 2: {codingQuestions[0].title}</h4>
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
 
                    {/* Code Editor and Output */}
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
                        <Button
                          variant="course"
                          onClick={handleRunCode}
                        >
                          Run Code
                        </Button>
                        <Button
                          variant="outline"
                          onClick={handleClearCode}
                        >
                          Clear
                        </Button>
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
              <Attendance />
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