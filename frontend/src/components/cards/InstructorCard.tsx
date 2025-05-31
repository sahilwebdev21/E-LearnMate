import Link from "next/link";

interface InstructorCardProps {
  id: string;
  name: string;
  title: string;
  rating: number;
  studentCount: number;
}

const InstructorCard = ({ id, name, title, rating, studentCount }: InstructorCardProps) => {
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
      href={`/instructors/${id}`}
      className="block group"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16 mr-4" />
            <div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-gray-600 text-sm">{title}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="flex mr-2">
              {renderStars()}
            </div>
            <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            {studentCount.toLocaleString()} students
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InstructorCard;