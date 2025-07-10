import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 
const initialSuccessStories = [
  {
    name: "John Smith",
    location: "New York, NY",
    placement: "Software Engineer at TechCorp",
    package: "$120,000/year",
    image: null,
    quote: "The online courses transformed my career!",
  },
  {
    name: "Emma Johnson",
    location: "San Francisco, CA",
    placement: "Data Scientist at DataCore",
    package: "$135,000/year",
    image: null,
    quote: "Incredible learning experience!",
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    placement: "Frontend Developer at WebWorks",
    package: "$110,000/year",
    image: null,
    quote: "From beginner to pro in months!",
  },
];
 
const SuccessStories = () => {
  const [successStories, setSuccessStories] = useState(initialSuccessStories);
  const [currentStory, setCurrentStory] = useState(0);
 
  const handlePrev = () => {
    setCurrentStory((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };
 
  const handleNext = () => {
    setCurrentStory((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };
 
  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedStories = [...successStories];
        updatedStories[index] = { ...updatedStories[index], image: e.target.result };
        setSuccessStories(updatedStories);
      };
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <div className="min-h-screen bg-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-16">
          Inspiring Success Stories
        </h1>
 
        {/* Carousel Section */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="relative">
            {successStories[currentStory].image ? (
              <img
                src={successStories[currentStory].image}
                alt={successStories[currentStory].name}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-t-2xl"
              />
            ) : (
              <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center rounded-t-2xl">
                <span className="text-gray-500">No image uploaded</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity">
              <button
                onClick={handlePrev}
                className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
          {/* <div className="p-8 text-center bg-indigo-50">
            <h2 className="text-3xl font-bold text-indigo-900">
              {successStories[currentStory].name}
            </h2>
            <p className="text-lg text-indigo-600 italic mt-2">
              "{successStories[currentStory].quote}"
            </p>
            <p className="text-indigo-700 font-medium mt-2">
              {successStories[currentStory].placement}
            </p>
            <label className="mt-4 inline-block cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(currentStory, e)}
              />
            </label>
          </div> */}
        </div>
 
        {/* Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image uploaded</span>
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-900">{story.name}</h3>
                <p className="text-indigo-600">{story.location}</p>
                <p className="text-indigo-800 font-medium mt-2">{story.placement}</p>
                <p className="text-indigo-600"> {story.package}</p>
                <p className="text-gray-600 italic mt-2">"{story.quote}"</p>
                {/* <label className="mt-4 inline-block cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(index, e)}
                  />
                </label> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default SuccessStories;