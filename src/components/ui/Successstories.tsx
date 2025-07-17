import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import ibm from '@/assets/logoibm.webp';

// Placeholder images - replace with actual image paths
const student1 = '/images/student1.jpg';
const student2 = '/images/student2.jpg';
const student3 = '/images/student3.jpg';
const student4 = '/images/student4.jpg';
const student5 = '/images/student5.jpg';
const student6 = '/images/student6.jpg';
const hrmsImage = '/images/hrms-dashboard.jpg';
const mediImage = '/images/medi-app.jpg';

const initialSuccessStories = [
  {
    name: "Rohit M.",
    education: "BCA Student",
    placement: "Frontend/Backend Developer",
    quote: "I was new to coding, but Laura's trainers made frontend and backend development easy to grasp. Their patience and support were incredible.",
    image: student1,
  },
  {
    name: "Kiran R.",
    education: "B.Tech Final Year",
    placement: "Placed in 2 months",
    quote: "Laura helped me move from theory to real-time projects. The LMS is simple, and I cracked my first placement in just 2 months.",
    image: student2,
  },
  {
    name: "Sneha T.",
    education: "B.Sc Student",
    placement: "Internship Experience",
    quote: "Thanks to Laura's online education model, I gained hands-on project experience and an internship certificate while still in college.",
    image: student3,
  },
  {
    name: "Aditya P.",
    education: "MCA Student",
    placement: "App Developer",
    quote: "The structured LMS and hybrid training made it easy to balance college and learning. I built real apps and learned by doing.",
    image: student4,
  },
  {
    name: "Divya S.",
    education: "Fresher",
    placement: "Successfully Placed",
    quote: "Mock interviews, resume help, and real-time training helped me land a job. Laura is truly career-focused.",
    image: student5,
  },
  {
    name: "Ravi K.",
    education: "BSc Graduate",
    placement: "Software Developer",
    quote: "At Laura, we worked on live software projects. It gave me the confidence to face technical rounds.",
    image: student6,
  },
];

const partnerLogos = [
  { name: "IBM", logo: ibm },
  { name: "Cognizant", logo: ibm },
  { name: "Hiring Panda", logo: ibm },
  { name: "HIC Global Solutions", logo: ibm },
  { name: "Krazy Tech", logo: ibm },
  { name: "Inity Infotech", logo: ibm },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const SuccessStories = () => {
  const [successStories, setSuccessStories] = useState(initialSuccessStories);
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentStory(prev => (prev === successStories.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentStory((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentStory((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          const updatedStories = [...successStories];
          updatedStories[index] = { 
            ...updatedStories[index], 
            image: result
          };
          setSuccessStories(updatedStories);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl font-extrabold text-center text-white mb-8"
          >
            Success Beyond the Classroom
          </motion.h1>

          {/* Stats Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-2xl p-8 mb-16 overflow-hidden"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-900">LauraTek's Placement Journeys</h2>
              <p className="text-gray-600 mt-2">Transforming students into industry-ready professionals</p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-900">3 Full Batches</h3>
                <p className="text-gray-600">Transformed in just 9 months</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="bg-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-900">20+ Hiring Partners</h3>
                <p className="text-gray-600">Including IBM, Cognizant, and more</p>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="bg-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-indigo-900">Comprehensive Training</h3>
                <p className="text-gray-600">Real projects, certifications, and placement prep</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-indigo-900 mb-4 text-center">Our Placement Partners</h3>
              <div className="overflow-hidden relative py-4">
                <motion.div
                  className="flex"
                  initial={{ x: 0 }}
                  animate={{
                    x: `-${partnerLogos.length * 150}px`, // Move by total width of one set of logos
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: partnerLogos.length * 2, // 2 seconds per logo
                        ease: 'linear',
                      },
                    },
                  }}
                  style={{ 
                    display: 'flex',
                    width: `${partnerLogos.length * 2 * 150}px`, // Double for seamless loop
                  }}
                >
                  {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="flex-shrink-0 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center"
                      style={{ 
                        width: '150px', // Fixed width for each card
                        minWidth: '150px', // Ensure responsiveness
                        marginRight: '0px', // No gap between cards
                      }}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-12 w-auto object-contain mb-2"
                        onError={(e) => {
                          const target = e.target;
                          // target.onerror = null;
                          // target.src = '/images/placeholder-logo.png';
                        }}
                      />
                      <span className="text-sm font-medium text-indigo-900 text-center">{partner.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Carousel Section */}
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl font-extrabold text-center text-white mb-8"
          >
            Student Success Stories
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="relative">
              {successStories[currentStory].image ? (
                <motion.img
                  key={currentStory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={successStories[currentStory].image}
                  alt={successStories[currentStory].name}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-t-2xl"
                />
              ) : (
                <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center rounded-t-2xl">
                  <span className="text-gray-500">No image uploaded</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-white"
                >
                  {successStories[currentStory].name}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-indigo-200"
                >
                  {successStories[currentStory].education}
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white font-medium mt-2"
                >
                  {successStories[currentStory].placement}
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-white italic mt-4"
                >
                  "{successStories[currentStory].quote}"
                </motion.p>
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={handlePrev}
                  className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Student Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  {story.image ? (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image uploaded</span>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-indigo-900">{story.name}</h3>
                  <p className="text-indigo-600">{story.education}</p>
                  <p className="text-indigo-800 font-medium mt-2">{story.placement}</p>
                  <p className="text-gray-600 italic mt-2">"{story.quote}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Innovations Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-2xl p-8 mt-16 overflow-hidden"
          >
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Our Innovations</h2>
            <p className="text-center text-gray-600 mb-8">Driving Impact Across Education, HR, and Healthcare</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-6 rounded-lg overflow-hidden"
              >
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={hrmsImage} 
                    alt="Dohra HRMS" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Dohra HRMS</h3>
                <p className="text-gray-600">A smart, cloud-based Human Resource Management System built to streamline employee lifecycle management, including onboarding, attendance tracking, payroll automation, and performance insights for modern organizations.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-6 rounded-lg overflow-hidden"
              >
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={mediImage} 
                    alt="OneStep Medi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">OneStep Medi</h3>
                <p className="text-gray-600">A comprehensive digital healthcare platform that facilitates doctor appointments, diagnostic bookings, medicine delivery, and includes dedicated digital marketing services for doctors to enhance their online visibility, patient reach, and brand reputation.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SuccessStories;