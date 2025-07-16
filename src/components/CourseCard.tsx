import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  duration: string;
  level: string;
}

const CourseCard = ({ id, title, image, description, duration, level }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full max-w-sm mx-auto sm:max-w-none">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-course-hero text-white px-2 py-1 rounded text-xs font-medium">
            {level}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
        <Button 
          asChild 
          variant="explore" 
          className="w-full text-sm sm:text-base"
        >
          <Link to={`/course/${id}`}>
            Explore Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;