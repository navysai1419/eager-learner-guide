import { useState } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationDialog from "@/components/ui/RegistrationDialog";

// Import course images
import webDevCourse from "@/assets/UIUX Developer1.jpg";
import python from "@/assets/python1.jpg";
import node from "@/assets/node1.jpg";
import react from "@/assets/react1.jpg";
import java from "@/assets/java1.jpg";
import sql from "@/assets/sql1.jpg";
import cloud from "@/assets/cloud1.jpg"


const mockCourses = [
	 {
    id: "web-development",
    title: "UI/UX Developer",
    image: webDevCourse,
    description: "Designed to build industry-ready professionals skilled in both design principles and front-end development..",
    duration: "12 weeks",
    level: "Beginner"
  },
  {
    id: "ReactJS",
    title: "ReactJS / React Native Developer",
    image: react,
    description: " Build high-performing, responsive web and mobile applications using a single JavaScript library — React.",
    duration: "16 weeks",
    level: "Intermediate"
  },
  {
    id: "Python",
    title: "Python Developer",
    image: python,
    description: "structured to equip you with professional skills in programming, database management, and building scalable APIs using FastAPI",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: "Java Developer",
    title: "Java Developer",
    image: java,
    description: " Develop secure, scalable, and high-performance backend systems using Java — one of the most trusted languages in the software industry.",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: "Node.js Developer",
    title: "Node.js Developer",
    image: node,
    description: "Thoughtfully designed to help you build scalable, high-performance server-side applications using JavaScript — the language you already know from the frontend",
    duration: "20 weeks",
    level: "Advanced"
  },
  {
    id: "SQL & Database Management ",
    title: "SQL & Database Management ",
    image: sql,
    description: "Learn startup growth strategies, conversion optimization, and performance marketing.",
    duration: "6 weeks",
    level: "Intermediate"
  },
  {
    id: "Cloud + DevOps Program",
    title: "Cloud + DevOps Program",
    image: cloud,
    description: " secure environments, automate CI/CD pipelines, and operate mission-critical applications in multi-cloud environments",
    duration: "6 weeks",
    level: "Intermediate"
  },
  {
	id: "Java fullStack Developer",
	title: "Java fullStack Developer",
	image: java,
	description: "Designed to help you build dynamic web applications from the ground up — covering frontend design, backend logic, and database integration using industry-standard Java technologies.",
	duration: "6 weeks",
	level: "Intermediate"
  },
];

const Home = () => {
	const [regOpen, setRegOpen] = useState(false);
	return (
		<div className="min-h-screen bg-background flex flex-col">
			{/* Sticky Header */}
			<div className="sticky top-0 z-50 bg-background">
				<Header />
			</div>

			{/* Main content wrapper to ensure scrolling starts below header */}
			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-course-hero via-primary to-course-gradient-end text-white py-12 sm:py-16 md:py-20 lg:py-24">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
							Transform Your Career
							<br className="hidden sm:block" />
							<span className="block sm:inline text-accent">Learn Skills That Matter</span>
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
							Join thousands of students who've launched successful careers
							through our industry-focused courses.
						</p>
					<Button
							variant="course"
							size="lg"
							className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
							onClick={() => setRegOpen(true)}
						>
							Start Learning Today
						</Button>
						<RegistrationDialog open={regOpen} setOpen={setRegOpen} />
					</div>

					{/* Decorative gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
				</section>

				{/* Courses Section */}
				<section className="py-12 sm:py-16 md:py-20">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-8 sm:mb-10 md:mb-12">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
								Featured Courses
							</h2>
							<p className="text-lg sm:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
								Choose from our carefully curated selection of industry-relevant
								courses designed to advance your career.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
							{mockCourses.map((course) => (
								<CourseCard key={course.id} {...course} />
							))}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-12 sm:py-16 bg-muted">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
							<div className="p-4">
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
									1,000+
								</div>
								<div className="text-sm sm:text-base text-muted-foreground">
									Students Enrolled
								</div>
							</div>
							<div className="p-4">
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
								<div className="text-sm sm:text-base text-muted-foreground">
									Job Placement Rate
								</div>
							</div>
							<div className="p-4">
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
								20+
								</div>
								<div className="text-sm sm:text-base text-muted-foreground">
									Partner Companies
								</div>
							</div>
							<div className="p-4">
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
									4.8/5
								</div>
								<div className="text-sm sm:text-base text-muted-foreground">
									Average Rating
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Home;