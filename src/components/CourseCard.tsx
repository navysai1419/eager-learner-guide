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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-course-hero text-white px-2 py-1 rounded text-xs font-medium">
            {level}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6">
        <Button 
          asChild 
          variant="explore" 
          className="w-full"
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