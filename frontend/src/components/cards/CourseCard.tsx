import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  price: number;
  duration: string;
  students: number;
}

const CourseCard = ({ 
  id, 
  title, 
  category, 
  instructor, 
  rating, 
  price, 
  duration, 
  students 
}: CourseCardProps) => {
  // Generate star rating
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <Link 
      href={`/courses/${id}`}
      className="block group"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        {/* Course Image */}
        <div className="relative">
          <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
          <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full">
            ${price.toFixed(2)}
          </div>
        </div>
        
        {/* Course Content */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-3">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
            <div className="flex items-center">
              <div className="flex mr-1">
                {renderStars()}
              </div>
              <span className="text-sm font-medium text-gray-700 ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {instructor}
          </div>
          
          <div className="flex justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {duration}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              {students.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;