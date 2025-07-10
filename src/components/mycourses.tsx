import React, { useState, useEffect } from 'react';
import { FaEye, FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar'
import learn from '../assets/learn.jpg';
import Profileheader from './ui/Profileheader';
 
// Mock data for courses
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    author: 'John Doe',
    description: 'Learn the fundamentals of React for building dynamic web applications.',
    image: learn,
    status: 'inProgress',
    weeksToComplete: 4,
    views: 1200,
    rating: 4.5,
    progress: 60,
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    author: 'Jane Smith',
    description: 'Deep dive into JavaScript with modern ES6+ features and patterns.',
    image: learn,
    status: 'completed',
    weeksToComplete: 6,
    views: 850,
    rating: 4.8,
    progress: 100,
  },
  {
    id: 3,
    title: 'Python for Beginners',
    author: 'Alice Johnson',
    description: 'Get started with Python programming for data science and automation.',
    image: learn,
    status: 'notStarted',
    weeksToComplete: 5,
    views: 600,
    rating: 4.2,
    progress: 0,
  },
  {
    id: 4,
    title: 'Web Development',
    author: 'Bob Wilson',
    description: 'Comprehensive course covering HTML, CSS, and JavaScript.',
    image: learn,
    status: 'inProgress',
    weeksToComplete: 8,
    views: 2000,
    rating: 4.7,
    progress: 25,
  },
  {
    id: 5,
    title: 'Data Science with R',
    author: 'Emma Brown',
    description: 'Explore data analysis and visualization using R.',
    image: learn,
    status: 'notStarted',
    weeksToComplete: 7,
    views: 450,
    rating: 4.3,
    progress: 0,
  },
  {
    id: 6,
    title: 'UI/UX Design',
    author: 'Michael Lee',
    description: 'Learn the principles of designing user-friendly interfaces.',
    image: learn,
    status: 'completed',
    weeksToComplete: 3,
    views: 1800,
    rating: 4.9,
    progress: 100,
  },
];
 
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
 
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
          {/* Status Badge */}
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
              course.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : course.status === 'inProgress'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {course.status === 'completed'
              ? 'Completed'
              : course.status === 'inProgress'
              ? 'In Progress'
              : 'Not Started'}
          </span>
        </div>
        <p className="text-sm text-gray-600">by {course.author}</p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{course.description}</p>
 
        {/* Progress Bar */}
        <div className="mt-4 relative">
          <div className="bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <span className="absolute top-[-1rem] right-0 text-xs text-gray-600">
            {course.progress}%
          </span>
        </div>
 
        {/* Course Info */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-600 flex items-center">
            <FaCalendar className="mr-1" /> {course.weeksToComplete} weeks
          </span>
          <span className="text-sm text-gray-600 flex items-center">
            <FaEye className="mr-1" /> {course.views} views
          </span>
          <span className="text-sm text-yellow-500">★ {course.rating}</span>
        </div>
 
        {/* Action Button */}
        <div className="mt-4">
          <button
            className={`w-full py-2 rounded-md text-white font-medium ${
              course.status === 'completed'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors`}
            disabled={course.status === 'completed'}
            onClick={() => navigate(`/course/${course.id}`)}
          >
            {course.status === 'completed'
              ? 'Course Completed'
              : course.status === 'inProgress'
              ? 'Continue Course'
              : 'Start Course'}
          </button>
        </div>
      </div>
    </div>
  );
};
 
const MyCourses = () => {
  const [filter, setFilter] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('My Courses');
 
  useEffect(() => {
    document.title = 'My Courses - LauraTek';
  }, []);
 
  const filteredCourses = courses.filter((course) => {
    if (filter === 'all') return true;
    return course.status === filter;
  });
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setActive={setActive} active={active} />
 
      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6">
        <Profileheader />
        {/* Mobile Sidebar Toggle */}
        <div className="lg:hidden py-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-green-600 text-white rounded-md"
          >
            {sidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>
 
        {/* Courses Content */}
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>
 
          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-6">
            {['all', 'inProgress', 'completed', 'notStarted'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-md font-medium ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-colors`}
              >
                {status === 'all'
                  ? 'All Courses'
                  : status === 'inProgress'
                  ? 'In Progress'
                  : status === 'completed'
                  ? 'Completed'
                  : 'Not Started'}
              </button>
            ))}
          </div>
 
          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
            ) : (
              <p className="col-span-4 text-center text-gray-600">No courses found for this filter.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default MyCourses;