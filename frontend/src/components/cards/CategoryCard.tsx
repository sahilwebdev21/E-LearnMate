import Link from "next/link";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  courseCount: number;
}

const CategoryCard = ({ id, name, description, courseCount }: CategoryCardProps) => {
  return (
    <Link 
      href={`/courses?category=${id}`}
      className="block group"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
            <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {courseCount} courses available
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;